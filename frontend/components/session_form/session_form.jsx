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
        this.openModal = this.openModal.bind(this);
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

    demoUser() {   
        const demo = {
            email: 'demo@email.com',
            password: 'password'
        };
        this.props.processForm(demo);
    }

    openModal() {
        const emailInput = document.getElementById('email')
        const passwordInput = document.getElementById('password')
        const errorInput = document.getElementById('error')

        emailInput.style.borderColor = ""
        passwordInput.style.borderColor = ""
        errorInput.style.display = "none"

        this.props.openModal('signup');
    }

    render () {
        const { errors } = this.props;
        const { email, password } = this.state;

        return (
            <div className="splash-page">

                <div className="splash-intro">
                    <p>WEbook</p>
                    <p>Connect with friends and the world</p>
                    <p>around you on WEbook.</p>
                </div>

                <div className="login-box">

                    <form onSubmit={this.handleSubmit}>

                        <input
                        id="email"
                        type="text"
                        onChange={this.update('email')}
                        value={email}
                        placeholder="Email"
                        style={ errors.includes("Invalid email/password combination") ? ({ borderColor: "red" }) : ({ borderColor: ""})}
                        />
                        <br/>
                        <input
                        id="password"
                        type="password"
                        onChange={this.update('password')}
                        value={password}
                        placeholder="Password"
                        style={errors.includes("Invalid email/password combination") ? ({ borderColor: "red" }) : ({ borderColor: "" })}
                        />

                        <p id="error" style={errors.includes("Invalid email/password combination") ? ({ display: "" }) : ({ display: "none" })}>
                            Invalid email/password combination!
                        </p>

                        <button>Log In</button>

                        <div className="demo-user" onClick={this.demoUser}>Try Demo?</div>
                        <br/>
                        <hr className="hr-bottom" />

                        <div className="new-account" onClick={this.openModal}>Create new account</div>
                    </form>
                </div>

                <div className="footer">
                    {/* <a href="https://github.com/rlachivirus" target="_blank"><img className="github" src={window.github} /></a>
                    <a href="https://www.linkedin.com/in/albertck/" target="_blank"><img className="linkedin" src={window.linkedin} /></a>
                    <a href="https://rlachivirus.github.io/albertck/" target="_blank"><img className="portfolio" src={window.portfolio} /></a> */}
                    
                </div>
            </div>
        )
    }
}

export default SessionForm;
