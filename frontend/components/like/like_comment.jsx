import React from "react";
import { connect } from 'react-redux';
import { createLike, deleteLike, fetchLikes } from '../../actions/like_actions';
import { withRouter } from 'react-router-dom';

class LikeComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.comment.id
        }

        this.likeComment = this.likeComment.bind(this);
    }

    componentDidMount() {
        let likedComments = [];

        Object.values(this.props.likes).forEach(like => {
            if (this.props.currentUserId === like.user_id && like.like_type === "Comment") {
                likedComments.push(like.like_id)
            }
        })

        let likeButton = document.getElementById(`comment-like-${this.state.id}`)

        if (likeButton && likedComments.includes(this.state.id)) {
            likeButton.classList.remove("comment-like")
            likeButton.classList.add("comment-liked")
        }

        if (likeButton && !likedComments.includes(this.state.id)) {
            likeButton.classList.remove("comment-liked")
            likeButton.classList.add("comment-like")
        }
    }

    likeComment(commentId) {
        let likeId = null;

        Object.values(this.props.likes).forEach(like => {
            if (like.like_id === commentId && like.like_type === "Comment" && this.props.currentUserId === like.user_id) {
                return likeId = like.id
            }
        })

        if (likeId) {
            this.props.deleteLike(likeId)
        } else {
            const formData = new FormData();
            formData.append('like[like_id]', commentId);
            formData.append('like[like_type]', "Comment");
            formData.append('like[user_id]', this.props.currentUserId);
            this.props.createLike(formData)
        }
    }

    render() {
        let commentLikesCount = 0;

        Object.values(this.props.likes).forEach(like => {
            if (like.like_id === this.state.id && like.like_type === "Comment") {
                commentLikesCount++;
            }
        })

        let likedComments = [];

        Object.values(this.props.likes).forEach(like => {
            if (this.props.currentUserId === like.user_id && like.like_type === "Comment") {
                likedComments.push(like.like_id)
            }
        })

        let likeButton = document.getElementById(`comment-like-${this.state.id}`)

        if (likeButton && likedComments.includes(this.state.id)) {
            likeButton.classList.remove("comment-like")
            likeButton.classList.add("comment-liked")
        }

        if (likeButton && !likedComments.includes(this.state.id)) {
            likeButton.classList.remove("comment-liked")
            likeButton.classList.add("comment-like")
        }

        return (
            <div className="comment-like-count" id={`comment-like-div-${this.state.id}`}>
                <p className="comment-like" id={`comment-like-${this.state.id}`} onClick={() => this.likeComment(this.state.id)}>Like</p>
                <div>
                    <img src={commentLikesCount === 0 ? null : window.thumbsUpIcon}/>
                    <p>{commentLikesCount === 0 ? null : commentLikesCount}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    likes: state.entities.likes

})

const mapDispatchToProps = dispatch => ({
    fetchLikes: () => dispatch(fetchLikes()),
    createLike: (formData) => dispatch(createLike(formData)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId))

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikeComment));