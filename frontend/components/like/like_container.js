import { connect } from 'react-redux';
import { createLike, deleteLike, fetchLikes } from '../../actions/like_actions';
import { withRouter } from 'react-router-dom';
import Like from './like';

const mapStateToProps = (state, ownProps) => ({
    // post: state.entities.posts[ownProps.id],
    // posts: state.entities.posts,
    // userId: parseInt(ownProps.match.params.userId),
    // entities: state.entities,
    // users: state.entities.users,
    // friends: state.entities.users[state.session.id].friends,
    // currentUser: state.entities.users[state.session.id],
    // currentUserId: state.session.id,
    // comments: state.entities.comments
    likes: state.entities.likes

})

const mapDispatchToProps = dispatch => ({
    // openModal: modal => dispatch(openModal(modal)),
    // fetchUser: (userId) => dispatch(fetchUser(userId)),
    // fetchUsers: () => dispatch(fetchUsers()),
    // fetchPosts: () => dispatch(fetchPosts()),
    // createPost: (formData) => dispatch(createPost(formData)),
    // deletePost: (postId) => dispatch(deletePost(postId)),
    // updatePost: (post) => dispatch(updatePost(post)),
    // fetchComments: () => dispatch(fetchComments()),
    fetchLikes: () => dispatch(fetchLikes())

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Like));