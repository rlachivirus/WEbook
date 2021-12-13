import React from "react";
import { Link } from 'react-router-dom'
import FriendRequestContainer from "../friend/friend_request_container"

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'closed',
            notification: 'closed',
            // notificationCount: null
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleNotification = this.handleNotification.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
    }

    componentDidMount() {
        // this.props.fetchUsers();

        // let pendingNotificationCount = [];

        // if (this.props.currentUser) {
        //     Object.values(this.props.currentUser.friends).forEach(friend => {
        //         if (friend.status === "Pending") {
        //             pendingNotificationCount.push(friend)
        //         }
        //     })
        // }

        // this.setState({ notificationCount: pendingNotificationCount.length })
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

    handleNotification() {
        // debugger
        if (this.state.notification === 'closed') {
            this.setState({ notification: 'open'})
        }
    }

    closeDropDown() {
        if (this.state.status === 'open') {
            this.setState({
                status: 'closed'
            })
        }
        
        if (this.state.notification === 'open') {
            this.setState({
                notification: 'closed'
            })
        }
    }

    componentDidUpdate() {
        const { status, notification } = this.state;

        setTimeout(() => {
            if (status === 'open' || notification === 'open') {
                window.addEventListener('click', this.closeDropDown)
            } else  {
                window.removeEventListener('click', this.closeDropDown)
            }
        }, 0)
    }
    render () {
        console.log(this.props)
        const { currentUser, logout, openModal } = this.props;

        let pendingNotificationCount = [];
        console.log(this.props)
        if (currentUser) {
            Object.values(currentUser.friends).forEach(friend => {
                if (friend.status === "Pending") {
                    pendingNotificationCount.push(friend)
                }
            })
        }

        const notification = this.state.notification === 'open' ? (
            <div className="notification" onClick={this.handleNotification}>?
                <FriendRequestContainer />
            </div>
        ) : (
            <div className="notification" onClick={this.handleNotification}>?
                <p>{pendingNotificationCount.length > 0 ? `${pendingNotificationCount.length}+` : null}</p>
                {/* <p>{this.state.notificationCount !== null ? `${this.state.notificationCount}+` : null}</p> */}
                {/* <p>{`${this.state.notificationCount}+`}</p> */}
            </div>
        )

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
                    {/* <div className="searchbar"></div> */}
                </div>
                <div className={this.props.location.pathname !== "/posts" ? "greeting-center" : "greeting-center-post"}>
                    <Link to="/posts"><img className="homeButton" src={window.homeButton} /></Link>
                    {/* <div className="github"></div> */}
                    {/* <div className="linkedin"></div> */}
                    {/* <a href="https://github.com/rlachivirus" target="_blank"><img className="github" src={window.github} /></a>
                    <a href="https://www.linkedin.com/in/albertck/" target="_blank"><img className="linkedin" src={window.linkedin} /></a>
                    <a href="https://rlachivirus.github.io/albertck/" target="_blank"><img className="portfolio" src={window.portfolio} /></a> */}
                    {/* <div className="portfolio"></div> */}
                </div>
                <div className="greeting-right">
                    {/* <div className="profile-button">{this.props.currentUser.fname}</div> */}
                    <Link className={this.props.location.pathname !== `/users/${currentUser.id}` ? "profile-button-outside" : "profile-button-in-profile"} to={`/users/${currentUser.id}`} onClick={this.scrollToTop}>
                        <img className="profile-picture" src={this.props.currentUser.photoUrl} />
                        <p>{this.props.currentUser.fname}</p>
                    </Link>
                    {notification}
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