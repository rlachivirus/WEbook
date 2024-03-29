import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import friendsReducer from "./friends_reducer";
import postsReducer from "./posts_reducer";
import commentsReducer from "./comments_reducer";
import likesReducer from "./likes_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    friends: friendsReducer,
    posts: postsReducer,
    comments: commentsReducer,
    likes: likesReducer
});

export default entitiesReducer;