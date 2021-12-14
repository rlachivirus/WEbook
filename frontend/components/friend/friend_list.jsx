import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFriends, deleteFriend } from '../../actions/friend_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';

class FriendList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'closed'
        }

        this.handleClick = this.handleClick.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        // this.props.fetchUsers();
        this.props.fetchFriends();
    }

    handleClick() {
        this.state.status === 'closed' ? (
            this.setState({ status: 'open' })
        ) : (
            this.setState({ status: 'closed' })
        )
    }

    closeDropDown() {
        this.setState({
            status: 'closed'
        })
    }

    componentDidUpdate() {
        const { status } = this.state;

        setTimeout(() => {
            if (status === 'open') {
                window.addEventListener('click', this.closeDropDown)
            } else {
                window.removeEventListener('click', this.closeDropDown)
            }
        }, 0)
    }

    handleDelete(friendId) {

        const { currentUserId } = this.props;

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

        this.props.deleteFriend(friender)
            .then(this.props.fetchUser(friendId));
        this.props.deleteFriend(friendee)
            .then(this.props.fetchUser(currentUserId));

    }

    render() {
        const unFriendButton = this.state.status === 'closed' ? (
            null
        ) : (
            <div className="unfriend-option">
                <p onClick={() => this.handleDelete(friend.friend_id)} className="unfriend">Unfriend</p>
            </div>
        )
        console.log(this.props.users[2])
        return (
            <div className="friend-lists">
                <p>Friends</p>
                <ul>
                    {this.props.userFriends.map((friend, idx) => {
                        if (friend.status === "Friends" && this.props.users[friend.friend_id]) {
                            return (
                                <li key={`${friend.id}-${idx}`} className="friend" id={`friend-${friend.id}`}>
                                    <div className="friend-info">
                                        <Link to={`/users/${friend.friend_id}`}><img className="profile-picture" src={this.props.users[friend.friend_id].photoUrl} /></Link>
                                        <Link to={`/users/${friend.friend_id}`}><p className="friend-name">{`${this.props.users[friend.friend_id].fname} ${this.props.users[friend.friend_id].lname}`}</p></Link>
                                    </div>
                                    <p className="button" onClick={this.handleClick}>...</p>
                                    {unFriendButton}
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    friends: state.entities.friends,
    currentUserId: state.session.id,
    userFriends: state.entities.users[state.session.id].friends,
    users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    deleteFriend: (friendId) => dispatch(deleteFriend(friendId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchFriends: () => dispatch(fetchFriends()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendList));