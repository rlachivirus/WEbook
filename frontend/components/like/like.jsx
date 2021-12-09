import React from "react";

class Like extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        if (!this.props.comment || !this.props.post ) {
            return null
        }

        const postLikeCount = Object.values(this.props.likes).forEach(like => {
            let count = 0;

            if (like.like_id === this.props.post.id && like.like_type === "Post") {
                count++
            }

            return count;
        })

        const commentLikeCount = Object.values(this.props.likes).forEach(like => {
            let count = 0;

            if (like.like_id === this.props.comment.id && like.like_type === "Comment") {
                count++;
            }

            return count;
        })

        const renderLikes = this.props.type === "post" ? (
            <div className="post-like-count">
                <img />
                <p>{postLikeCount}</p>
                {/* <p>1</p> */}
            </div>
        ) : (
            <div className="comment-like-count">
                <img />
                <p>{commentLikeCount}</p>
                {/* <p>1</p> */}
            </div>
        )
            debugger
        return renderLikes
    }
}

export default Like