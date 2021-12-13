import React from "react";
import { Link } from 'react-router-dom'

class Friend extends React.Component {
    constructor(props) {
        super(props);
                
        // let friendeeStatus = null;
        // Object.values(this.props.friends).forEach(table => {
        //     if ((table.user_id === friendId) && (table.friend_id === currentUserId)) {
        //         friendeeStatus = table.status;
        //     }
        // })

        this.handleClick = this.handleClick.bind(this)
        this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchFriends()
    }

    componentDidUpdate(prevProps) {
        if (this.props.friends !== prevProps.friends) {
            this.props.fetchUser(this.props.currentUserId)
            // this.props.fetchUser(this.props.friendId)
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
        // debugger
        this.props.openModal(obj);
    }

    render() {
        // debugger
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
            // <div className="friend-button"
            //     onClick="" style={{ backgroundColor: "#dbdbdb", color: "black"}}>Edit Profile
            // </div>
            <div className="friend-button" 
                style={{ backgroundColor: "#dbdbdb", color: "black"}} onClick={() => this.openModal({type: "profileEdit", user: this.props.user})}>Edit Profile
            </div>
        ) : friender === "" && friendee === "pending" ? (
                    <div className="friend-button" style={{ backgroundColor: "#dbdbdb", color: "black" }}>Requested</div>
        ) : (
            <div className="friend-button"
                onClick={this.handleClick}>Add Friend
            </div>
        )

        // const buttonName = if (this.props.friends[friendee].status === "Friends") {
            
        // }
        return friendButton
    }
}

export default Friend
