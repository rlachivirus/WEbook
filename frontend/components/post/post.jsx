import React from "react";
import { Link } from 'react-router-dom'

class Post extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()

    }

    render() {
        const { posts, user, friends, currentUser, currentUserId} = this.props;
        const friendIds = [currentUserId];
        friends.forEach(friend => friendIds.push(friend.friend_id));

        return (
            <div className="newsfeed">
                <div className="create-post">
                    <span>{`What's on your mind, ${this.props.currentUser.fname}`}</span>
                </div>
                <div className="newsfeed-posts">
                    <ul>
                        {Object.values(posts).reverse().map(post => {
                            if (friendIds.includes(post.author_id)) {
                                return (
                                    <div>
                                        <li className="post">
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
        )
    }
}

export default Post