import React from "react";
import { Link } from 'react-router-dom';

class CommentEditForm extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     body: this.props.comment.body
        // }
        this.state = this.props.comment

        this.handleEdit = this.handleEdit.bind(this);
    }

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
        // }

        commentToEdit.style.display = "none";
        comment.style.display = "";
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        return (
            // <div className="">
                <form onSubmit={this.handleEdit}>
                    <input type="text" className="comment-edit-form" id={`comment-edit-${this.props.comment.id}`} autoComplete="off" style={{ display: "none", backgroundColor: "rgba(226, 225, 225, 0.541)" }} onChange={this.update('body')} value={this.state.body} />
                    {/* <button>edit</button> */}
                </form>
            // </div>
        )

    }
}

export default CommentEditForm;