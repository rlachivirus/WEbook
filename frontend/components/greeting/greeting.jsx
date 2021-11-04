import React from "react";
import { Link } from 'react-router-dom'
import LoginFormContainer from "../session_form/login_form_container";

class Greeting extends React.Component {

    render () {
        const { currentUser, logout, openModal } = this.props;
        const greeting = currentUser ? (
            <div className="greeting-loggedIn">
                <p className="greeting-welcome">Welcome, {currentUser.fname}</p>
                <Link className="we-button" to="/">WE</Link>
                <button className="greeting-button" onClick={() => logout()}>Logout</button>
                <Link className="profile-button" to={`/users/${currentUser.id}`}>Profile</Link>

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