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
            <div>
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
            <Link to="/signup">Sign Up</Link>
        ) : (
            <Link to="/login">Log in</Link>
        )

        const demoLogin = (formType === "Login") ? (
            <p>Use a demo! &nbsp;
                <span onClick={this.demoUser}>Demo User</span>
            </p>
        ) : (
            null
        );

        return (
            <div>
                <h2>{formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <input
                        type="text"
                        onChange={this.update('email')}
                        value={email}
                        />
                    </label>
                    <br/>
                    <label>Password
                        <input
                        type="password"
                        onChange={this.update('password')}
                        value={password}
                        />
                    </label>
                    {errorMessages}
                    {altLink}
                    <button>{formType}</button>
                </form>
                {demoLogin}
            </div>
        )
    }
}

export default SessionForm;