import { connect } from 'react-redux';
import { createComment, deleteComment, fetchComments, updateComment, fetchComment } from '../../actions/comment_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions'
import { withRouter } from 'react-router-dom';
import CommentEditForm from './comment_edit_form';

const mapStateToProps = (state, ownProps) => ({
    // comments: state.entities.comments
})

const mapDispatchToProps = dispatch => ({
    // fetchComments: () => dispatch(fetchComments()),
    // createComment: (comment) => dispatch(createComment(comment)),
    // deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    updateComment: (comment) => dispatch(updateComment(comment))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentEditForm));