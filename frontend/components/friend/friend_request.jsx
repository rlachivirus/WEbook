import React from "react";

class FriendRequest extends React.Component {
    constructor(props) {
        super(props);

        this.acceptRequest = this.acceptRequest.bind(this);
        this.deleteRequest = this.deleteRequest.bind(this);
    }

    componentDidMount() {
        this.props.fetchFriends();
        // this.props.fetchUsers();
    }

    componentDidUpdate(prevProps) {
        if (this.props.friends !== prevProps.friends) {
            this.props.fetchUser(this.props.currentUserId);
            // this.props.fetchUser(this.props.friendId)
        }
    }

    acceptRequest(friendId) {
        // e.preventDefault();

        const { currentUserId } = this.props;

        // for (var pair of formData.entries()) {
        //     console.log(pair[0], pair[1]);
        // }

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
        // formData1.append('friend[user_id]', this.props.currentUserId);
        // formData1.append('friend[friend_id]', this.props.friendId);
        formData1.append('friend[status]', "Friends");

        const formData2 = new FormData();
        formData2.append('friend[id]', friendee);
        // formData2.append('friend[user_id]', this.props.friendId);
        // formData2.append('friend[friend_id]', this.props.currentUserId);
        formData2.append('friend[status]', "Friends");

        this.props.updateFriend(formData1);
        this.props.updateFriend(formData2)
            .then(this.props.fetchUser(this.props.currentUserId));

        

        // if (friender && friendee) {
        //     this.props.deleteFriend(friender)
        //     this.props.deleteFriend(friendee)
        // } else if (currentUserId === friendId) {
        //     null
        // } else {
        //     this.props.createFriend(formData1)
        //     this.props.createFriend(formData2)
        // }

    }

    deleteRequest(friendId) {

        const { currentUserId } = this.props;

        // for (var pair of formData.entries()) {
        //     console.log(pair[0], pair[1]);
        // }

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
                            <li key={`${friend.id}-${idx}`} id={`friend-request-${friend.id}`}>
                                <img className="profile-picture" src={this.props.users[friend.friend_id].photoUrl}/>
                                <div>
                                    <p>{this.props.users[friend.friend_id].fname}</p>
                                    <div>
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