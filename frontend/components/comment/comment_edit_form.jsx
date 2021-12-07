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
        const editComment = Object.assign({}, this.state);
        // const formData = new FormData();
        // formData.append('comment[id]', this.props.comment.id);
        // formData.append('comment[body]', this.state.body);
        // debugger
        this.props.updateComment(editComment)
            .then(res => console.log(res));

    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        return (
            <div className="">
                <form onSubmit={this.handleEdit}>
                    <input className="" id={`comment-edit-${this.props.comment.id}`} type="text" onChange={this.update('body')} value={this.state.body} />
                    {/* <button>edit</button> */}
                </form>
            </div>
        )

    }
}

export default CommentEditForm;