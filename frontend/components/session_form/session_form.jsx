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
            <div className="new-account" onClick={() => this.props.openModal('signup')}>Create New Account</div>
        ) : (
            null
        )

        const demoLogin = (formType === "Log In") ? (
            // <p>Use a demo! &nbsp;
                <div className="demo-user" onClick={this.demoUser}>Try Demo?</div>
            // </p>
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

        const intro = (formType === 'Log In') ? (
            <div className="splash-intro">WEbook
                <p>Connect with friends and the world</p>
            </div>
        ) : (
            null
        )
    
        return (
            <div className="splash-page">

                {intro}
                <div className="login-box">
                    <h2>{formType === 'Sign up' ? formType : null}</h2>

                    <form onSubmit={this.handleSubmit}>
                        {/* <div className="session-form-input"> */}
                            {firstName}
                            {lastName}
                                <input
                                className="session-form-field"
                                type="text"
                                onChange={this.update('email')}
                                value={email}
                                placeholder="Email or Phone Number"
                                />
                                <br/>
                                <input
                                className="session-form-field"
                                type="password"
                                onChange={this.update('password')}
                                value={password}
                                placeholder="Password"
                                />

                            {errorMessages}
                            <button className="session-button">{formType}</button>
                            {demoLogin}
                            <br />
                            {altLink}
                        {/* </div> */}
                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm;
