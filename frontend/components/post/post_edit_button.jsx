import React from "react";
import { connect } from 'react-redux';
import { openModal } from "../../actions/modal_actions";
import { deletePost } from "../../actions/post_actions";
import { Link } from 'react-router-dom';

class PostEditButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'closed'
            // editStatus: 'closed'
        }

        this.handleClick = this.handleClick.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
    }

    handleClick() {
        this.state.status === 'closed' ? (
            this.setState({ status: 'open' })
        ) : (
            this.setState({ status: 'closed' })
        )
    }

    handleDelete() {
        this.props.deletePost(this.props.id);
        this.setState({ status: 'closed' });
    }

    openModal(obj) {
        // debugger
        this.props.openModal(obj);
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
        const editDeleteBox = this.state.status === 'closed' ? (
            null
        ) : (
            <div className="options">
                <div onClick={() => this.openModal({ type: 'editPost', post: this.props.post, id: this.props.id })} className="edit" >Edit</div>
                <div onClick={this.handleDelete} className="delete">Delete</div>
            </div>
        )

        return (
            <div>
                <p className="button" onClick={this.handleClick}>O</p>
                {editDeleteBox}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: state.entities.posts[ownProps.id]
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    deletePost: (postId) => dispatch(deletePost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostEditButton);