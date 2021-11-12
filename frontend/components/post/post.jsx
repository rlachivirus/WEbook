import React from "react";
import { Link } from 'react-router-dom'
import { fetchUser } from "../../actions/user_actions";

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
            status: 'closed'
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts()

    }

    handleClick() {
        this.state.status === 'closed' ? (
            this.setState({ status: 'open' })
        ) : (
            this.setState({ status: 'closed' })
        )
    }

    handleSubmit() {
        // e.preventDefault();
        const formData = new FormData();
        formData.append('post[author_id]', this.props.currentUserId);
        formData.append('post[body]', this.state.body);
        this.setState({ status: 'closed' });
        this.props.createPost(formData).then(res => this.props.fetchUser(parseInt(formData.get('post[author_id]'))));
        // if (this.props.userId) {
        //     this.props.history.push(`/users/${this.props.userId}`);
        // } else {
        //     this.props.history.push(`/`);
        // }
        // this.props.history.push(`/users/${this.state.id}`);
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        const { posts, friends, userId, currentUserId } = this.props;

        const createPost = this.state.status === 'open' ? (
            <div className="close-post">
                <div className="close-X">
                    <p onClick={this.handleClick}>X</p>
                    <form onSubmit={this.handleSubmit}>
                        <textarea onChange={this.update('body')} placeholder={`What's on your mind, ${this.props.currentUser.fname}`} />
                        <button className="create-post-button">Post</button>
                    </form>
                </div>
            </div>
        ) : (
            // <div className="account-button" onClick={this.handleClick}>▼</div>
            <div className="create-post">
                <span onClick={this.handleClick}>{`What's on your mind, ${this.props.currentUser.fname}`}</span>
            </div>
        )

        const friendIds = [currentUserId];
        friends.forEach(friend => friendIds.push(friend.friend_id));


        // const userFriendIds = [];
        // if (this.props.entities.users[userId]) {
        //     this.props.entities.users[userId].friends.forEach(friend => userFriendIds.push(friend.friend_id));
        // }

        const showFeeds = !this.props.entities.users[userId] ? (
            <div className="newsfeed">
                {createPost}
                <div className="newsfeed-posts">
                    <ul>
                        {Object.values(posts).reverse().map(post => {
                            if (friendIds.includes(post.author_id)) {
                                return (
                                    <div>
                                        <li className="post">NEWSFEED
                                            <span className="post-name">{`${post.fname} ${post.lname}`}</span>
                                            <br/>
                                            <span className="post-body">{ post.body }</span>
                                        </li>
                                    </div>
                                )
                            }
                        })}
                        </ul>
                </div>
            </div>
        ) : userId === currentUserId ? (
            <div className="myfeed">
                {createPost}
                <div className="newsfeed-posts">
                    <ul>
                        {Object.values(posts).reverse().map(post => {
                            if (currentUserId === post.author_id || (currentUserId !== post.author_id && friendIds.includes(post.author_id))) {
                                if (currentUserId === userId) 
                                return (
                                    <div>
                                        <li className="post">MYFEED
                                            <span className="post-name">{`${post.fname} ${post.lname}`}</span>
                                            <br />
                                            <span className="post-body">{post.body}</span>
                                        </li>
                                    </div>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        ) : (
            <div className="friendfeeds">
                {createPost}
                <div className="newsfeed-posts">
                    <ul>
                        {Object.values(posts).reverse().map(post => {
                            if (post.author_id === userId || userFriendIds.includes(post.author_id)) {
                                return (
                                    <div>
                                        <li className="post">FRIENDFEEDS
                                            <span className="post-name">{`${post.fname} ${post.lname}`}</span>
                                            <br />
                                            <span className="post-body">{post.body}</span>
                                        </li>
                                    </div>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        )
        
        console.log(this.props.userId)
        console.log(this.props.currentUserId)
        console.log(this.state)
        return (
            showFeeds
        )
    }
}

export default Post