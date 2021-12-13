import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteComment, fetchComments } from '../../actions/comment_actions';

class CommentEditButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'closed'
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
        this.openEdit = this.openEdit.bind(this);
    }

    handleClick() {
        this.state.status === 'closed' ? (
            this.setState({ status: 'open' })
        ) : (
            this.setState({ status: 'closed' })
        )
    }

    handleDelete() {
        this.props.deleteComment(this.props.comment.id);
        this.setState({ status: 'closed' });
    }

    openEdit() {
        let commentToEdit = document.getElementById(`comment-edit-${this.props.comment.id}`);
        let escapeInfo = document.getElementById(`comment-edit-${this.props.comment.id}-p`);
        let comment = document.getElementById(`comment-${this.props.comment.id}`);
        let commentEditButton = document.getElementById(`comment-edit-button-${this.props.comment.id}`);
        let commentLikeDiv = document.getElementById(`comment-like-div-${this.props.comment.id}`);
        let commentDiv = document.getElementById(`comment-div-${this.props.comment.id}`);

        if (commentToEdit.style.display === "none") {
            commentToEdit.style.display = "";
            commentDiv.style.width = "100%";
            escapeInfo.style.display = "";
            comment.style.display = "none";
            commentEditButton.style.display = "none";
            commentLikeDiv.style.display = "none";
        }
    }

    closeDropDown() {
        this.setState({
            status: 'closed'
        })
    }

    componentDidUpdate() {
        const { status } = this.state;

        setTimeout(() => {
            if (status === 'open') {
                window.addEventListener('click', this.closeDropDown)
            } else {
                window.removeEventListener('click', this.closeDropDown)
            }
        }, 0)
    }

    render() {
        const commentEditDeleteBox = this.state.status === 'closed' ? (
            null
        ) : (
            <div className="comment-edit-options">
                <p onClick={this.openEdit} className="edit" >Edit</p>
                <p onClick={this.handleDelete} className="delete">Delete</p>
            </div>
        )

        if (this.props.comment.author_id === this.props.currentUserId) {
            return (
                <div className="comment-edit-button" id={`comment-edit-button-${this.props.comment.id}`}>
                    <p className="button" onClick={this.handleClick}>...</p>
                    {commentEditDeleteBox}
                </div>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentUserId: state.session.id,
});

const mapDispatchToProps = dispatch => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    fetchComments: () => dispatch(fetchComments())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentEditButton));