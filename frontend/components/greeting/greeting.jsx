import React from "react";
import { Link } from 'react-router-dom'
import LoginFormContainer from "../session_form/login_form_container";
// import PostContainer from "../post/post_container";

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
            <div className="account-button2" onClick={this.handleClick}>▼
                <div className="menu-open">
                    <Link className="profile-button" 
                        to={`/users/${currentUser.id}`} 
                        onClick={this.scrollToTop}>{`${currentUser.fname} ${currentUser.lname} Profile`}
                        {/* <p>See your profile</p> */}
                    </Link>
                    <button className="logout-button" onClick={() => logout()}>Log Out</button>
                </div>
            </div>
        ) : (
            <div className="account-button" onClick={this.handleClick}>▼</div>
        )

        const greeting = currentUser ? (
            <div className="greeting-header">
                {/* <p className="greeting-welcome">Welcome, {currentUser.fname}</p> */}
                <div className="greeting-left">
                    <Link className="we-button" to="/">WE</Link>
                    <div className="searchbar"></div>
                </div>
                <div className="greeting-center">
                    {/* <div className="github"></div> */}
                    {/* <div className="linkedin"></div> */}
                    <a href="https://github.com/rlachivirus" target="_blank"><img className="github" src={window.github} /></a>
                    <a href="https://www.linkedin.com/in/albertck/" target="_blank"><img className="linkedin" src={window.linkedin} /></a>
                    <div className="portfolio"></div>
                </div>
                <div className="greeting-right">
                    {/* <div className="profile-button">{this.props.currentUser.fname}</div> */}
                    <Link className="profile-button-outside" to={`/users/${currentUser.id}`} onClick={this.scrollToTop}>{this.props.currentUser.fname}</Link>
                    <div className="notification"></div>
                    {menuButton}
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