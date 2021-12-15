import { connect } from 'react-redux';
import { updateComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';
import CommentEditForm from './comment_edit_form';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    updateComment: (comment) => dispatch(updateComment(comment))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentEditForm));