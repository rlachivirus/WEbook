import React from "react";
import { Link } from 'react-router-dom'
import FriendContainer from '../friend/friend_container';

class Profile extends React.Component {

    componentDidMount() {
        // this.props.fetchUser(this.props.user.id);
        this.props.fetchUsers();
    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    render() {
        const { user } = this.props;

        if (!user) {
            return null
        }
        const friendsIds = [];

        const editButton2 = user.id === this.props.sessionId ? (
            <Link className="profile-edit-button2" to={`/users/${user.id}/edit`}>Edit Profile</Link>
        ) : (
            <div className="profile-edit-button2">Message</div>
        )

            console.log(this.props)
        return (
            <div>
                <div className="profile-background">
                    <div className="background-shadow"></div>
                    <div className="background-layer"></div>
                    <div className="cover-photo"></div>
                    {/* <div className="picture-and-buttons"> */}
                    <img className="profile-picture" src={user.photoUrl} />
                    <div className="profile-name">{`${user.fname} ${user.lname}`}</div>
                    <div className="friend-edit-button">
                        <FriendContainer />
                        {editButton2}
                    </div>
                    {/* </div> */}
                    <div className="profile-fixed-bar">
                        <Link className="profile-button" to={`/users/${this.props.user.id}`} onClick={this.scrollToTop}>{`${this.props.user.fname} ${this.props.user.lname}`}</Link>
                    </div>
                    <hr className="profile-hr"/>
                    <div className="profile-nav-bar">
                        <div>Posts</div>
                        <div>About</div>
                        <div>Friends</div>
                    </div>
                </div>


                <div className="middle-page">
                    <div className="middle-left-side">
                        <div className="profile-edit">
                            <p>Intro</p>
                            <p>{`Hi! My name is ${user.fname} ${user.lname}`}</p>
                            <p>{user.bio}</p>
                            <p>{user.birthday}</p>
                                {
                                    user.id === this.props.sessionId ? (
                                        <Link className="profile-edit-button1" to={`/users/${user.id}/edit`}>Edit User Info!</Link>
                                    ) : (
                                        null
                                    )
                                }
                        </div>


                        <div className="user-friends">
                            <p>Friends</p>

                            <div className="user-friends-list">
                                {user.friends.forEach(friend => friendsIds.push(friend.friend_id))}
                                {Object.values(this.props.users).map(friend => {
                                    if (user.id !== friend.id && friendsIds.includes(friend.id)) {
                                        return <Link to={`/users/${friend.id}`} onClick={() => window.scrollTo(0, 0)}><div><img className="user-friend" src={friend.photoUrl} /><p className="friend-name">{`${friend.fname} ${friend.lname}`}</p></div></Link>
                                    }
                                })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="middle-right-side">
                        <div className="posts-comments">
                            <p>POSTS and COMMENTS</p>
                        </div>
                    </div>
                </div>


            </div>

        )

    }
}

export default Profile;