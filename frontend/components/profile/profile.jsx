import React from "react";
import { Link } from 'react-router-dom'

class Profile extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.user.id);
    }

    render() {
        const { user } = this.props;

        if (!user) {
            return null
        }
        
        return (
            <div>
                {/* <form onSubmit={this.handlePhotoSubmit}>
                    <input type="file" onChange={this.handleFile} />
                    <button>Upload Photo</button>
                </form> */}

                <img src={user.photoUrl} />
                <p>{user.fname}</p>
                <p>{user.lname}</p>
                <p>{user.bio}</p>
                <p>{user.birthday}</p>
                <Link to={`/users/${user.id}/edit`}>Edit User Info!</Link>

                    {user.friends.map(friend =>
                        <img src={friend.photoUrl} />
                    )}


            </div>

        )

    }
}

export default Profile;