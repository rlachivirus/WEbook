import React from "react";
import { Link } from 'react-router-dom'
import { fetchUser } from "../../actions/user_actions";
import PostEditContainer from "./post_edit_container";
import PostEditButton from "./post_edit_button";

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: ''
        }

        this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts()

    }

    openModal(obj) {
        this.props.openModal(obj);
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        const { posts, friends, userId, currentUserId } = this.props;

        // const createPost = (
        //     <div className="create-post">
        //         <div onClick={() => this.openModal({ type: 'createPost', currentUserId: this.props.currentUserId, userId: this.props.userId, createPost: this.props.createPost, currentUser: this.props.currentUser })}>{`What's on your mind, ${this.props.currentUser.fname}?`}</div>
        //     </div>
        // )

        const friendIds = [currentUserId];
        friends.forEach(friend => friendIds.push(friend.friend_id));


        const userFriendIds = [];
        if (this.props.entities.users[userId]) {
            this.props.entities.users[userId].friends.forEach(friend => userFriendIds.push(friend.friend_id));
        }

        const showFeeds = !this.props.entities.users[userId] ? (
            <div className="newsfeed">
                <div className="newsfeed-left"></div>
                <div className="newsfeed-middle">
                    <div className="create-post">
                        <div onClick={() => this.openModal({ type: 'createPost', currentUserId: this.props.currentUserId, userId: this.props.userId, createPost: this.props.createPost, currentUser: this.props.currentUser })}>{`What's on your mind, ${this.props.currentUser.fname}?`}</div>
                    </div>
                    <div className="newsfeed-posts">
                        <ul>
                            {Object.values(posts).reverse().map(post => {
                                if (friendIds.includes(post.author_id)) {
                                    return (
                                        <div key={post.id}>
                                            <li id={post.id} className="post">
                                                <span id={post.id}></span>
                                                <span className="post-name">{`${post.fname} ${post.lname}`}</span>
                                                <br/>
                                                <span className="post-body">{ post.body }</span>
                                                <PostEditButton id={post.id} />
                                            </li>
                                        </div>
                                    )
                                }
                            })}
                            </ul>
                    </div>
                </div>
                <div className="newsfeed-right"></div>
            </div>
        ) : userId === currentUserId ? (
            <div className="profile-feed">
                <div className="create-post">
                    <div onClick={() => this.openModal({ type: 'createPost', currentUserId: this.props.currentUserId, userId: this.props.userId, createPost: this.props.createPost, currentUser: this.props.currentUser })}>{`What's on your mind, ${this.props.currentUser.fname}?`}</div>
                </div>
                <div className="newsfeed-posts">
                    <ul>
                        {Object.values(posts).reverse().map(post => {
                            if (friendIds.includes(post.author_id) && post.user_id === userId) {
                                return (
                                    <div key={post.id}>
                                        <li id={post.id} className="post">
                                            <span id={post.id}></span>
                                            <span className="post-name">{`${post.fname} ${post.lname}`}</span>
                                            <br />
                                            <span className="post-body">{post.body}</span>
                                            <PostEditButton id={post.id} />
                                        </li>
                                    </div>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        ) : (
            <div className="profile-feed">
                <div className="create-post">
                    <div onClick={() => this.openModal({ type: 'createPost', currentUserId: this.props.currentUserId, userId: this.props.userId, createPost: this.props.createPost, currentUser: this.props.currentUser })}>{`Write something to your friend...`}</div>
                </div>
                <div className="newsfeed-posts">
                    <ul>
                        {Object.values(posts).reverse().map(post => {
                            if (userFriendIds.includes(post.author_id) && post.user_id === userId) {
                                return (
                                    <div key={post.id}>
                                        <li id={post.id} className="post">
                                            <span id={post.id}></span>
                                            <span className="post-name">{`${post.fname} ${post.lname}`}</span>
                                            <br />
                                            <span className="post-body">{post.body}</span>
                                            <PostEditButton id={post.id} />
                                        </li>
                                    </div>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        )

        return (
            <div>
                {showFeeds}
            </div>
        )
    }
}

export default Post