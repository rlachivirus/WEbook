import React from "react";
import { Link } from 'react-router-dom';

class PostEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            body: this.props.post,
            status: 'closed'
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchUser(this.state.id);
    // }

    handleClick() {
        this.state.status === 'closed' ? (
            this.setState({ status: 'open' })
        ) : (
            this.setState({ status: 'closed' })
        )
    }

    handleEdit() {

    }

    handleDelete() {

    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.id })
    }

    render() {


        console.log(this.props)
        console.log(this.state)
        return (
                <div className="edit-delete-button">
                    <div className="button" onClick={this.handleClick}></div>
                    <div id={this.props.id} onClick={} className="edit" >Edit</div>
                    <div id={this.props.id} className="delete">Delete</div>
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