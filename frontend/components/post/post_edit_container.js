import { connect } from 'react-redux';
import { createPost, deletePost, fetchPosts, updatePost, fetchPost } from '../../actions/post_actions';
import PostEditForm from './post_edit_form';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: (formData) => dispatch(createPost(formData)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    updatePost: (post) => dispatch(updatePost(post))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostEditForm));