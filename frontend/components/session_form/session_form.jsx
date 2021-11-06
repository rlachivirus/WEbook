import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: '',
            bio: '',
            birthday: ''
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
        this.props.processForm(user)
            .then(this.props.closeModal);
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
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            </div>
        ) : (
            null
        )

        const altLink = (formType === "Log In") ? (
            <div className="new-account" onClick={() => this.props.openModal('signup')}>Create new account</div>
        ) : (
            null
        )

        const demoLogin = (formType === "Log In") ? (
                <div className="demo-user" onClick={this.demoUser}>Try Demo?</div>
        ) : (
            null
        );

        const firstName = (formType === 'Sign Up') ? (
                <input
                className="fname-field"
                type="text"
                onChange={this.update("fname")}
                value={fname}
                placeholder="First Name"
                />
        ) : (
            null
        )

        const lastName = (formType === 'Sign Up') ? (
                <input
                className="lname-field"
                type="text"
                onChange={this.update("lname")}
                value={lname}
                placeholder="Last Name"
                />
        ) : (
            null
        )

        const intro = (formType === 'Log In') ? (
            <div className="splash-intro">
                <p>WEbook</p>
                <p>Connect with friends and the world</p>
                <p>around you on WEbook.</p>
            </div>
        ) : (
            null
        )

        const signupIntro = (formType === 'Sign Up') ? (
            <div className='signup-intro'>
                <h2>{formType}</h2>
                <p>It's quick and easy.</p>
                <hr className="hr-top" />
                <div onClick={this.props.closeModal} className="close-x">X</div>
            </div>
        ) : (
            null
        )

        const footer = (formType === 'Log In') ? (
            <div className="footer">
                This is where my github, linkedin, etc logos
                and my info will go.
            </div>
        ) : (
            null
        );

        return (
            <div className="splash-page">

                {intro}
                <div className={ formType === 'Log In' ? "login-box" : "signup-box" }>
                    {/* <h2>{formType === 'Sign Up' ? formType : null}</h2> */}
                    {signupIntro}

                    <form onSubmit={this.handleSubmit}>
                        {firstName}
                        {lastName}
                            <input
                            type="text"
                            onChange={this.update('email')}
                            value={email}
                            placeholder="Email or phone number"
                            />
                            <br/>
                            <input
                            type="password"
                            onChange={this.update('password')}
                            value={password}
                            placeholder="Password"
                            />

                        {errorMessages}
                        <button>{formType}</button>
                        {demoLogin}
                        <br/>
                        <hr className="hr-bottom" />
                        {altLink}
                    </form>
                </div>
                {footer}
            </div>
        )
    }
}

export default SessionForm;
