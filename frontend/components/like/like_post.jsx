import React from "react";
import { connect } from 'react-redux';
import { createLike, deleteLike, fetchLikes } from '../../actions/like_actions';
import { withRouter } from 'react-router-dom';

class LikePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.post
    }

    // componentDidUpdate(prevState) {
    //     if (this.state.likes !== prevState.likes) {
            
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
        let postLikes = 0;

        Object.values(this.props.likes).forEach(like => {
            if (like.like_id === this.state.id) {
                postLikes++;
            }
        })

        // const renderLikes = this.props.type === "post" ? (
        //     <div className="post-like-count">
        //         <img />
        //         <p>{postLikes}</p>
        //         {/* <p>1</p> */}
        //     </div>
        // ) : (
        //     <div className="comment-like-count">
        //         <img />
        //         {/* <p>{commentLikes}</p> */}
        //         <p>7</p>
        //     </div>
        // )

        // let postLikes = null;

        // if (!this.props.post.likes) {
        //     return null
        // }
        // console.log(commentLikeCount)
        // console.log(postLikeCount)



        return (
            <div className="post-like-count">
                <img />
                <p>{postLikes === 0 ? null : postLikes}</p>
                {/* <p>1</p> */}
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
    // currentUserId: state.session.id,
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
    fetchLikes: () => dispatch(fetchLikes())

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikePost));