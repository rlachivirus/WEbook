import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, removeErrors } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Login'
})

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);