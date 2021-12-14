import React from "react";
import { Link } from 'react-router-dom'
import FriendList from './friend_list'

class Friend extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        // const unFriendButton = this.state.status === 'closed' ? (
        //     null
        // ) : (
        //     <div className="unfriend-option">
        //         <p onClick={() => this.handleDelete(friend.friend_id)} className="unfriend">Unfriend</p>
        //     </div>
        // )

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
    
    
                                    // <li key={`${friend.id}-${idx}`} className="friend" id={`friend-${friend.id}`}>
                                    //     <div className="friend-info">
                                    //         <Link to={`/users/${friend.friend_id}`}><img className="profile-picture" src={this.props.users[friend.friend_id].photoUrl} /></Link>
                                    //         <Link to={`/users/${friend.friend_id}`}><p className="friend-name">{`${this.props.users[friend.friend_id].fname} ${this.props.users[friend.friend_id].lname}`}</p></Link>
                                    //     </div>
                                    //     <p className="button" onClick={this.handleClick}>...</p>
                                    //     {unFriendButton}
                                    // </li>
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