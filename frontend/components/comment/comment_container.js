import { connect } from 'react-redux';
import { createComment, deleteComment, fetchComments, updateComment, fetchComment } from '../../actions/comment_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions'
import { withRouter } from 'react-router-dom';
import Comment from './comment';

const mapStateToProps = (state, ownProps) => ({
    // post: state.entities.posts[ownProps.id],
    // posts: state.entities.posts,
    // userId: parseInt(ownProps.match.params.userId),
    // entities: state.entities,
    users: state.entities.users,
    // friends: state.entities.users[state.session.id].friends,
    // currentUser: state.entities.users[state.session.id],
    // currentUserId: state.session.id
    comments: state.entities.comments
})

const mapDispatchToProps = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    fetchComment: (commentId) => dispatch(fetchComment(commentId)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    updateComment: (comment) => dispatch(updateComment(comment))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comment));