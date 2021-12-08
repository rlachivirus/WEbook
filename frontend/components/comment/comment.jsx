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
        this.handleEdit = this.handleEdit.bind(this);
    }

    // componentDidUpdate(prevState) {
    //     if (this.state.body !== prevState.body) {
    //         this.props.fetchComments();
    //         // this.props.fetchUser(this.props.friendId)
    //     }
    // }

    // componentDidMount() {
    //     this.props.fetchComments();
    // }

    handleEdit(e) {
        e.preventDefault();
        // const editComment = Object.assign({}, this.state);
        // const formData = new FormData();
        // formData.append('comment[id]', this.props.comment.id);
        // formData.append('comment[body]', this.state.body);
        // debugger
        let commentToEdit = document.getElementById(`comment-edit-${this.props.comment.id}`)
        let comment = document.getElementById(`comment-${this.props.comment.id}`)

        // if (commentToEdit.focus()) {
        this.props.updateComment(this.state)
            .then(res => console.log(res))
        // }

        commentToEdit.style.display = "none";
        comment.style.display = "";
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
            // .then(res => {
            //     if(res.type === "ADD_COMMENT") {
            //         this.props.fetchComments();
            //     }
            // })
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
                    <input type="text" className="commentInput" id={`inputPlaceholder-${this.props.postId}`} onChange={this.update('body')} placeholder={`What's on your mind?`} />
                    {/* <button className="create-post-button">Post</button> */}
                </form>
                <ul>
                    {Object.values(this.props.comments).reverse().map((comment, idx) => {
                        if (comment.post_id === this.props.postId) {
                            // let editForm = comment.body === this.props.comments[comment.id].body ? <CommentEditFormContainer comment={comment} /> : null;
                            // console.log(comment.body)
                            return (
                                <li className="comment-list" key={`${comment.id}-${idx}`}>
                                    <p className="comment-body" id={`comment-${comment.id}`} style={{ backgroundColor: "rgba(226, 225, 225, 0.541)"}}>
                                        {comment.body}
                                    </p>
                                    <p>{idx}</p>
                                    <p>{comment.id}</p>
                                    {/* <form onSubmit={this.handleEdit}> */}
                                        {/* <input type="text" className="comment-edit-form" id={`comment-edit-${comment.id}`} autoComplete="off" style={{ backgroundColor: "rgba(226, 225, 225, 0.541)" }} onChange={this.update('body')} value={this.state.body} /> */}
                                    {/* </form> */}
                                    <CommentEditFormContainer comment={comment} />
                                    <CommentEditButton comment={comment} />
                                </li>
                            )
                        }
                    })
                    }
                </ul>
                {/* </form> */}
            </div>
        )
    }
}

export default Comment