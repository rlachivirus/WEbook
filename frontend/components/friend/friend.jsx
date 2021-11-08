import React from "react";
import { Link } from 'react-router-dom'

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props;

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('friend[user_id]', this.state.currentUserId);
        formData.append('friend[friend_id]', this.state.friendId);
        for (var pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }
        // debugger
        this.props.createFriend(formData);
        // debugger
        // this.props.history.push(`/users/${this.state.id}`)
    }

    render() {
        console.log(this.state)
        // debugger
        return (
            <div>
                <p>{this.state.friendId}</p>
                <p>{this.state.currentUserId}</p>
                <span onClick={this.handleClick}>Friend Me</span>
            </div>
        )
    }
}

export default Friend
