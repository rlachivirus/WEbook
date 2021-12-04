import React from "react";
import { Link } from 'react-router-dom'
// import PostContainer from "../post/post_container";

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'closed'
        }

        this.handleClick = this.handleClick.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    handleClick() {
        if (this.state.status === 'closed') {
            this.setState({ status: 'open' })
        }
    }

    closeDropDown() {
        this.setState({
            status: 'closed'
        })
    }

    componentDidUpdate() {
        const { status } = this.state;

        setTimeout(() => {
            if (status === 'open') {
                window.addEventListener('click', this.closeDropDown)
            } else {
                window.removeEventListener('click', this.closeDropDown)
            }
        }, 0)
    }
    
    render () {
        const { currentUser, logout, openModal } = this.props;

        const menuButton = this.state.status === 'open' ? (
            <div className="account-button2" onClick={this.handleClick}>▼
                <div className="menu-open">
                    <Link className="profile-button" to={`/users/${currentUser.id}`} onClick={this.scrollToTop}>
                        <img className="profile-picture" src={this.props.currentUser.photoUrl} />
                        <p>{`${currentUser.fname} ${currentUser.lname} Profile`}</p>
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
                    <a href="https://rlachivirus.github.io/albertck/" target="_blank"><img className="portfolio" src={window.portfolio} /></a>
                    {/* <div className="portfolio"></div> */}
                </div>
                <div className="greeting-right">
                    {/* <div className="profile-button">{this.props.currentUser.fname}</div> */}
                    <Link className="profile-button-outside" to={`/users/${currentUser.id}`} onClick={this.scrollToTop}>
                        <img className="profile-picture" src={this.props.currentUser.photoUrl} />
                        <p>{this.props.currentUser.fname}</p>
                    </Link>
                    <div className="notification"></div>
                    {menuButton}
                </div>
            </div>
        ) : (
            null
            )
        return (
            <div className="greeting">
                {greeting}
            </div>
        )

    }
}

export default Greeting;