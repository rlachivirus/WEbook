import React from "react";
import { Link } from 'react-router-dom';

class ProfileEditForm extends React.Component {
    constructor(props) {
        super(props);
        const { user } = this.props;
        // this.state = this.props.user;
        this.state = {
            id: user.id,
            email: user.email,
            fname: user.fname,
            lname: user.lname,
            bio: user.bio,
            birthday: user.birthday,
            photoFile: null,
            photoUrl: null
        }

        // this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.state.id);
    }

    handleFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result })
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }

        // const file = e.currentTarget.files[0];
        // const fileReader = new FileReader();
        // fileReader.onloadend = () => {
        //     this.setState({ photoFile: file, photoUrl: fileReader.result });
        // };

        // if (file) {
        //     fileReader.readAsDataURL(file);
        // }

    }

    handleSubmit(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        // this.props.updateUser(user);
        // this.props.history.push(`/users/${this.state.id}`);
        // this.props.closeModal();

        const formData = new FormData();
        formData.append('user[id]', this.state.id);
        // formData.append('user[email]', this.state.email);
        formData.append('user[fname]', this.state.fname);
        formData.append('user[lname]', this.state.lname);
        formData.append('user[bio]', this.state.bio);
        formData.append('user[birthday]', this.state.birthday);

        if (this.state.photoFile) {
            formData.append('user[photo]', this.state.photoFile);
        }
        // debugger
        // this.props.updateUser(user)
        this.props.updateUserPhoto(formData);
        this.props.closeModal();
        // this.props.history.push(`/users/${this.state.id}`)
    }

    // handlePhotoSubmit(e) {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('user[id]', this.state.id);
    //     formData.append('user[email]', this.state.email);
    //     formData.append('user[fname]', this.state.fname);
    //     formData.append('user[lname]', this.state.lname);
    //     formData.append('user[bio]', this.state.bio);
    //     formData.append('user[birthday]', this.state.birthday);

    //     if (this.state.photoFile) {
    //         formData.append('user[photo]', this.state.photoFile);
    //     }

    //     this.props.updateUserPhoto(formData);
    //     this.props.history.push(`/users/${this.state.id}`)
    // }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        const { email, fname, lname, bio, birthday } = this.state;

        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : <div className="empty-space"></div>;
        return (
            <div className="profile-edit-form">
                {/* <form onSubmit={this.handlePhotoSubmit}>
                    <input type="file" onChange={this.handleFile} />
                    <button>Upload Photo</button>
                </form> */}

                <form className="session-form" onSubmit={this.handleSubmit}>

                    <p className="title">Edit Profile</p>
                    <div className="cancel" onClick={this.props.closeModal}>X</div>
                    <hr/>
                    
                    <div className="session-form-input">
                        {/* <label>Email: 
                            <input
                                className="session-form-field"
                                type="text"
                                onChange={this.update('email')}
                                value={email}
                            />
                        </label> */}
                        <label>First Name: 
                            <input
                                className="session-form-field"
                                type="text"
                                onChange={this.update('fname')}
                                value={fname}
                            />
                        </label>
                        <label>Last Name: 
                            <input
                                className="session-form-field"
                                type="text"
                                onChange={this.update('lname')}
                                value={lname}
                            />
                        </label>
                        <label>Biography:
                            <br/>
                            <textarea
                                className="session-form-field"
                                // type="textarea"
                                onChange={this.update('bio')}
                                value={bio}
                            />
                        </label>
                        <label>Birthday: 
                            <input
                                className="session-form-field"
                                type="text"
                                onChange={this.update('birthday')}
                                value={birthday}
                            />
                        </label>
                    </div>
                    {preview}
                    <input className="select-picture" type="file" onChange={this.handleFile} />
                    <div className="submit-cancel">
                        {/* <div className="cancel" onClick={this.props.closeModal}>Cancel</div> */}
                        <button className="submit">Submit Changes</button>
                    </div>
                </form>
            </div>

        )

    }
}

export default ProfileEditForm;