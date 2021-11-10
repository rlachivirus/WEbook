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
    }

    componentDidMount() {
        this.props.fetchFriends()
    }

    componentDidUpdate(prevProps) {
        if (this.props.friends !== prevProps.friends) {
            this.props.fetchUser(this.props.currentUserId)
            this.props.fetchUser(this.props.friendId)
        }
    }

    handleClick(e) {
        e.preventDefault();

        const { currentUserId, friendId } = this.props;

        const formData1 = new FormData();
        formData1.append('friend[user_id]', this.props.currentUserId);
        formData1.append('friend[friend_id]', this.props.friendId);
        formData1.append('friend[status]', "Friends");

        const formData2 = new FormData();
        formData2.append('friend[user_id]', this.props.friendId);
        formData2.append('friend[friend_id]', this.props.currentUserId);
        formData2.append('friend[status]', "Friends");

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
        } else {
            this.props.createFriend(formData1)
            this.props.createFriend(formData2)
        }

    }

    render() {
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
