import React from "react";
import { Link } from 'react-router-dom'
import LoginFormContainer from "../session_form/login_form_container";

class Greeting extends React.Component {

    render () {
        const { currentUser, logout, openModal } = this.props;
        const greeting = currentUser ? (
            <div className="greeting-header">
                {/* <p className="greeting-welcome">Welcome, {currentUser.fname}</p> */}
                <Link className="we-button" to="/">LOGO HERE</Link>
                <Link className="profile-button" to={`/users/${currentUser.id}`}>Profile</Link>
                <button className="greeting-button" onClick={() => logout()}>Logout</button>

            </div>
        ) : (
            <LoginFormContainer />
            )

        return (
            <div className="greeting">
                {greeting}
            </div>
        )

    }
}

export default Greeting;