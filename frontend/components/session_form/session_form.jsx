import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value })}
    }

    demoUser(e) {   
        // e.preventDefault();
        const demo = {
            email: 'demo@email.com',
            password: 'password'
        };
        this.props.processForm(demo);
    }

    render () {
        const { errors, formType } = this.props;
        const { email, password } = this.state;

        const errorMessages = errors ? (
            <div className="session-error">
                <ul>
                    {errors.map(error => 
                        <li>{error}</li>
                    )}
                </ul>
            </div>
        ) : (
            null
        )

        const altLink = (formType === "Login") ? (
            <Link className="session-button" to="/signup">Sign Up</Link>
        ) : (
            <Link className="session-button" to="/login">Log in</Link>
        )

        const demoLogin = (formType === "Login") ? (
            <p>Use a demo! &nbsp;
                <span onClick={this.demoUser}>Demo User</span>
            </p>
        ) : (
            null
        );

        return (
            <div className="session-form-container">
                <h2 className="session-formtype">{formType}</h2>
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
                        <label>Password
                            <input
                            className="session-form-field"
                            type="password"
                            onChange={this.update('password')}
                            value={password}
                            />
                        </label>
                        {errorMessages}
                    </div>
                    {altLink}
                    <button className="session-button">{formType}</button>
                </form>
                <div className="demo-login">
                        {demoLogin}
                    </div>
            </div>
        )
    }
}

export default SessionForm;