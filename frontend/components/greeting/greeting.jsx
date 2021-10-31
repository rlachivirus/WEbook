import React from "react";
import { Link } from 'react-router-dom'

class Greeting extends React.Component {

    render () {
        const { currentUser, logout } = this.props;
        const greeting = currentUser ? (
            <div className="greeting-loggedIn">
                <p className="greeting-welcome">Welcome, {currentUser.email}</p>
                <button className="greeting-button" onClick={() => logout()}>Logout</button>
            </div>
        ) : (
            <div className="greeting-loggedOut">
                <Link className="greeting-button" to="/signup">Sign Up</Link>
                <Link className="greeting-button" to="/login">Log In</Link>
            </div>
            )

        return (
            <div className="greeting">
                {greeting}
            </div>
        )

    }
}

export default Greeting;