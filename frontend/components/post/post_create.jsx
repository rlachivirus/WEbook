import React from "react";
import { Link } from 'react-router-dom';

class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: "",
            photoFile: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        e.preventDefault();

        return this.setState({ photoFile: e.currentTarget.files[0] })
    }

    handleSubmit() {
        const formData = new FormData();
        formData.append('post[author_id]', this.props.currentUserId);
        formData.append('post[body]', this.state.body);
        formData.append('post[user_id]', this.props.userId);

        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }

        // debugger
        this.props.createPost(formData);
        this.props.closeModal();
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }
    render() {
        return (
            <div className="create-post-modal">
                <p onClick={this.props.closeModal}>X</p>
                <form onSubmit={this.handleSubmit}>
                    <textarea onChange={this.update('body')} placeholder={`What's on your mind?`} />
                    <input type="file" onChange={this.handleFile} />
                    <button className="create-post-button">Post</button>
                </form>
            </div>
        )
    }
}

export default CreatePost;


