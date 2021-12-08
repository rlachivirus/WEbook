import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
        debugger
        let commentToEdit = document.getElementById(`comment-edit-${this.props.comment.id}`)
        let comment = document.getElementById(`comment-${this.props.comment.id}`)

        comment.style.display = "none";
        commentToEdit.style.display = "";
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
            <div className="post-edit-options">
                <div onClick={this.openEdit} className="edit" >Edit</div>
                <div onClick={this.handleDelete} className="delete">Delete</div>
            </div>
        )

        return (
            <div className="post-edit-button">
                <p className="button" onClick={this.handleClick}>...</p>
                {commentEditDeleteBox}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentEditButton));