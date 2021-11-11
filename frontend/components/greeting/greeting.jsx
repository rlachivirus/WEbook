import React from "react";
import { Link } from 'react-router-dom'
import LoginFormContainer from "../session_form/login_form_container";

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'closed'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    handleClick() {
        this.state.status === 'closed' ? (
            this.setState({ status: 'open' })
        ) : (
            this.setState({ status: 'closed' })
        )
    }

    render () {
        const { currentUser, logout, openModal } = this.props;

        const menuButton = this.state.status === 'open' ? (
            <div className="menu-open">
                <Link className="profile-button" to={`/users/${currentUser.id}`} onClick={this.scrollToTop}>Profile</Link>
                <button className="logout-button" onClick={() => logout()}>Logout</button>
            </div>
        ) : (
            null
        )

        const greeting = currentUser ? (
            <div className="greeting-header">
                {/* <p className="greeting-welcome">Welcome, {currentUser.fname}</p> */}
                <div className="greeting-left">
                    <Link className="we-button" to="/">LOGO HERE</Link>
                    <div className="searchbar"></div>
                </div>
                <div className="greeting-center">
                    <div className="github"></div>
                    <div className="linkedin"></div>
                    <div className="portfolio"></div>
                </div>
                <div className="greeting-right">
                    <div className="profile-button"></div>
                    <div className="notification"></div>
                    <div className="account-button" onClick={this.handleClick}>
                        {menuButton}
                        {/* <Link className="profile-button" to={`/users/${currentUser.id}`} onClick={this.scrollToTop}>Profile</Link>
                        <button className="greeting-button" onClick={() => logout()}>Logout</button> */}
                    </div>
                </div>
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