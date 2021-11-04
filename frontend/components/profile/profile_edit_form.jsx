import React from "react";
import { Link } from 'react-router-dom';

class ProfileEditForm extends React.Component {
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
        }

        this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.state.id);
    }

    handleFile(e) {
        e.preventDefault();

        return this.setState({ photoFile: e.currentTarget.files[0] })
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
        const user = Object.assign({}, this.state);
        this.props.updateUser(user);
        this.props.history.push(`/users/${this.state.id}`)
    }

    handlePhotoSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', this.state.id);
        formData.append('user[email]', this.state.email);
        formData.append('user[fname]', this.state.fname);
        formData.append('user[lname]', this.state.lname);
        formData.append('user[bio]', this.state.bio);
        formData.append('user[birthday]', this.state.birthday);

        if (this.state.photoFile) {
            formData.append('user[photo]', this.state.photoFile);
        }

        this.props.updateUserPhoto(formData);
        this.props.history.push(`/users/${this.state.id}`)
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        const { email, fname, lname, bio, birthday } = this.state;

        return (
            <div>
                <form onSubmit={this.handlePhotoSubmit}>
                    <input type="file" onChange={this.handleFile} />
                    <button>Upload Photo</button>
                </form>

                <form className="session-form" onSubmit={this.handleSubmit}>
                    <div className="session-form-input">
                        <label>Email
                            <input
                                className="session-form-field"
                                type="text"
                                onChange={this.update('email')}
                                value={email}
                            />
                        </label>
                        <label>First Name
                            <input
                                className="session-form-field"
                                type="text"
                                onChange={this.update('fname')}
                                value={fname}
                            />
                        </label>
                        <label>Last Name
                            <input
                                className="session-form-field"
                                type="text"
                                onChange={this.update('lname')}
                                value={lname}
                            />
                        </label>
                        <label>Biography
                            <input
                                className="session-form-field"
                                type="textarea"
                                onChange={this.update('bio')}
                                value={bio}
                            />
                        </label>
                        <label>Birthday
                            <input
                                className="session-form-field"
                                type="text"
                                onChange={this.update('birthday')}
                                value={birthday}
                            />
                        </label>
                    </div>
                    <div>
                    <button className="button">Submit Changes</button>
                    </div>
                    <div>
                    <Link to={`users/${this.state.id}`}>Cancel</Link>
                    </div>
                </form>
            </div>

        )

    }
}

export default ProfileEditForm;