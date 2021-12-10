import React from "react";
import { connect } from 'react-redux';
import { createLike, deleteLike, fetchLikes } from '../../actions/like_actions';
import { withRouter } from 'react-router-dom';

class LikeComment extends React.Component {
    constructor(props) {
        super(props);

        // this.state = this.props.comment;
        this.state = {
            id: this.props.comment.id,
            // commentLikesCount: null
        }

        this.likeComment = this.likeComment.bind(this);
    }

    componentDidMount() {
        // let commentCount = 0;

        // Object.values(this.props.likes).forEach(like => {
        //     if (like.like_id === this.state.id) {
        //         commentCount++;
        //     }
        // })
        // debugger
        // this.setState({ commentLikesCount: commentCount })
        // debugger
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

        // debugger
        if (likeButton && !likedComments.includes(this.state.id)) {
            likeButton.classList.remove("comment-liked")
            likeButton.classList.add("comment-like")
        }
    }

    likeComment(commentId) {
        // let postIds = [];

        // Object.values(this.props.posts).forEach(post => {
        //     postIds.push(post.)
        // })
        let likeId = null;
        // debugger
        Object.values(this.props.likes).forEach(like => {
            if (like.like_id === commentId && like.like_type === "Comment" && this.props.currentUserId === like.user_id) {
                return likeId = like.id
            }
        })
        // let likeButton = document.getElementById(`like-button-${post.id}`)


        if (likeId) {
            this.props.deleteLike(likeId)
        } else {
            const formData = new FormData();
            formData.append('like[like_id]', commentId);
            formData.append('like[like_type]', "Comment");
            formData.append('like[user_id]', this.props.currentUserId);
            this.props.createLike(formData)
            // likeButton.style.color = "blue"
        }
    }

    // componentDidMount() {
    //     this.updateLikes();
    // }

    // updateLikes() {
    //     let commentLikesCount = 0;

    //     Object.values(this.props.likes).forEach(like => {
    //         if (like.like_id === this.props.comment.id) {
    //             commentLikesCount++;
    //         }
    //     })

    //     let LikedComments = [];

    //     Object.values(this.props.likes).forEach(like => {
    //         if (this.props.currentUserId === like.user_id && like.like_type === "Comment") {
    //             LikedComments.push(like.like_id)
    //         }
    //     })

    //     let likeButton = document.getElementById(`comment-like-${this.props.comment.id}`)

    //     if (likeButton && LikedComments.includes(this.props.comment.id)) {
    //         likeButton.classList.remove("comment-like")
    //         likeButton.classList.add("comment-liked")
    //     }

    //     // debugger
    //     if (likeButton && !LikedComments.includes(this.props.comment.id)) {
    //         likeButton.classList.remove("comment-liked")
    //         likeButton.classList.add("comment-like")
    //     }
    // }

    render() {
        // debugger
        // console.log(this.props)
    // let postLikeCount = null;
    // debugger
    // if (this.props.post.likes) {
    // postLikeCount = this.props.post.likes.length;
    // }
    // let commentLikeCount = this.props.comment.likes.length;
    
    // this.props.post.likes.length

    // this.props.currentUser.likes.forEach(like => {
    //     let countPost = 0;
    //     let countComment =0;

    //     if (like.like_id ===)
    // })

    // if (this.props.post) {
    //     Object.values(this.props.post.likes).forEach(like => {
    //         let count = 0;

    //         if (like.like_type === "Post") {
    //             count++
    //         }
    //         // console.log(`post like - ${count}`)
    //         return postLikeCount = count;
    //     })
    // }

    // if (this.props.comment) {
    //     Object.values(this.props.comment.likes).forEach(like => {
    //         let count = 0;

    //         if (like.like_type === "Comment") {
    //             count++;
    //         }

    //         // console.log(`comment like - ${count}`)
    //         return commentLikeCount = count;
    //     })
    // }
        ////////////////////
        let commentLikesCount = 0;

        Object.values(this.props.likes).forEach(like => {
            if (like.like_id === this.state.id) {
                commentLikesCount++;
            }
        })

        // this.setState({ commentLikesCount: commentCount })

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

        // debugger
        if (likeButton && !likedComments.includes(this.state.id)) {
            likeButton.classList.remove("comment-liked")
            likeButton.classList.add("comment-like")
        }
        /////////////////////////////
        
        // const renderLikes = this.props.typePost === "post" ? (
        //     <div className="post-like-count">
        //         <img />
        //         <p>{this.state.postLikes}</p>
        //         {/* <p>1</p> */}
        //     </div>
        // ) : (
        //     <div className="comment-like-count">
        //         <img />
        //         <p>{this.state.commentLikes}</p>
        //         {/* <p>1</p> */}
        //     </div>
        // )
        
        // console.log(commentLikeCount)
        // console.log(postLikeCount)
        // debugger
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

const mapStateToProps = (state, ownProps) => ({
    // post: state.entities.posts[ownProps.id],
    // posts: state.entities.posts,
    // userId: parseInt(ownProps.match.params.userId),
    // entities: state.entities,
    // users: state.entities.users,
    // friends: state.entities.users[state.session.id].friends,
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    // comments: state.entities.comments
    likes: state.entities.likes

})

const mapDispatchToProps = dispatch => ({
    // openModal: modal => dispatch(openModal(modal)),
    // fetchUser: (userId) => dispatch(fetchUser(userId)),
    // fetchUsers: () => dispatch(fetchUsers()),
    // fetchPosts: () => dispatch(fetchPosts()),
    // createPost: (formData) => dispatch(createPost(formData)),
    // deletePost: (postId) => dispatch(deletePost(postId)),
    // updatePost: (post) => dispatch(updatePost(post)),
    // fetchComments: () => dispatch(fetchComments()),
    fetchLikes: () => dispatch(fetchLikes()),
    createLike: (formData) => dispatch(createLike(formData)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId))

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikeComment));
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikePost));