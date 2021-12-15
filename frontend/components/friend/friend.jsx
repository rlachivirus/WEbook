import React from "react";
import FriendList from './friend_list'

class Friend extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        if (this.props.userFriends) {
            return (
                <div className="friend-lists-background">
                    <ul className="friend-lists">
                    <p className="title">Friends</p>
                        {this.props.userFriends.map((friend, idx) => {
                            if (friend.status === "Friends" && this.props.users[friend.friend_id]) {
                                return (
                                    <li key={`${friend.id}-${idx}`} className="friend" id={`friend-${friend.id}`}>
                                        <FriendList friend={friend} users={this.props.users} currentUserId={this.props.currentUserId} fetchUser={this.props.fetchUser} deleteFriend={this.props.deleteFriend} friends={this.props.friends}/>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Friend