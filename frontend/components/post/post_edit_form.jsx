import React from "react";

class PostEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: this.props.post.body,
            photoFile: null,
            photoUrl: null
        }

        this.handleEdit = this.handleEdit.bind(this);
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

    handleEdit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('post[id]', this.props.id);
        formData.append('post[body]', this.state.body);

        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        
        this.props.updatePost(formData);
        this.props.closeModal();
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : <div className="empty-space"></div>;

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
                        {preview}
                        <input className="select-picture" type="file" onChange={this.handleFile} />
                        <button className="edit-post-button">Edit</button>
                    </form>
                </div>
            </div>
        )

    }
}

export default PostEditForm;