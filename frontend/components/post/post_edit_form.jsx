import React from "react";
import { Link } from 'react-router-dom';

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
            <div className="edit-delete-button">
                <div className="edit-background">
                    <form onSubmit={this.handleEdit}>
                        <textarea
                            value={this.state.body}
                            onChange={this.update('body')}
                        />
                        {/* <input type="file" onChange={this.handleFile} /> */}
                        <button>edit</button>
                    </form>
                </div>
            </div>
        )

    }
}

export default PostEditForm;