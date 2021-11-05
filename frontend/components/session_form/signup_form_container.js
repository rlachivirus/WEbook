import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, removeErrors } from '../../actions/session_actions'
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Sign Up'
})

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
