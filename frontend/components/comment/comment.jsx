import React from "react";
import { Link } from 'react-router-dom'
import CommentEditButton from './comment_edit_button';
import CommentEditFormContainer from './comment_edit_container';
import LikeCommentContainer from '../like/like_comment';


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

    handleSubmit(e) {
        e.preventDefault();
        
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
                    <Link to={`/users/${this.props.currentUserId}`}><img className="profile-picture" src={this.props.users[this.props.currentUserId] ? this.props.users[this.props.currentUserId].photoUrl : null} /></Link>
                    <input type="text" className="commentInput" id={`inputPlaceholder-${this.props.postId}`} autoComplete="off" onChange={this.update('body')} placeholder={`What's on your mind?`} />
                </form>
                <ul>
                    {Object.values(this.props.comments).reverse().map((comment, idx) => {
                        if (comment.post_id === this.props.postId) {
                            return (
                                <li className="comment-list" key={`${comment.id}-${idx}`}>
                                    <Link to={`/users/${comment.author_id}`}><img className="profile-picture" src={this.props.users[comment.author_id] ? this.props.users[comment.author_id].photoUrl : null} /></Link>
                                    <div className="comment-div" id={`comment-div-${comment.id}`} style={{ width: "" }}>
                                        <p className="comment-body" id={`comment-${comment.id}`} style={{ backgroundColor: "rgba(226, 225, 225, 0.541)"}}>
                                            <Link className="link" to={`/users/${comment.author_id}`}>{`${comment.fname} ${comment.lname} `}</Link>
                                            <br/>
                                            {comment.body}
                                        </p>
                                        <LikeCommentContainer comment={comment} typeComment="comment"/>
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