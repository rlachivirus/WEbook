import React from "react";
import { Link } from 'react-router-dom'
import { fetchUser } from "../../actions/user_actions";
import PostEditContainer from "./post_edit_container";
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

    // componentDidUpdate(prevProps) {
    //     if (Object.values(this.props.comments).length !== Object.values(prevProps.comments).length) {
    //         this.props.fetchComments()
    //     }
    // }

    clickComment(postId) {
        let commentInput = document.getElementById(`input-${postId}`)
        let inputFocus = document.getElementById(`inputPlaceholder-${postId}`)
        // debugger
        if (commentInput.style.display === "none") {
            commentInput.style.display = "";
            inputFocus.focus();
        } else {
            commentInput.style.display = "none";
        }
    }

    likePost(post) {
        // let postIds = [];

        // Object.values(this.props.posts).forEach(post => {
        //     postIds.push(post.)
        // })
        let likeId = null;

        this.props.currentUser.likes.forEach(like => {
            if (like.like_id === post.id && like.like_type === "Post") {
                return likeId = like.id
            }
        })
        // debugger

        if (likeId) {
            this.props.deleteLike(likeId)
                .then(res => console.log(res))
        } else {
            // debugger
            const formData = new FormData();
            formData.append('like[like_id]', post.id);
            formData.append('like[like_type]', "Post");
            this.props.createLike(formData)
                .then(res => console.log(res))
        }
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
                        <img className="profile-picture" src={this.props.users[this.props.currentUserId].photoUrl} />
                        <div className="create-button" onClick={() => this.openModal({ type: 'createPost', currentUserId: this.props.currentUserId, userId: this.props.userId, createPost: this.props.createPost, currentUser: this.props.currentUser })}>{`What's on your mind, ${this.props.currentUser.fname}?`}</div>
                    </div>
                    <ul className="newsfeed-posts">
                        {Object.values(posts).reverse().map((post, idx) => {
                            if (friendIds.includes(post.author_id)) {
                                let months = { 1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December" };
                                let currentYear = this.state.date;
                                let postYear = parseInt(post.created_at.slice(0, 10).split("-")[0]) !== currentYear ? `, ${post.created_at.slice(0, 10).split("-")[0]}` : "";
                                let postMonth = months[post.created_at.slice(0, 10).split("-")[1]];
                                let postDay = post.created_at.slice(0, 10).split("-")[2];
                                let postName;

                                if (this.props.users[post.user_id]) {
                                    postName = post.author_id === post.user_id ? `${post.fname} ${post.lname}` : `${post.fname} ${post.lname} ▸ ${this.props.users[post.user_id].fname} ${this.props.users[post.user_id].lname}`
                                } else {
                                    postName = `${post.fname} ${post.lname}`
                                }

                                return (
                                    <li key={`${post.id}-${idx}`} id={post.id} className="post">
                                        <div className="post-top">
                                            <div className="post-top-left">
                                                <img className="profile-picture" src={this.props.users[post.author_id].photoUrl} />
                                                <div className="post-nameAndDate">
                                                    <span className="post-name">{postName}</span>
                                                    <span className="post-date">{`${postMonth} ${postDay}${postYear}`}</span>
                                                </div>
                                            </div>
                                            <PostEditButton id={post.id} />
                                        </div>
                                        <br/>
                                        <span className="post-body">{post.body}</span>
                                        <br/>
                                        <img className="post-picture" src={post.photoUrl} />
                                        <LikePostContainer post={post} typePost="post"/>
                                        {/* <div className="post-like-count">
                                            <img />
                                            <p>{post.likes.length}</p>
                                        </div> */}
                                        <hr/>
                                        <div className="likeAndComment">
                                            <div className="post-like" onClick={() => this.likePost(post)}>Like</div>
                                            <div className="post-comment" onClick={() => this.clickComment(post.id)}>Comment</div>
                                        </div>
                                        <hr/>
                                        <div id={`input-${post.id}`} style={{ display: "none" }}>
                                            <CommentContainer currentUserId={this.props.currentUserId} postId={post.id} />
                                            {/* <input className="commentInput" type="text" placeholder="Write a Comment..." />
                                            <p>check</p>
                                            <p>check</p>
                                            <p>check</p>
                                            <p>check</p>
                                            <p>check</p> */}
                                        </div>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
                <div className="newsfeed-right"></div>
            </div>
        ) : userId === currentUserId ? (
            <div className="profile-feed">
                <div className="create-post">
                    <img className="profile-picture" src={this.props.users[this.props.currentUserId].photoUrl} />
                    <div className="create-button" onClick={() => this.openModal({ type: 'createPost', currentUserId: this.props.currentUserId, userId: this.props.userId, createPost: this.props.createPost, currentUser: this.props.currentUser })}>{`What's on your mind, ${this.props.currentUser.fname}?`}</div>
                </div>
                {/* <div className="newsfeed-posts"> */}
                    <ul className="newsfeed-posts">
                        {Object.values(posts).reverse().map(post => {
                            if (friendIds.includes(post.author_id) && (post.user_id === userId || post.user_id === 0)) {
                                let months = { 1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December" };
                                let currentYear = this.state.date;
                                let postYear = parseInt(post.created_at.slice(0, 10).split("-")[0]) !== currentYear ? `, ${post.created_at.slice(0, 10).split("-")[0]}` : "";
                                let postMonth = months[post.created_at.slice(0, 10).split("-")[1]];
                                let postDay = post.created_at.slice(0, 10).split("-")[2];
                                let postName;

                                if (this.props.users[post.user_id]) {
                                    postName = post.author_id === post.user_id ? `${post.fname} ${post.lname}` : `${post.fname} ${post.lname} ▸ ${this.props.users[post.user_id].fname} ${this.props.users[post.user_id].lname}`
                                } else {
                                    postName = `${post.fname} ${post.lname}`
                                }

                                return (
                                    // <div key={post.id}>
                                    //     <li id={post.id} className="post">
                                    //         <span className="post-name">{`${post.fname} ${post.lname}`}</span>
                                    //         <br />
                                    //         <span className="post-body">{post.body}</span>
                                    //         <PostEditButton id={post.id} />
                                    //     </li>
                                    // </div>
                                    <li key={`${post.id}-${idx}`} id={post.id} className="post">
                                        <div className="post-top">
                                            <div className="post-top-left">
                                                <img className="profile-picture" src={this.props.users[post.author_id].photoUrl} />
                                                <div className="post-nameAndDate">
                                                    <span className="post-name">{postName}</span>
                                                    <span className="post-date">{`${postMonth} ${postDay}${postYear}`}</span>
                                                </div>
                                            </div>
                                            <PostEditButton id={post.id} />
                                        </div>
                                        <br />
                                        <span className="post-body">{post.body}</span>
                                        <br />
                                        <img className="post-picture" src={post.photoUrl} />
                                        <LikePostContainer post={post} typePost="post" />
                                        <hr />
                                        <div className="likeAndComment">
                                            <div className="post-like">Like</div>
                                            <div className="post-comment" onClick={() => this.clickComment(post.id)}>Comment</div>
                                        </div>
                                        <hr />
                                        <div id={`input-${post.id}`} style={{ display: "none" }}>
                                            <CommentContainer currentUserId={this.props.currentUserId} postId={post.id} />
                                            {/* <input className="commentInput" type="text" placeholder="Write a Comment..." />
                                            <p>check</p>
                                            <p>check</p>
                                            <p>check</p>
                                            <p>check</p>
                                            <p>check</p> */}
                                        </div>
                                    </li>
                                )
                            }
                        })}
                    </ul> 
                {/* </div> */}
            </div>
        ) : (
            <div className="profile-feed">
                <div className="create-post">
                    <img className="profile-picture" src={this.props.users[this.props.currentUserId].photoUrl} />
                    <div className="create-button" onClick={() => this.openModal({ type: 'createPost', currentUserId: this.props.currentUserId, userId: this.props.userId, createPost: this.props.createPost, currentUser: this.props.currentUser })}>{`Write something to your friend...`}</div>
                </div>
                {/* <div className="newsfeed-posts"> */}
                <ul className="newsfeed-posts">
                    {Object.values(posts).reverse().map(post => {
                        if (userFriendIds.includes(post.author_id) && post.user_id === userId) {
                            let months = { 1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December" };
                            let currentYear = this.state.date;
                            let postYear = parseInt(post.created_at.slice(0, 10).split("-")[0]) !== currentYear ? `, ${post.created_at.slice(0, 10).split("-")[0]}` : "";
                            let postMonth = months[post.created_at.slice(0, 10).split("-")[1]];
                            let postDay = post.created_at.slice(0, 10).split("-")[2];
                            let postName;

                            if (this.props.users[post.user_id]) {
                                postName = post.author_id === post.user_id ? `${post.fname} ${post.lname}` : `${post.fname} ${post.lname} ▸ ${this.props.users[post.user_id].fname} ${this.props.users[post.user_id].lname}`
                            } else {
                                postName = `${post.fname} ${post.lname}`
                            }

                            return (
                                // <div key={post.id}>
                                //     <li id={post.id} className="post">
                                //         <span id={post.id}></span>
                                //         <span className="post-name">{`${post.fname} ${post.lname}`}</span>
                                //         <br />
                                //         <span className="post-body">{post.body}</span>
                                //         <PostEditButton id={post.id} />
                                //     </li>
                                // </div>
                                <li key={`${post.id}-${idx}`} id={post.id} className="post">
                                    <div className="post-top">
                                        <div className="post-top-left">
                                            <img className="profile-picture" src={this.props.users[post.author_id].photoUrl} />
                                            <div className="post-nameAndDate">
                                                <span className="post-name">{postName}</span>
                                                <span className="post-date">{`${postMonth} ${postDay}${postYear}`}</span>
                                            </div>
                                        </div>
                                        <PostEditButton id={post.id} />
                                    </div>
                                    <br />
                                    <span className="post-body">{post.body}</span>
                                    <br />
                                    <img className="post-picture" src={post.photoUrl} />
                                    <LikePostContainer post={post} typePost="post" />
                                    <hr />
                                    <div className="likeAndComment">
                                        <div className="post-like">Like</div>
                                        <div className="post-comment" onClick={() => this.clickComment(post.id)}>Comment</div>
                                    </div>
                                    <hr />
                                    <div id={`input-${post.id}`} style={{ display: "none" }}>
                                        <CommentContainer currentUserId={this.props.currentUserId} postId={post.id} />
                                        {/* <input className="commentInput" type="text" placeholder="Write a Comment..." />
                                        <p>check</p>
                                        <p>check</p>
                                        <p>check</p>
                                        <p>check</p>
                                        <p>check</p> */}
                                    </div>
                                </li>
                            )
                        }
                    })}
                </ul>
                {/* </div> */}
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