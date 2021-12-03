import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, removeErrors } from '../../actions/session_actions'
import { closeModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));
