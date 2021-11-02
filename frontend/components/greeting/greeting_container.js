import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})

// const mapStateToProps = ({ session }) => ({
//     currentUser: session.currentUser
// });

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);