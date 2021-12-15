import { connect } from 'react-redux';
import { createFriend, updateFriend, deleteFriend, fetchFriends } from '../../actions/friend_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions'
import { withRouter } from 'react-router-dom';
import FriendRequest from './friend_request';

const mapStateToProps = (state, ownProps) => ({
    friends: state.entities.friends,
    users: state.entities.users,
    userFriends: state.entities.users[state.session.id].friends,
    friendId: parseInt(ownProps.match.params.userId),
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchFriends: () => dispatch(fetchFriends()),
    createFriend: (formData) => dispatch(createFriend(formData)),
    deleteFriend: (friendId) => dispatch(deleteFriend(friendId)),
    updateFriend: (friend) => dispatch(updateFriend(friend))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendRequest));