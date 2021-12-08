import React from "react";
import { Link } from 'react-router-dom';

class CommentEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.comment

        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        let commentToEdit = document.getElementById(`comment-edit-${this.state.id}`)
        let comment = document.getElementById(`comment-${this.state.id}`)

        window.addEventListener("keydown", function(e) {

            if (e.key === "Escape") {
                if (commentToEdit.style.display === "") {
                    commentToEdit.style.display = "none";
                    comment.style.display = "";
                }
            }
        })
    }

    handleEdit(e) {
        e.preventDefault();
        const newState = Object.assign({}, this.state);

        let commentToEdit = document.getElementById(`comment-edit-${this.state.id}`)
        let comment = document.getElementById(`comment-${this.state.id}`)

        this.props.updateComment(newState);

        if (commentToEdit.style.display === "") {
            commentToEdit.style.display = "none";
            comment.style.display = "";
        }
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        return (
            <form onSubmit={this.handleEdit}>
                <input type="text" className="comment-edit-form" id={`comment-edit-${this.state.id}`} autoComplete="off" style={{ display: "none", backgroundColor: "rgba(226, 225, 225, 0.541)" }} onChange={this.update('body')} value={this.state.body} />
            </form>
        )

    }
}

export default CommentEditForm;