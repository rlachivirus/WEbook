import React from "react";
import { Link } from 'react-router-dom'

class FriendRequest extends React.Component {
    constructor(props) {
        super(props);

        this.acceptRequest = this.acceptRequest.bind(this);
        this.deleteRequest = this.deleteRequest.bind(this);
    }

    componentDidMount() {
        this.props.fetchFriends();
    }

    acceptRequest(friendId) {
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

        const formData1 = new FormData();
        formData1.append('friend[id]', friender);
        formData1.append('friend[status]', "Friends");

        const formData2 = new FormData();
        formData2.append('friend[id]', friendee);
        formData2.append('friend[status]', "Friends");

        this.props.updateFriend(formData1)
            .then(res => {
                if (res.type === 'ADD_FRIEND') {
                    this.props.fetchUser(this.props.currentUserId)
                }})

        this.props.updateFriend(formData2)
            .then(res => {
                if (res.type === 'ADD_FRIEND') {
                    this.props.fetchUser(friendId)
                }
            })
    }

    deleteRequest(friendId) {
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
            .then(this.props.fetchUser(friendId));
        this.props.deleteFriend(friendee)
            .then(this.props.fetchUser(this.props.currentUserId));

    }

    render() {
        const { currentUserId, friendId } = this.props;

        let friender;
        Object.values(this.props.friends).forEach(friend => {
            if (friend.user_id === currentUserId && friend.friend_id === friendId && friend.status === "Friends") {
                friender = friend.id;
            }
        })

        let friendee;
        Object.values(this.props.friends).forEach(friend => {
            if (friend.user_id === friendId && friend.friend_id === currentUserId && friend.status === "Friends") {
                friendee = friend.id;
            }
        })

        const showFriendRequests = (
            <ul className="friend-request-lists">
                {this.props.userFriends.map((friend, idx) => {
                    if (friend.status === "Pending") {
                        return (
                            <li key={`${friend.id}-${idx}`} className="friend-request" id={`friend-request-${friend.id}`}>
                                <Link to={`/users/${friend.friend_id}`}><img className="profile-picture" src={this.props.users[friend.friend_id].photoUrl} /></Link>
                                <div className="friend-info">
                                    <Link to={`/users/${friend.friend_id}`}><p className="friend-name">{this.props.users[friend.friend_id].fname}</p></Link>
                                    <div className="accept-or-decline">
                                        <p onClick={() => this.acceptRequest(friend.friend_id)}>Confirm</p>
                                        <p onClick={() => this.deleteRequest(friend.friend_id)}>Delete</p>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                })}
            </ul>
        )

        return showFriendRequests
    }
}

export default FriendRequest;