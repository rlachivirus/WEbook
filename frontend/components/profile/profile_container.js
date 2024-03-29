import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import Profile from './profile';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    users: state.entities.users,
    sessionId: state.session.id,
    user: state.entities.users[ownProps.match.params.userId],
    currentUserId: state.session.id,
    userId: parseInt(ownProps.match.params.userId),
})

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchUser: user => dispatch(fetchUser(user)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);