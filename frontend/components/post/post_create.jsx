import React from "react";

class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: "",
            photoFile: null,
            photoUrl: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result })
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('post[author_id]', this.props.currentUserId);
        formData.append('post[body]', this.state.body);
        formData.append('post[user_id]', this.props.userId);

        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }

        this.props.createPost(formData);
        this.props.closeModal();
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }
    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : <div className="empty-space"></div>;

        return (
            <div className="create-post-modal">
                <div className="create-post">
                    <p className="title">Create Post</p>
                    <div className="cancel" onClick={this.props.closeModal}>X</div>
                    <hr/>
                    <form className="input-form" onSubmit={this.handleSubmit}>
                        <textarea onChange={this.update('body')} placeholder={`What's on your mind?`} />
                        {preview}
                        <input className="select-picture" type="file" onChange={this.handleFile} />
                        <button className="create-post-button">Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreatePost;


