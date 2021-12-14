import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFriends, deleteFriend } from '../../actions/friend_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import Friend from './friend'

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Friend));