import React from "react";
import { Link } from 'react-router-dom'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        const { user } = this.props;
        this.state = {
            id: user.id,
            email: user.email,
            fname: user.fname,
            lname: user.lname,
            bio: user.bio,
            birthday: user.birthday,
            photoFile: null,
            photoUrl: user.photoUrl
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.user.id);
    }

    handleFile(e) {
        e.preventDefault();
        // debugger
        // return this.setState({ photoFile: e.currentTarget.files[0] })
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            // debugger
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        
        if (file) {
            // debugger
            fileReader.readAsDataURL(file);
        }
        
        // debugger
        // this.setState({ photoFile: e.currentTarget.files[0], photoUrl: e.currentTarget.files[0] });
        
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', this.state.id);
        formData.append('user[email]', this.state.email);
        formData.append('user[fname]', this.state.fname);
        formData.append('user[lname]', this.state.lname);
        formData.append('user[bio]', this.state.bio);
        formData.append('user[birthday]', this.state.birthday);
        formData.append('user[photoUrl]', this.state.photoUrl);
        if (this.state.photoFile) {
            // debugger
            formData.append('user[photo]', this.state.photoFile);
        }
        // debugger
        
        this.props.updateUser(formData);
    }

    render() {
        const { user } = this.props;   
        console.log(this.state)
        console.log(this.props)
        // debugger
        // const photo = user.photoUrl ? user.photoUrl : null
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" onChange={this.handleFile} />
                    <button>Upload Photo</button>
                </form>

                <p>{this.state.fname}</p>
                <p>{this.state.lname}</p>
                <p>{this.state.bio}</p>
                <p>{this.state.birthday}</p>
                <img id="image" src={this.state.photoUrl} />
                {/* <img src="https://app-webook-dev.s3.amazonaws.com/9B3CQYEsxjXGtU4hfnnMNMpW" /> */}

                <Link to={`/users/${user.id}/edit`}>Edit User Info!</Link>
            </div>

        )

    }
}

export default Profile;