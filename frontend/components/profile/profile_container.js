import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
    user: state.users[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch => ({
    fetchUser: user => dispatch(fetchUser(user)),
    updateUser: user => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);