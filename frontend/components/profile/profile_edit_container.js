import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import ProfileEditForm from './profile';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch => ({
    fetchUser: user => dispatch(fetchUser(user)),
    updateUser: user => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditForm);