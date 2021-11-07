import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch => ({
    fetchUser: user => dispatch(fetchUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);