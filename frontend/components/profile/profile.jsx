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
            photoFile: null
        }

    }

    componentDidMount() {
        this.props.fetchUser(this.props.user.id);
    }

    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]})
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
        formData.append('user[photo]', this.state.photoFile);
        // debugger
        this.props.updateUser(formData);
    }

    render() {
        const { user } = this.props;   
        console.log(this.state)
        // debugger
        // const photo = user.photoUrl ? user.photoUrl : null
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="file" onChange={this.handleFile.bind(this)} />
                    <button>Upload Photo</button>
                </form>

                <p>{user.fname}</p>
                <p>{user.lname}</p>
                <p>{user.bio}</p>
                <p>{user.birthday}</p>
                <img src={user.photoUrl} />
                

                <Link to={`/users/${user.id}/edit`}>Edit User Info!</Link>
            </div>

        )

    }
}

export default Profile;