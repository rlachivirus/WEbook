import React from "react";

class PostEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: this.props.post.body
        }

        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[id]', this.props.id);
        formData.append('post[body]', this.state.body);
        this.props.updatePost(formData);
        this.props.closeModal();
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        return (
            <div className="edit-post-modal">
                <div className="edit-post">
                    <p className="title">Edit Post</p>
                    <div className="cancel" onClick={this.props.closeModal}>X</div>
                    <hr/>
                    <form className="edit-form" onSubmit={this.handleEdit}>
                        <textarea
                            value={this.state.body}
                            onChange={this.update('body')}
                        />
                        <input className="select-picture" type="file" onChange={this.handleFile} />
                        <button className="edit-post-button">Edit</button>
                    </form>
                </div>
            </div>
        )

    }
}

export default PostEditForm;