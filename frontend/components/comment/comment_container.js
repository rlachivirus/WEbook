import { connect } from 'react-redux';
import { createComment, deleteComment, fetchComments, updateComment, fetchComment } from '../../actions/comment_actions';
import { createLike, deleteLike } from '../../actions/like_actions'
import { withRouter } from 'react-router-dom';
import Comment from './comment';

const mapStateToProps = (state) => ({
    users: state.entities.users,
    comments: state.entities.comments
})

const mapDispatchToProps = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    fetchComment: (commentId) => dispatch(fetchComment(commentId)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    createLike: (formData) => dispatch(createLike(formData)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId))

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comment));