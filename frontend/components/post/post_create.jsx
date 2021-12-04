import React from "react";
import { Link } from 'react-router-dom';

class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: this.props.post.body,
            status: 'closed',
            editStatus: 'closed'
        }

        this.handleStatus = this.handleStatus.bind(this);
        this.handleEditStatus = this.handleEditStatus.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        // this.update = this.update.bind(this);
    }

    handleSubmit() {
        const formData = new FormData();
        formData.append('post[author_id]', this.props.currentUserId);
        formData.append('post[body]', this.state.body);
        formData.append('post[user_id]', this.props.userId);
        // this.setState({ status: 'closed' });
        this.props.createPost(formData);
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default CreatePost;