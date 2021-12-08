import React from "react";
import { Link } from 'react-router-dom';
import CommentEditButton from './comment_edit_button';

class CommentEditForm extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     body: this.props.comment.body
        // }
        this.state = this.props.comment
        // console.log(this.props.comment)
        this.handleEdit = this.handleEdit.bind(this);
    }

    // componentDidMount() {
    //     let commentToEdit = document.getElementById(`comment-edit-${this.props.comment.id}`)
    //     let comment = document.getElementById(`comment-${this.props.comment.id}`)

    //     if (commentToEdit.style.display === "") {
    //         document.addEventListener("keydown", function(e) {
    //             // e.preventDefault;
    //             if (e.key === "Escape") {
    //                 commentToEdit.style.display = "none";
    //                 comment.style.display = "";
    //             }
    //         })
    //     }
    // }

    handleEdit(e) {
        e.preventDefault();
        const newState = Object.assign({}, this.state);
        // const formData = new FormData();
        // formData.append('comment[id]', this.props.comment.id);
        // formData.append('comment[body]', this.state.body);
        // debugger
        let commentToEdit = document.getElementById(`comment-edit-${this.state.id}`)
        let comment = document.getElementById(`comment-${this.state.id}`)

        // if (commentToEdit.focus()) {
        this.props.updateComment(newState)
            .then(res => console.log(res))

        // }

        commentToEdit.style.display = "none";
        comment.style.display = "";
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        return (
            <div className="">
                {/* <p className="comment-body" id={`comment-${this.state.id}`} style={{ backgroundColor: "rgba(226, 225, 225, 0.541)" }}>
                    {this.state.body}
                </p> */}
                <form onSubmit={this.handleEdit}>
                    <input type="text" className="comment-edit-form" id={`comment-edit-${this.state.id}`} autoComplete="off" style={{ backgroundColor: "rgba(226, 225, 225, 0.541)" }} onChange={this.update('body')} value={this.state.body} />
                </form>
            </div>
        )

    }
}

export default CommentEditForm;