import React from "react";
import { Link } from 'react-router-dom'

class Friend extends React.Component {
    constructor(props) {
        super(props);
        // const { friends } = this.props;
        this.state = {
            // id: this.props.friends.id,
            currentUserId: this.props.currentUserId,
            friendId: this.props.friendId,
            status: "Add Friend"
        }

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('friend[user_id]', this.props.currentUserId);
        formData.append('friend[friend_id]', this.props.friendId);
        // for (var pair of formData.entries()) {
        //     console.log(pair[0], pair[1]);
        // }

        if (this.state.status === "Add Friend") {
            this.props.createFriend(formData)
            debugger
            this.setState({ status: "Friends" })
        } else {
            debugger
            this.props.deleteFriend(this.props.friends.id)
            this.setState({ status: "Add Friend" })
        }

    }

    render() {
        console.log(this.state);
        console.log(this.props);
        console.log(this.props.friends)

        return (
            <div>
                <p>{this.props.friendId}</p>
                <p>{this.props.currentUserId}</p>
                <span onClick={this.handleClick}>Friend Me</span>
            </div>
        )
    }
}

export default Friend
