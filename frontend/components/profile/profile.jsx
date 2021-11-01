import React from "react";
import { Link } from 'react-router-dom'

class Profile extends React.Component {

    render() {
        const { fetchUser, updateUser, user } = this.props;   

        return (
            <div>
                <p>Profile</p>
                <Link to={`/users/${user.id}/edit}`}>Edit User Info!</Link>
            </div>

        )

    }
}

export default Profile;