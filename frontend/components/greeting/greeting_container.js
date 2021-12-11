import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchFriends } from '../../actions/friend_actions';
import Greeting from './greeting';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})
// const mapStateToProps = (state) => ({
//     currentUser: state.entities.users[state.session.id],
//     users: state.entities.users,
//     userFriends: state.entities.users[state.session.id],
// })

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));