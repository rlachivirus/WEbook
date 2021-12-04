import { connect } from 'react-redux';
import { createPost, deletePost, fetchPosts, updatePost } from '../../actions/post_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions'
import { withRouter } from 'react-router-dom';
import Post from './post';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    post: state.entities.posts[ownProps.id],
    posts: state.entities.posts,
    userId: parseInt(ownProps.match.params.userId),
    entities: state.entities,
    friends: state.entities.users[state.session.id].friends,
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: (formData) => dispatch(createPost(formData)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    updatePost: (post) => dispatch(updatePost(post))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));