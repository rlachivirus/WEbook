import React from "react";
import { fetchUser } from "../../actions/user_actions";
import CommentEditButton from './comment_edit_button';
import CommentEditFormContainer from './comment_edit_container';
import LikeContainer from '../like/like_container';


class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    handleSubmit() {
        const formData = new FormData();
        formData.append('comment[body]', this.state.body);
        formData.append('comment[author_id]', this.props.currentUserId);
        formData.append('comment[post_id]', this.props.postId);

        let commentInput = document.getElementById(`inputPlaceholder-${this.props.postId}`)

        this.props.createComment(formData)

        if (commentInput.value !== "") {
            commentInput.value = "";
            commentInput.blur();
        }
    }


    render() {
        return (
            <div>
                <form className="comment-create-form" onSubmit={this.handleSubmit}>
                    <img className="profile-picture" src={this.props.users[this.props.currentUserId].photoUrl} />
                    <input type="text" className="commentInput" id={`inputPlaceholder-${this.props.postId}`} autoComplete="off" onChange={this.update('body')} placeholder={`What's on your mind?`} />
                </form>
                <ul>
                    {Object.values(this.props.comments).reverse().map((comment, idx) => {
                        if (comment.post_id === this.props.postId) {
                            return (
                                <li className="comment-list" key={`${comment.id}-${idx}`}>
                                    <img className="profile-picture" src={this.props.users[comment.author_id].photoUrl} />
                                    <div className="comment-div" id={`comment-div-${comment.id}`} style={{ width: "" }}>
                                        <p className="comment-body" id={`comment-${comment.id}`} style={{ backgroundColor: "rgba(226, 225, 225, 0.541)"}}>
                                            {`${comment.fname} ${comment.lname} `}
                                            <br/>
                                            {comment.body}
                                        </p>
                                        <LikeContainer comment={comment} type="comment"/>
                                        <p className="comment-like" id={`comment-like-${comment.id}`}>Like</p>
                                        <CommentEditFormContainer comment={comment} />
                                    </div>
                                    <CommentEditButton comment={comment} />
                                </li>
                            )
                        }
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default Comment