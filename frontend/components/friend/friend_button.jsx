import React from "react";

class FriendButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
        this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchFriends()
    }

    componentDidUpdate(prevProps) {
        if (this.props.friends !== prevProps.friends) {
            this.props.fetchUser(this.props.currentUserId)
        }
    }

    handleClick(e) {
        e.preventDefault();

        const { currentUserId, friendId } = this.props;

        const formData1 = new FormData();
        formData1.append('friend[user_id]', this.props.currentUserId);
        formData1.append('friend[friend_id]', this.props.friendId);
        formData1.append('friend[status]', "");

        const formData2 = new FormData();
        formData2.append('friend[user_id]', this.props.friendId);
        formData2.append('friend[friend_id]', this.props.currentUserId);
        formData2.append('friend[status]', "Pending");

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

        if (friender && friendee) {
            this.props.deleteFriend(friender)
            this.props.deleteFriend(friendee)
        } else if (currentUserId === friendId) {
            null
        } else {
            this.props.createFriend(formData1)
            this.props.createFriend(formData2)
        }

    }

    openModal(obj) {
        this.props.openModal(obj);
    }

    render() {
        const { currentUserId, friendId } = this.props;

        let friender;
        Object.values(this.props.friends).forEach(friend => {
            if (friend.user_id === currentUserId && friend.friend_id === friendId && friend.status === "Friends") {
                friender = friend.id;
            }

            if (friend.user_id === currentUserId && friend.friend_id === friendId && friend.status === "") {
                friender = "";
            }
        })

        let friendee;
        Object.values(this.props.friends).forEach(friend => {
            if (friend.user_id === friendId && friend.friend_id === currentUserId && friend.status === "Friends") {
                friendee = friend.id;
            }

            if (friend.user_id === friendId && friend.friend_id === currentUserId && friend.status === "Pending") {
                friendee = "pending";
            }
        })

        const friendButton = parseInt(friender) && parseInt(friendee) ? (
            <div className="friend-button"
                onClick={this.handleClick}>Friends
            </div>
        ) : currentUserId === friendId ? (
            <div className="edit-button" 
                onClick={() => this.openModal({type: "profileEdit", user: this.props.user})}>Edit Profile
            </div>
        ) : friender === "" && friendee === "pending" ? (
            <div className="requested-button">Requested</div>
        ) : (
            <div className="friend-button"
                onClick={this.handleClick}>Add Friend
            </div>
        )

        return friendButton
    }
}

export default FriendButton
