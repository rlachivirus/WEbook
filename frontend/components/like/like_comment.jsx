import React from "react";
import { connect } from 'react-redux';
import { createLike, deleteLike, fetchLikes } from '../../actions/like_actions';
import { withRouter } from 'react-router-dom';

class LikeComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.comment
    }

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

        let commentLikes = 0;

        Object.values(this.props.likes).forEach(like => {
            if (like.like_id === this.state.id) {
                commentLikes++;
            }
        })
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
            <div className="comment-like-count">
                <img />
                <p>{commentLikes === 0 ? null : commentLikes}</p>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikeComment));
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikePost));