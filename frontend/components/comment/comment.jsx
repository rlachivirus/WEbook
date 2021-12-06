import React from "react";
import { fetchUser } from "../../actions/user_actions";
import CommentEditButton from './comment_edit_button';


class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

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
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="commentInput" id={`inputPlaceholder-${this.props.postId}`} type="text" onChange={this.update('body')} placeholder={`What's on your mind?`} />
                    {/* <button className="create-post-button">Post</button> */}
                    <ul>
                        {Object.values(this.props.comments).reverse().map(comment => {
                            if (comment.post_id === this.props.postId) {
                                return (
                                    <li>
                                        {comment.body}
                                        <CommentEditButton id={comment.id} />
                                    </li>
                                )
                            }
                        })
                        }
                    </ul>
                </form>
            </div>
        )
    }
}

export default Comment