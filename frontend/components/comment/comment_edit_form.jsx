import React from "react";

class CommentEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.comment
        this.originalState = this.state

        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        let commentToEdit = document.getElementById(`comment-edit-${this.state.id}`)
        let escapeInfo = document.getElementById(`comment-edit-${this.state.id}-p`)
        let comment = document.getElementById(`comment-${this.state.id}`)
        let commentEditButton = document.getElementById(`comment-edit-button-${this.state.id}`);
        let commentLikeDiv = document.getElementById(`comment-like-div-${this.state.id}`);
        let commentDiv = document.getElementById(`comment-div-${this.state.id}`);
        let originalState = this.originalState;


        window.addEventListener("keydown", (e) => {

            if (e.key === "Escape") {
                if (commentToEdit.style.display === "") {
                    commentToEdit.style.display = "none";
                    commentDiv.style.width = "";
                    escapeInfo.style.display = "none";
                    comment.style.display = "";
                    commentEditButton.style.display = "";
                    commentLikeDiv.style.display = "";

                    this.setState({
                        body: originalState.body
                    })
                }
            }

        })
    }

    handleEdit(e) {
        e.preventDefault();
        const newState = Object.assign({}, this.state);

        let commentToEdit = document.getElementById(`comment-edit-${this.state.id}`)
        let escapeInfo = document.getElementById(`comment-edit-${this.state.id}-p`)
        let comment = document.getElementById(`comment-${this.state.id}`)
        let commentEditButton = document.getElementById(`comment-edit-button-${this.state.id}`);
        let commentLikeDiv = document.getElementById(`comment-like-div-${this.state.id}`);
        let commentDiv = document.getElementById(`comment-div-${this.state.id}`);


        this.props.updateComment(newState);

        if (commentToEdit.style.display === "") {
            commentToEdit.style.display = "none";
            commentDiv.style.width = "";
            escapeInfo.style.display = "none";
            comment.style.display = "";
            commentEditButton.style.display = "";
            commentLikeDiv.style.display = "";
        }

        this.originalState.body = newState.body
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        return (
            <form onSubmit={this.handleEdit}>
                <input type="text" className="comment-edit-form" id={`comment-edit-${this.state.id}`} autoComplete="off" style={{ display: "none", backgroundColor: "rgba(226, 225, 225, 0.541)" }} onChange={this.update('body')} value={this.state.body} />
                <p className="comment-escape" id={`comment-edit-${this.state.id}-p`} style={{ display: "none" }}>Press Esc to cancel.</p>
            </form>
        )

    }
}

export default CommentEditForm;