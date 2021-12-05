import React from "react";
import { Link } from 'react-router-dom';

class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const formData = new FormData();
        formData.append('post[author_id]', this.props.currentUserId);
        formData.append('post[body]', this.state.body);
        formData.append('post[user_id]', this.props.userId);
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
                    <button className="create-post-button">Post</button>
                </form>
            </div>
        )
    }
}

export default CreatePost;


