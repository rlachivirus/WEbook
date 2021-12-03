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
            // .then(res => {
            //     if (res.type === "RECEIVE_CURRENT_USER") {
            //         this.props.history.push("/posts");
            //     }
            // });
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value })}
    }

    demoUser() {   
        const demo = {
            email: 'demo@email.com',
            password: 'password'
        };

        this.props.processForm(demo)
            // .then(res => {
            //     if (res.type === "RECEIVE_CURRENT_USER") {
            //         this.props.history.push("/posts");
            //     }
            // });
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
                    <div className="myInfo">
                        <ul>
                            <li><a href="https://rlachivirus.github.io/albertck/" target="_blank">Portfolio</a></li>
                            <li><a href="https://www.linkedin.com/in/albertck/" target="_blank">LinkedIn</a></li>
                            <li><a href="https://angel.co/u/albert-kim-39" target="_blank">AngelList</a></li>
                            <li><a href="https://github.com/rlachivirus" target="_blank">GitHub</a></li>
                        </ul>

                        <ul>
                            <li>A</li><li>Facebook</li><li>clone</li><li>created</li><li>by</li><li>Albert</li><li>Kim</li>
                        </ul>

                        <ul>
                            <li>Built</li><li>with</li><li>React</li><li>Redux</li><li>JavaScript</li><li>Node.js</li><li>JQuery</li><li>Jbuilder</li><li>HTML</li><li>SCSS</li><li>Postgres</li><li>Ruby on Rails</li>
                        </ul>

                        <p>AK © 2021</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;
