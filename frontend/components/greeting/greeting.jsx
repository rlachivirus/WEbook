import React from "react";
import { Link } from 'react-router-dom'

class Greeting extends React.Component {

    render () {
        const { currentUser, logout } = this.props;
        const greeting = currentUser ? (
            <div>
                <p>Welcome, {currentUser.email}</p>
                <button onClick={() => logout()}></button>
            </div>
        ) : (
            <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </div>
            )

    return greeting
    }
}

export default Greeting;