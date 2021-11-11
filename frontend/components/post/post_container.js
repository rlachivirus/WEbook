import { connect } from 'react-redux';
import { createPost, deletePost, fetchPosts, updatePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions'
import { withRouter } from 'react-router-dom';
import Post from './post';

const mapStateToProps = (state, ownProps) => ({
    posts: state.entities.posts,
    friendId: parseInt(ownProps.match.params.userId),
    user: state.entities.users[state.session.id],
    friends: state.entities.users[state.session.id].friends,
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: (formData) => dispatch(createPost(formData)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    updatePost: (post) => dispatch(updatePost(post))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));