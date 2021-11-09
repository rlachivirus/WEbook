import React from "react";
import { Link } from 'react-router-dom'

class Friend extends React.Component {
    constructor(props) {
        super(props);
        // const { friends } = this.props;
        this.state = {
            id: '',
            currentUserId: '',
            friendId: '',
            status: "Add Friend"
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (this.props.friends !== prevProps.friends) {
            this.props.fetchUser(this.props.currentUserId)
            this.props.fetchUser(this.props.friendId)
        }
    }

    handleClick(e) {
        e.preventDefault();

        const { currentUserTable, currentUserId, friendTable, friendId } = this.props;

        const formData1 = new FormData();
        formData1.append('friend[user_id]', this.props.currentUserId);
        formData1.append('friend[friend_id]', this.props.friendId);
        const formData2 = new FormData();
        formData2.append('friend[user_id]', this.props.friendId);
        formData2.append('friend[friend_id]', this.props.currentUserId);
        // for (var pair of formData.entries()) {
        //     console.log(pair[0], pair[1]);
        // }

        let friender = null;
        currentUserTable.forEach(table => {
            if (table.user_id === currentUserId && table.friend_id === friendId) {
                friender = table.id;
            }
        })

        let friendee = null;
        friendTable.forEach(table => {
            if (table.user_id === friendId && table.friend_id === currentUserId) {
                friendee = table.id;
            }
        })


        if (this.state.status === "Add Friend") {
            this.props.createFriend(formData1)
            this.props.createFriend(formData2)
            debugger
            this.setState({ status: "Friends" })
        } else {
            debugger
            this.props.deleteFriend(friender)
            this.props.deleteFriend(friendee)
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
