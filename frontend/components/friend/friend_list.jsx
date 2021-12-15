import React from "react";
import { Link } from 'react-router-dom'

class FriendList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'closed'
        }

        this.handleClick = this.handleClick.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.removeDropDown;
    }

    handleClick() {
        this.state.status === 'closed' ? (
            this.setState({ status: 'open' })
        ) : (
            this.setState({ status: 'closed' })
        )
    }

    closeDropDown() {
        this.setState({
            status: 'closed'
        })
    }

    componentDidUpdate() {
        const { status } = this.state;

        this.removeDropDown = setTimeout(() => {
            if (status === 'open') {
                window.addEventListener('click', this.closeDropDown)
            } else {
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

    handleDelete(friendId) {
        const { currentUserId } = this.props;

        let friender;
        Object.values(this.props.friends).forEach(table => {
            if ((table.user_id === currentUserId) && (table.friend_id === friendId)) {
                friender = table.id;
            }
        })

        let friendee;
        Object.values(this.props.friends).forEach(table => {
            if ((table.user_id === friendId) && (table.friend_id === currentUserId)) {
                friendee = table.id;
            }
        })

        this.props.deleteFriend(friender)
        this.props.deleteFriend(friendee)
    }

    render() {
        const unFriendButton = this.state.status === 'closed' ? (
            null
        ) : (
            <div className="unfriend-option">
                <p onClick={() => this.handleDelete(this.props.friend.friend_id)} className="unfriend">Unfriend</p>
            </div>
        )

        return (
                <div className="friend-info-div">
                    <div className="friend-info">
                        <Link to={`/users/${this.props.friend.friend_id}`}><img className="profile-picture" src={this.props.users[this.props.friend.friend_id].photoUrl} /></Link>
                        <Link to={`/users/${this.props.friend.friend_id}`}><p className="friend-name">{`${this.props.users[this.props.friend.friend_id].fname} ${this.props.users[this.props.friend.friend_id].lname}`}</p></Link>
                    </div>
                    <div className="unfriend-button">
                        <p className="button" onClick={this.handleClick}>...</p>
                        {unFriendButton}
                    </div>
                </div>
        )
    }
}

export default FriendList