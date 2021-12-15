import React from "react";
import { Link } from 'react-router-dom'
import FriendRequestContainer from "../friend/friend_request_container"

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'closed',
            notification: 'closed',
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleNotification = this.handleNotification.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);

        this.removeDropDown;
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

        this.removeDropDown = setTimeout(() => {
            if (status === 'open' || notification === 'open') {
                window.addEventListener('click', this.closeDropDown)
            } else  {
                window.removeEventListener('click', this.closeDropDown)
            }
        }, 0)
    }

    componentWillUnmount() {
        clearTimeout(this.removeDropDown);
        this.setState = () => {
            return;
        }
    }

    render () {
        const { currentUser, logout } = this.props;

        let pendingNotificationCount = [];
        
        if (currentUser) {
            Object.values(currentUser.friends).forEach(friend => {
                if (friend.status === "Pending") {
                    pendingNotificationCount.push(friend)
                }
            })
        }

        const notification = this.state.notification === 'open' ? (
            <div className="notification" onClick={this.handleNotification}>
                <img className="notification-logo" src={window.notification} />
                <FriendRequestContainer />
            </div>
        ) : (
            <div className="notification" onClick={this.handleNotification}>
                    <p className="notification-count" style={pendingNotificationCount.length > 0 ? null : { display: "none"}}>{pendingNotificationCount.length > 0 ? pendingNotificationCount.length : null}</p>
                <img className="notification-logo" src={window.notification} />
            </div>
        )

        const menuButton = this.state.status === 'open' ? (
            <div className="account-button2" onClick={this.handleClick}>▼
                <div className="menu-open">
                    <Link className="profile-button" to={`/users/${currentUser.id}`} onClick={this.scrollToTop}>
                        <img className="profile-picture" src={this.props.currentUser.photoUrl} />
                        <p>{`${currentUser.fname} Profile`}</p>
                    </Link>
                    <button className="logout-button" onClick={() => logout().then(() => window.scrollTo(0, 0))}>Log Out</button>
                </div>
            </div>
        ) : (
            <div className="account-button" onClick={this.handleClick}>▼</div>
        )

        const greeting = currentUser ? (
            <div className="greeting-header">
                <div className="greeting-left">
                    <Link to="/"><img className="we-button" src={window.webook}/></Link>
                </div>
                <div className={this.props.location.pathname !== "/posts" ? "greeting-center" : "greeting-center-post"}>
                    <Link to="/posts"><img className="homeButton" src={window.homeButton} /></Link>
                </div>
                <div className="greeting-right">
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