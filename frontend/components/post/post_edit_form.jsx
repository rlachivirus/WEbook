import React from "react";
import { Link } from 'react-router-dom';

class PostEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: this.props.post.body
            // status: 'closed',
            // editStatus: 'closed'
        }

        // this.handleStatus = this.handleStatus.bind(this);
        // this.handleEditStatus = this.handleEditStatus.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
        // this.update = this.update.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchUser(this.state.id);
    // }

    // componentDidUpdate(prevProps) {
    //     if (this.props.post.id !== prevProps.id) {
    //         this.setState({ body: this.props.post.body })
    //     }
    // }

    // handleStatus() {
    //     this.state.status === 'closed' ? (
    //         this.setState({ status: 'open' })
    //     ) : (
    //         this.setState({ status: 'closed' })
    //     )

    //     // this.state.editStatus === 'closed' ? (
    //     //     this.setState({ editStatus: 'open' })
    //     // ) : (
    //     //     this.setState({ editStatus: 'closed' })
    //     // )
    // }

    // handleEditStatus() {
    //     this.state.editStatus === 'closed' ? (
    //         this.setState({ editStatus: 'open' })
    //     ) : (
    //         this.setState({ editStatus: 'closed' })
    //     )
    // }

    handleEdit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[id]', this.props.id);
        formData.append('post[body]', this.state.body);
        this.props.updatePost(formData);
        this.props.closeModal();
        // this.props.history.push(this.props.match.url);
        // this.setState({ status: 'closed' })
        // this.setState({ editStatus: 'closed' })
    }

    // handleDelete() {
    //     this.props.deletePost(this.props.id);
    //     this.setState({ status: 'closed' });
    // }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {

        // const editDeleteBox = this.state.status === 'closed' ? (
        //     null
        // ) : (
        //     <div className="options">
        //         <div onClick={() => this.openModal({ type: 'editPost', })} className="edit" >Edit</div>
        //         <div onClick={this.handleDelete} className="delete">Delete</div>
        //     </div>
        // )

        // const editform = this.state.editStatus === 'closed' ? (
        //     null
        // ) : (
        //     <div className="edit-background">
        //         <form onSubmit={this.handleEdit}>
        //             <textarea 
        //                 value={this.state.body}
        //                 onChange={this.update('body')}
        //             />
        //             <button>edit</button>
        //         </form>
        //     </div>
        // )

        // console.log(this.props)
        // console.log(this.state)
        // console.log(this.props.post)
        return (
                <div className="edit-delete-button">
                    {/* <p className="button" onClick={this.handleStatus}>O</p> */}
                    {/* {editDeleteBox} */}
                    {/* {editform} */}
                    <div className="edit-background">
                        <form onSubmit={this.handleEdit}>
                            <textarea
                                value={this.state.body}
                                onChange={this.update('body')}
                            />
                            <button>edit</button>
                        </form>
                    </div>
                </div>
                // <form className="session-form" onSubmit={this.handleSubmit}>
                //     <div className="session-form-input">
                //         <label>Email
                //             <input
                //                 className="session-form-field"
                //                 type="text"
                //                 onChange={this.update('email')}
                //                 value={email}
                //             />
                //         </label>
                //         <label>First Name
                //             <input
                //                 className="session-form-field"
                //                 type="text"
                //                 onChange={this.update('fname')}
                //                 value={fname}
                //             />
                //         </label>
                //         <label>Last Name
                //             <input
                //                 className="session-form-field"
                //                 type="text"
                //                 onChange={this.update('lname')}
                //                 value={lname}
                //             />
                //         </label>
                //         <label>Biography
                //             <input
                //                 className="session-form-field"
                //                 type="textarea"
                //                 onChange={this.update('bio')}
                //                 value={bio}
                //             />
                //         </label>
                //         <label>Birthday
                //             <input
                //                 className="session-form-field"
                //                 type="text"
                //                 onChange={this.update('birthday')}
                //                 value={birthday}
                //             />
                //         </label>
                //     </div>
                //     <div>
                //         <button className="button">Submit Changes</button>
                //     </div>
                //     <div>
                //         <Link to={`users/${this.state.id}`}>Cancel</Link>
                //     </div>
                // </form>

        )

    }
}

export default PostEditForm;