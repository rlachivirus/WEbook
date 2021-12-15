import React from "react";
import { connect } from 'react-redux';
import { fetchLikes } from '../../actions/like_actions';
import { withRouter } from 'react-router-dom';

class LikePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.post.id
        }
    }


    componentDidMount() {
        let likedPosts = [];

        Object.values(this.props.likes).forEach(like => {
            if (this.props.currentUserId === like.user_id && like.like_type === "Post") {
                likedPosts.push(like.like_id)
            }
        })

        let likeButton = document.getElementById(`post-like-${this.state.id}`)

        if (likeButton && likedPosts.includes(this.state.id)) {
            likeButton.classList.remove("post-like")
            likeButton.classList.add("post-liked")
        }

        if (likeButton && !likedPosts.includes(this.state.id)) {
            likeButton.classList.remove("post-liked")
            likeButton.classList.add("post-like")
        }
    }

    render() {
        let postLikesCount = 0;

        Object.values(this.props.likes).forEach(like => {
            if (like.like_id === this.state.id && like.like_type === "Post") {
                postLikesCount++;
            }
        })

        let likedPosts = [];

        Object.values(this.props.likes).forEach(like => {
            if (this.props.currentUserId === like.user_id && like.like_type === "Post") {
                likedPosts.push(like.like_id)
            }
        })

        let likeButton = document.getElementById(`post-like-${this.state.id}`)

        if (likeButton && likedPosts.includes(this.state.id)) {
            likeButton.classList.remove("post-like")
            likeButton.classList.add("post-liked")
        }
        
        if (likeButton && !likedPosts.includes(this.state.id)) {
            likeButton.classList.remove("post-liked")
            likeButton.classList.add("post-like")
        }
        return (
            <div className="post-like-count">
                <img src={postLikesCount === 0 ? null : window.thumbsUpIcon}/>
                <p>{postLikesCount === 0 ? null : postLikesCount}</p>
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
    fetchLikes: () => dispatch(fetchLikes())

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikePost));