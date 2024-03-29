import { connect } from 'react-redux';
import { createFriend, deleteFriend, fetchFriends } from '../../actions/friend_actions';
import { fetchUser } from '../../actions/user_actions'
import { withRouter } from 'react-router-dom';
import FriendButton from './friend_button';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    friends: state.entities.friends,
    friendId: parseInt(ownProps.match.params.userId),
    currentUserId: state.session.id,
    user: state.entities.users[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchFriends: () => dispatch(fetchFriends()),
    createFriend: (formData) => dispatch(createFriend(formData)),
    deleteFriend: (friendId) => dispatch(deleteFriend(friendId)),
    updateFriend: (friend) => dispatch(updateFriend(friend)),
    openModal: modal => dispatch(openModal(modal)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendButton));