import React from "react";
import { Link } from 'react-router-dom'

class Profile extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.user.id);
    }

    render() {
        const { user } = this.props;   

        return (
            <div>
                
                <p>{user.fname}</p>
                <p>{user.lname}</p>
                <p>{user.bio}</p>
                <p>{user.birthday}</p>

                <Link to={`/users/${user.id}/edit`}>Edit User Info!</Link>
            </div>

        )

    }
}

export default Profile;