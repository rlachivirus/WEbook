import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, removeErrors } from '../../actions/session_actions'

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Sign up'
})

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);