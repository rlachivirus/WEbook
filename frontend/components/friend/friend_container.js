import { connect } from 'react-redux';
import { createFriend, deleteFriend } from '../../actions/friend_actions';
import Friend from './friend';

const mapStateToProps = (state) => ({
    friends: state.entities.friends
})

const mapDispatchToProps = dispatch => ({
    createFriend: () => dispatch(createFriend()),
    deleteFriend: (friendId) => dispatch(deleteFriend(friendId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Friend);