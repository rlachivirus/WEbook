import React from "react";
import { Link } from 'react-router-dom'
import PostEditButton from "./post_edit_button";
import CommentContainer from "../comment/comment_container";
import LikePostContainer from "../like/like_post";

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
            date: new Date().getFullYear()
        }

        this.openModal = this.openModal.bind(this);
        this.clickComment = this.clickComment.bind(this);
        this.likePost = this.likePost.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchUsers();
        this.props.fetchComments();
        this.props.fetchLikes();
    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    clickComment(postId) {
        let commentInput = document.getElementById(`input-${postId}`)
        let inputFocus = document.getElementById(`inputPlaceholder-${postId}`)

        if (commentInput.style.display === "none") {
            commentInput.style.display = "";
            inputFocus.focus();
        } else {
            commentInput.style.display = "none";
        }
    }

    likePost(post) {
        let likeId = null;

        Object.values(this.props.likes).forEach(like => {
            if (like.like_id === post.id && like.like_type === "Post" && this.props.currentUserId === like.user_id) {
                return likeId = like.id
            }
        })

        if (likeId) {
            this.props.deleteLike(likeId)
        } else {
            const formData = new FormData();
            formData.append('like[like_id]', post.id);
            formData.append('like[like_type]', "Post");
            formData.append('like[user_id]', this.props.currentUserId);
            this.props.createLike(formData)
        }
    }

    openModal(obj) {
        this.props.openModal(obj);
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        const { posts, friends, userId, currentUserId, users } = this.props;
        const friendIds = [currentUserId];

        friends.forEach(friend => {
            if (friend.status === 'Friends') {
                friendIds.push(friend.friend_id)
            }
        });

        const userFriendIds = [userId];
        if (this.props.entities.users[userId]) {
            this.props.entities.users[userId].friends.forEach(friend => {
                if (friend.status === "Friends") {
                    userFriendIds.push(friend.friend_id)
                }
            });
        }

        const hideCreatePost = userFriendIds.includes(currentUserId) ? (
            <div className="create-post">
                <Link to={`/users/${this.props.currentUserId}`}>
                    <img className="profile-picture" onClick={this.scrollToTop} src={this.props.users[this.props.currentUserId].photoUrl} />
                </Link>
                <div className="create-button" onClick={() => this.openModal({ type: 'createPost', currentUserId: this.props.currentUserId, userId: this.props.userId, createPost: this.props.createPost, currentUser: this.props.currentUser })}>{`Write something to your friend...`}</div>
            </div>
        ) : (
            null
        )

        const showFeeds = !this.props.entities.users[userId] ? (
            <div className="newsfeed">
                <div className="newsfeed-left">
                    <Link className="newsfeed-left-buttons" to={`/users/${this.props.currentUserId}`}>
                        <img src={this.props.currentUser.photoUrl} />
                        <p>{`${this.props.currentUser.fname} ${this.props.currentUser.lname}`}</p>
                    </Link>
                    <a className="newsfeed-left-buttons" href="https://rlachivirus.github.io/albertck/" target="_blank">
                        <img src={window.portfolio} />
                        <p>Portfolio</p>
                    </a>
                    <a className="newsfeed-left-buttons" href="https://www.linkedin.com/in/albertck/" target="_blank">
                        <img src={window.linkedin} />
                        <p>LinkedIn</p>
                    </a>
                    <a className="newsfeed-left-buttons" href="https://angel.co/u/albert-kim-39" target="_blank">
                        <img src={window.angellist} />
                        <p>AngelList</p>
                    </a>
                    <a className="newsfeed-left-buttons" href="https://github.com/rlachivirus" target="_blank">
                        <img src={window.github} />
                        <p>GitHub</p>
                    </a>
                    <a className="newsfeed-left-buttons" href="https://rlachivirus.github.io/Keyboard-Tiles/" target="_blank">
                        <img src={window.keyboard} />
                        <p>Keyboard-Tiles</p>
                    </a>
                    <a className="newsfeed-left-buttons" href="https://moviefridays.herokuapp.com/#/login" target="_blank">
                        <img src={window.movie} />
                        <p>Movie Fridays</p>
                    </a>
                </div>
                <div className="newsfeed-middle">
                    <div className="create-post">
                        <Link to={`/users/${this.props.currentUserId}`}>
                            <img className="profile-picture" src={this.props.users[this.props.currentUserId].photoUrl} />
                        </Link>
                        <div className="create-button" onClick={() => this.openModal({ type: 'createPost', currentUserId: this.props.currentUserId, userId: this.props.userId, createPost: this.props.createPost, currentUser: this.props.currentUser })}>{`What's on your mind, ${this.props.currentUser.fname}?`}</div>
                    </div>
                    <ul className="newsfeed-posts">
                        {Object.values(posts).reverse().map((post, idx) => {
                            if (friendIds.includes(post.author_id)) {
                                let months = { 1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December" };
                                let currentYear = this.state.date;
                                let postYear = parseInt(post.created_at.slice(0, 10).split("-")[0]) !== currentYear ? `, ${post.created_at.slice(0, 10).split("-")[0]}` : "";
                                let postMonth = months[parseInt(post.created_at.slice(0, 10).split("-")[1])];
                                let postDay = post.created_at.slice(0, 10).split("-")[2];
                                let postName;

                                if (this.props.users[post.user_id]) {
                                    postName = post.author_id === post.user_id ? (
                                    <Link className="post-name" to={`/users/${post.author_id}`}>{`${post.fname} ${post.lname}`}</Link>) : (
                                    <div>
                                        <Link className="post-name" to={`/users/${post.author_id}`}>{`${post.fname} ${post.lname}`}</Link>
                                        <span> ▸ </span>
                                        <Link className="post-name" to={`/users/${post.user_id}`}>{`${users[post.user_id].fname} ${users[post.user_id].lname}`}</Link>
                                    </div>
                                    )
                                } else {
                                    postName = <Link className="post-name" to={`/users/${post.author_id}`}>{`${post.fname} ${post.lname}`}</Link>
                                }

                                return (
                                    <li key={`${post.id}-${idx}`} id={post.id} className="post">
                                        <div className="post-top">
                                            <div className="post-top-left">
                                                <Link to={`/users/${post.author_id}`}>
                                                    <img className="profile-picture" src={this.props.users[post.author_id] ? this.props.users[post.author_id].photoUrl : null} />
                                                </Link>
                                                <div className="post-nameAndDate">
                                                    {postName}
                                                    <span className="post-date">{`${postMonth} ${postDay}${postYear}`}</span>
                                                </div>
                                            </div>
                                            <PostEditButton id={post.id} />
                                        </div>
                                        <br/>
                                        <span className="post-body">{post.body}</span>
                                        <br/>
                                        <img className="post-picture" src={post.photoUrl} />
                                        <LikePostContainer post={post} type="post"/>
                                        <hr/>
                                        <div className="likeAndComment">
                                            <div className="post-like" id={`post-like-${post.id}`} onClick={() => this.likePost(post)}>Like</div>
                                            <div className="post-comment" onClick={() => this.clickComment(post.id)}>Comment</div>
                                        </div>
                                        <hr/>
                                        <div id={`input-${post.id}`} style={{ display: "none" }}>
                                            <CommentContainer currentUserId={this.props.currentUserId} postId={post.id} likes={this.props.likes}/>
                                        </div>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
                    <ul className="newsfeed-right">Friends
                    <hr/>
                    {Object.values(users).map((friend, idx) => {
                        if (friendIds.includes(friend.id) && friend.id !== currentUserId) {
                            return (
                            <li key={`${friend.id}-${idx}`}>
                                <Link className="newsfeed-right-friends" to={`/users/${friend.id}`}>
                                    <img src={friend.photoUrl} />
                                    <p>{`${friend.fname} ${friend.lname}`}</p>
                                </Link>
                            </li>
                            )
                        }
                        })}
                    </ul>
            </div>
        ) : userId === currentUserId ? (
            <div className="profile-feed">
                <div className="create-post">
                    <Link to={`/users/${this.props.currentUserId}`}>
                        <img onClick={this.scrollToTop} className="profile-picture" src={this.props.users[this.props.currentUserId].photoUrl} />
                    </Link>
                    <div className="create-button" onClick={() => this.openModal({ type: 'createPost', currentUserId: this.props.currentUserId, userId: this.props.userId, createPost: this.props.createPost, currentUser: this.props.currentUser })}>{`What's on your mind, ${this.props.currentUser.fname}?`}</div>
                </div>
                    <ul className="newsfeed-posts">
                        {Object.values(posts).reverse().map((post, idx) => {
                            if ((friendIds.includes(post.author_id) && post.user_id === userId) || (post.author_id === currentUserId && post.user_id === 0)) {
                                let months = { 1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December" };
                                let currentYear = this.state.date;
                                let postYear = parseInt(post.created_at.slice(0, 10).split("-")[0]) !== currentYear ? `, ${post.created_at.slice(0, 10).split("-")[0]}` : "";
                                let postMonth = months[parseInt(post.created_at.slice(0, 10).split("-")[1])];
                                let postDay = post.created_at.slice(0, 10).split("-")[2];
                                let postName;

                                if (this.props.users[post.user_id]) {
                                    postName = post.author_id === post.user_id ? (
                                        <Link onClick={this.scrollToTop} className="post-name" to={`/users/${post.author_id}`}>{`${post.fname} ${post.lname}`}</Link>) : (
                                        <div>
                                            <Link className="post-name" onClick={this.scrollToTop} to={`/users/${post.author_id}`}>{`${post.fname} ${post.lname}`}</Link>
                                            <span> ▸ </span>
                                            <Link className="post-name" onClick={this.scrollToTop} to={`/users/${post.user_id}`}>{`${users[post.user_id].fname} ${users[post.user_id].lname}`}</Link>
                                        </div>
                                    )
                                } else {
                                    postName = <Link onClick={this.scrollToTop} className="post-name" to={`/users/${post.author_id}`}>{`${post.fname} ${post.lname}`}</Link>
                                }

                                return (
                                    <li key={`${post.id}-${idx}`} id={post.id} className="post">
                                        <div className="post-top">
                                            <div className="post-top-left">
                                                <Link to={`/users/${post.author_id}`}>
                                                    <img onClick={this.scrollToTop} className="profile-picture" src={this.props.users[post.author_id] ? this.props.users[post.author_id].photoUrl : null} />
                                                </Link>
                                                <div className="post-nameAndDate">
                                                    {postName}
                                                    <span className="post-date">{`${postMonth} ${postDay}${postYear}`}</span>
                                                </div>
                                            </div>
                                            <PostEditButton id={post.id} />
                                        </div>
                                        <br />
                                        <span className="post-body">{post.body}</span>
                                        <br />
                                        <img className="post-picture" src={post.photoUrl} />
                                        <LikePostContainer post={post} type="post" />
                                        <hr />
                                        <div className="likeAndComment">
                                            <div className="post-like" id={`post-like-${post.id}`} onClick={() => this.likePost(post)}>Like</div>
                                            <div className="post-comment" onClick={() => this.clickComment(post.id)}>Comment</div>
                                        </div>
                                        <hr />
                                        <div id={`input-${post.id}`} style={{ display: "none" }}>
                                            <CommentContainer currentUserId={this.props.currentUserId} postId={post.id} likes={this.props.likes}/>
                                        </div>
                                    </li>
                                )
                            }
                        })}
                    </ul> 
            </div>
        ) : (
            <div className="profile-feed">
                {hideCreatePost}
                <ul className="newsfeed-posts">
                    {Object.values(posts).reverse().map((post, idx) => {
                        if ((userFriendIds.includes(post.author_id) && post.user_id === userId) || (post.author_id === userId && post.user_id === 0)) {
                            let months = { 1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December" };
                            let currentYear = this.state.date;
                            let postYear = parseInt(post.created_at.slice(0, 10).split("-")[0]) !== currentYear ? `, ${post.created_at.slice(0, 10).split("-")[0]}` : "";
                            let postMonth = months[parseInt(post.created_at.slice(0, 10).split("-")[1])];
                            let postDay = post.created_at.slice(0, 10).split("-")[2];
                            let postName;

                            if (this.props.users[post.user_id]) {
                                postName = post.author_id === post.user_id ? (
                                    <Link className="post-name" onClick={this.scrollToTop} to={`/users/${post.author_id}`}>{`${post.fname} ${post.lname}`}</Link>) : (
                                    <div>
                                        <Link className="post-name" onClick={this.scrollToTop} to={`/users/${post.author_id}`}>{`${post.fname} ${post.lname}`}</Link>
                                        <span> ▸ </span>
                                        <Link className="post-name" onClick={this.scrollToTop} to={`/users/${post.user_id}`}>{`${users[post.user_id].fname} ${users[post.user_id].lname}`}</Link>
                                    </div>
                                )
                            } else {
                                postName = <Link className="post-name" onClick={this.scrollToTop} to={`/users/${post.author_id}`}>{`${post.fname} ${post.lname}`}</Link>
                            }

                            return (
                                <li key={`${post.id}-${idx}`} id={post.id} className="post">
                                    <div className="post-top">
                                        <div className="post-top-left">
                                            <Link to={`/users/${post.author_id}`}>
                                                <img className="profile-picture" onClick={this.scrollToTop} src={this.props.users[post.author_id] ? this.props.users[post.author_id].photoUrl : null} />
                                            </Link>
                                            <div className="post-nameAndDate">
                                                {postName}
                                                <span className="post-date">{`${postMonth} ${postDay}${postYear}`}</span>
                                            </div>
                                        </div>
                                        <PostEditButton id={post.id} />
                                    </div>
                                    <br />
                                    <span className="post-body">{post.body}</span>
                                    <br />
                                    <img className="post-picture" src={post.photoUrl} />
                                    <LikePostContainer post={post} type="post" />
                                    <hr />
                                    <div className="likeAndComment">
                                        <div className="post-like" id={`post-like-${post.id}`} onClick={() => this.likePost(post)}>Like</div>
                                        <div className="post-comment" onClick={() => this.clickComment(post.id)}>Comment</div>
                                    </div>
                                    <hr />
                                    <div id={`input-${post.id}`} style={{ display: "none" }}>
                                        <CommentContainer currentUserId={this.props.currentUserId} postId={post.id} likes={this.props.likes}/>
                                    </div>
                                </li>
                            )
                        }
                    })}
                </ul>
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