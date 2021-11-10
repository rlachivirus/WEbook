import React from "react";
import { Link } from 'react-router-dom'
import FriendContainer from '../friend/friend_container';

class Profile extends React.Component {

    componentDidMount() {
        // this.props.fetchUser(this.props.user.id);
        this.props.fetchUsers();
    }

    render() {
        const { user } = this.props;

        if (!user) {
            return null
        }
        const friendsIds = [];


        return (
            <div>
                <div className="profile-background">
                    <div className="background-layer"></div>
                    <div className="cover-photo"></div>
                    <img className="profile-picture" src={user.photoUrl} />
                    <div className="profile-fixed-bar"></div>
                    <div className="profile-nav-bar"></div>
                </div>

                <FriendContainer />

                <div className="middle-page">
                    <div className="middle-left-side">
                        <div className="profile-edit">
                            <p>Intro</p>
                            <p>{user.fname}</p>
                            <p>{user.lname}</p>
                            <p>{user.bio}</p>
                            <p>{user.birthday}</p>
                                {
                                    user.id === this.props.sessionId ? (
                                        <Link to={`/users/${user.id}/edit`}>Edit User Info!</Link>
                                    ) : (
                                        null
                                    )
                                }
                        </div>


                        <div className="user-friends">
                            <p>Friends</p>

                            {user.friends.forEach(friend => friendsIds.push(friend.friend_id))}
                            {Object.values(this.props.users).map(friend => {
                                if (user.id !== friend.id && friendsIds.includes(friend.id)) {
                                    return <Link to={`/users/${friend.id}`} onClick={() => window.scrollTo(0, 0)}><img className="user-friend" src={friend.photoUrl} /></Link>
                                }
                            })
                            }
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