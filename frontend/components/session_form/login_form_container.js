import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, removeErrors } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));