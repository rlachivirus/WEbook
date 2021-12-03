import { connect } from 'react-redux';
import { fetchUser, updateUser, updateUserPhoto } from '../../actions/user_actions';
import ProfileEditForm from './profile_edit_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    // user: state.entities.users[ownProps.match.params.userId]
    user: state.ui.modal.user
})

const mapDispatchToProps = dispatch => ({
    fetchUser: user => dispatch(fetchUser(user)),
    updateUser: user => dispatch(updateUser(user)),
    updateUserPhoto: formData => dispatch(updateUserPhoto(formData))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileEditForm));