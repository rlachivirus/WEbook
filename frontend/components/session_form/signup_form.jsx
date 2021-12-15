import React from 'react';

class SignupForm extends React.Component {
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
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        const { errors } = this.props;
        const { email, password, fname, lname } = this.state;

        return (
            <div className="splash-page">

                <div className="signup-box">

                    <div className='signup-intro'>
                        <h2>Sign Up</h2>
                        <p>It's quick and easy.</p>
                        <hr className="hr-top" />
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                    </div>

                    <form onSubmit={this.handleSubmit}>

                        <input
                            className="fname-field"
                            type="text"
                            onChange={this.update("fname")}
                            value={fname}
                            placeholder="First Name"
                            style={ errors.includes("Fname can't be blank") ? ({ borderColor: "red" }) : ({ borderColor: "" })}
                        />

                        <p className="fnameError" style={errors.includes("Fname can't be blank") ? ({ display: "" }) : ({ display: "none" })}>
                            First name can't be blank!
                        </p>
                        
                        <input
                            className="lname-field"
                            type="text"
                            onChange={this.update("lname")}
                            value={lname}
                            placeholder="Last Name"
                            style={ errors.includes("Lname can't be blank") ? ({ borderColor: "red" }) : ({ borderColor: "" })}
                        />

                        <p className="lnameError" style={errors.includes("Lname can't be blank") ? ({ display: "" }) : ({ display: "none" })}>
                            Last name can't be blank!
                        </p>

                        <input
                            type="text"
                            onChange={this.update('email')}
                            value={email}
                            placeholder="Email"
                            style={ errors.includes("Email can't be blank") || errors.includes("Email is invalid") ? ({ borderColor: "red" }) : ({ borderColor: "" })}
                        />

                        <p className="emailError" style={errors.includes("Email can't be blank") || errors.includes("Email is invalid") ? ({ display: "" }) : ({ display: "none" })}>
                            Email can't be blank or Email is invalid!
                        </p>

                        <p className="emailError" style={errors.includes("Email has already been taken") ? ({ display: "" }) : ({ display: "none" })}>
                            Email has already been taken!
                        </p>

                        <input
                            type="password"
                            onChange={this.update('password')}
                            value={password}
                            placeholder="Password"
                            style={ errors.includes("Password is too short (minimum is 6 characters)") ? ({ borderColor: "red" }) : ({ borderColor: "" })}
                        />

                        <p className="passwordError" style={errors.includes("Password is too short (minimum is 6 characters)") ? ({ display: "" }) : ({ display: "none" })}>
                            Password is too short! (minimum is 6 characters)
                        </p>

                        <button>Sign Up</button>
                        <br />
                        <hr className="hr-bottom" />

                    </form>
                </div>

            </div>
        )
    }
}

export default SignupForm;
