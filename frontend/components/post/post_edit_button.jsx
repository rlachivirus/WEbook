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
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);

        this.removeDropDown;
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
        this.props.openModal(obj);
    }

    closeDropDown() {
        this.setState({
            status: 'closed'
        })
    }

    componentDidUpdate() {
        const { status } = this.state;

        this.removeDropDown = setTimeout(() => {
            if (status === 'open') {
                window.addEventListener('click', this.closeDropDown)
            } else {
                window.removeEventListener('click', this.closeDropDown)
            }
        }, 0)
    }

    componentWillUnmount() {
        clearTimeout(this.removeDropDown);
        this.setState = () => {
            return;
        }
    }

    render() {
        const editDeleteBox = this.state.status === 'closed' ? (
            null
        ) : (
            <div className="post-edit-options">
                <p onClick={() => this.openModal({ type: 'editPost', post: this.props.post, id: this.props.id })} className="edit" >Edit</p>
                <p onClick={this.handleDelete} className="delete">Delete</p>
            </div>
        )

        if (this.props.post.author_id === this.props.currentUserId) {
            return (
                <div className="post-edit-button">
                    <p className="button" onClick={this.handleClick}>...</p>
                    {editDeleteBox}
                </div>
            )
        } else {
            return null;
        }

    }
}

const mapStateToProps = (state, ownProps) => ({
    post: state.entities.posts[ownProps.id],
    currentUserId: state.session.id,
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    deletePost: (postId) => dispatch(deletePost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostEditButton);