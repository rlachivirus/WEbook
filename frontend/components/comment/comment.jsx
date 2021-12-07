import React from "react";
import { fetchUser } from "../../actions/user_actions";
import CommentEditButton from './comment_edit_button';
import CommentEditFormContainer from './comment_edit_container';


class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidUpdate(prevState) {
    //     if (this.state.body !== prevState.comment.body) {
    //         this.props.fetchComments();
    //         // this.props.fetchUser(this.props.friendId)
    //     }
    // }

    // componentDidMount() {
    //     this.props.fetchComments();
    // }

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
        commentInput.value = "";

        // let commentToEdit = document.getElementById(`comment-edit-${this.props.comment.id}`)
        // let comment = document.getElementById(`comment-${this.props.comment.id}`)

        // comment.style.display = "none";
        // commentToEdit.style.display = "";
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="commentInput" id={`inputPlaceholder-${this.props.postId}`} type="text" onChange={this.update('body')} placeholder={`What's on your mind?`} />
                    {/* <button className="create-post-button">Post</button> */}
                </form>
                    {Object.values(this.props.comments).reverse().map(comment => {
                        if (comment.post_id === this.props.postId) {
                            return (
                                <ul>
                                    <li className="comment-list">
                                        <span className="comment-body" id={`comment-${comment.id}`} style={{ backgroundColor: "rgba(226, 225, 225, 0.541)"}}>
                                            {comment.body}
                                        </span>
                                        <CommentEditFormContainer comment={comment} />
                                        <CommentEditButton id={comment.id} />
                                    </li>
                                </ul>
                            )
                        }
                    })
                    }
                {/* </form> */}
            </div>
        )
    }
}

export default Comment