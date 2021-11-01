import { connect } from 'react-redux';
import Profile from './profile';
import { login, removeE } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
    user: state.users[ownProps.match.params.]
})