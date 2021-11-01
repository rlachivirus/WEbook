import React from "react";
import { Redirect } from 'react-router-dom';

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
            birthday: user.birthday
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.user.id);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.updateUser(user);
        this.props.history.push(`/users/${this.props.user.id}`)
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        const { email, fname, lname, bio, birthday } = this.state;

        return (
            <div>
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
                    <button className="button">Submit Changes</button>
                </form>
            </div>

        )

    }
}

export default ProfileEditForm;