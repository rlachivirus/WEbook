import React from "react";
import { Link } from 'react-router-dom'
import FriendButtonContainer from '../friend/friend_button_container';
import FriendContainer from '../friend/friend_container';
import PostContainer from '../post/post_container';


class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    openModal(obj) {
        this.props.openModal(obj);
    }

    render() {
        const { user } = this.props;

        if (!user) {
            return null
        }
        const friendsIds = [];

        const showPostOrFriends = this.props.location.pathname === `/users/${this.props.currentUserId}/friends` ? (
            <FriendContainer />
        ) : (
            <div className="middle-page">
                <div className="middle-left-side">
                    <div className="profile-edit">
                        <p>Intro</p>
                        <p>{`Hi! My name is ${user.fname} ${user.lname}`}</p>
                        <p>{user.bio}</p>
                        <p>{user.birthday}</p>
                        {
                            user.id === this.props.sessionId ? (
                                <div className="profile-edit-button1" onClick={() => this.props.openModal({ type: 'profileEdit', user: this.props.user })}>Edit User Info!</div>
                            ) : (
                                null
                            )
                        }
                    </div>


                    <div className="user-friends">
                        <p>Friends</p>

                        <div className="user-friends-list">
                            {user.friends.forEach(friend => {
                                if (friend.status === "Friends" && friendsIds.length < 6) {
                                    friendsIds.push(friend.friend_id)
                                }
                            })}
                            {Object.values(this.props.users).map((friend, idx) => {
                                if (user.id !== friend.id && friendsIds.includes(friend.id)) {
                                    return <Link key={`${friend.id}-${idx}`} to={`/users/${friend.id}`} onClick={() => window.scrollTo(0, 0)}><div><img className="user-friend" src={friend.photoUrl} /><p className="friend-name">{friend.fname}</p></div></Link>
                                }
                            })
                            }
                        </div>
                    </div>
                </div>

                <div className="middle-right-side">
                    <div className="posts-comments">
                        <PostContainer />
                    </div>
                </div>
            </div>
        )


        return (
            <div>
                <div className="profile-background">
                    <div className="background-shadow"></div>
                    <div className="background-layer"></div>
                    <div className="cover-photo"></div>
                    <div className="picture-name">
                        <img className="profile-picture" src={user.photoUrl} />
                        <div className="profile-name">{`${user.fname} ${user.lname}`}</div>
                    </div>
                    <div className="friend-edit-button">
                        <FriendButtonContainer />
                    </div>
                    <div className="profile-fixed-bar">
                        <Link className="profile-button" to={`/users/${this.props.user.id}`} onClick={this.scrollToTop}>
                            <img className="profile-picture2" src={this.props.user.photoUrl} />
                            <p>{`${this.props.user.fname} ${this.props.user.lname}`}</p>
                        </Link>
                    </div>
                    <hr className="profile-hr"/>
                    <div className="profile-nav-bar">
                        <Link to={`/users/${this.props.currentUserId}`} style={this.props.currentUserId === this.props.userId ? { display: "" } : { display: "none" }}>
                            <div className={this.props.location.pathname === `/users/${this.props.currentUserId}/friends` ? "notSelected" : "selected" }>Posts</div>
                        </Link>
                        <Link to={`/users/${this.props.currentUserId}/friends`} style={this.props.currentUserId === this.props.userId ? { display: "" } : { display: "none" }}>
                            <div className={this.props.location.pathname === `/users/${this.props.currentUserId}/friends` ? "selected" : "notSelected"}>Friends</div>
                        </Link>
                    </div>
                </div>

                {showPostOrFriends}
            </div>
        )
    }
}

export default Profile;