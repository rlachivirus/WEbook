import { connect } from 'react-redux';
import { createFriend, deleteFriend } from '../../actions/friend_actions';
import { withRouter } from 'react-router-dom';
import Friend from './friend';

const mapStateToProps = (state, ownProps) => ({
    friendId: parseInt(ownProps.match.params.userId),
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    createFriend: (formData) => dispatch(createFriend(formData)),
    deleteFriend: (friendId) => dispatch(deleteFriend(friendId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Friend));