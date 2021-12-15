import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { withRouter } from 'react-router-dom';
import { fetchFriends } from '../../actions/friend_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchFriends: () => dispatch(fetchFriends()),
    fetchUsers: () => dispatch(fetchUsers())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));