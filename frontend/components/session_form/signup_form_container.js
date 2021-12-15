import { connect } from 'react-redux';
import { signup, removeErrors } from '../../actions/session_actions'
import SignupForm from './signup_form';

const mapStateToProps = state => ({
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
