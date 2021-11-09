import { connect } from 'react-redux';
import { createFriend, deleteFriend } from '../../actions/friend_actions';
import { fetchUser } from '../../actions/user_actions'
import { withRouter } from 'react-router-dom';
import Friend from './friend';

const mapStateToProps = (state, ownProps) => ({
    friends: state.entities.friends,
    friendTable: state.entities.users[ownProps.match.params.userId].friends,
    currentUserTable: state.entities.users[state.session.id].friends,
    friendId: parseInt(ownProps.match.params.userId),
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    createFriend: (formData) => dispatch(createFriend(formData)),
    deleteFriend: (friendId) => dispatch(deleteFriend(friendId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Friend));