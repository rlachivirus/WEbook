import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: ''
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
        const { email, password, fname, lname } = this.state;

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

        const altLink = (formType === "Log In") ? (
            // <Link className="session-button" to="/signup">Sign Up</Link>
            <span onClick={() => this.props.openModal('signup')}>Create New Account</span>
        ) : (
            // <Link className="session-button" to="/login">Log in</Link>
            null
        )

        const demoLogin = (formType === "Log In") ? (
            <p>Use a demo! &nbsp;
                <span onClick={this.demoUser}>Demo User</span>
            </p>
        ) : (
            null
        );

        const firstName = (formType === 'Sign up') ? (
            <label>
                <input
                className="session-form-field"
                type="text"
                onChange={this.update("fname")}
                value={fname}
                placeholder="First Name"
                />
            </label>
        ) : (
            null
        )

        const lastName = (formType === 'Sign up') ? (
            <label>
                <input
                className="session-form-field"
                type="text"
                onChange={this.update("lname")}
                value={lname}
                placeholder="Last Name"
                />
            </label>
        ) : (
            null
        )
    
        return (
            <div className="session-form-container">
                    <h2 className="session-formtype">{formType}</h2>
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <div className="session-form-input">
                            {firstName}
                            {lastName}
                            <label>
                                <input
                                className="session-form-field"
                                type="text"
                                onChange={this.update('email')}
                                value={email}
                                placeholder="Email or Phone Number"
                                />
                            </label>
                            <label>
                                <input
                                className="session-form-field"
                                type="password"
                                onChange={this.update('password')}
                                value={password}
                                placeholder="Password"
                                />
                            </label>
                            {errorMessages}
                        </div>
                        <button className="session-button">{formType}</button>
                        {altLink}
                    {/* <span onClick={() => this.props.openModal('signup')}>Create New Account</span> */}
                    </form>
                    <div className="demo-login">
                            {demoLogin}
                        </div>
                </div>
        )
    }
}

export default SessionForm;
