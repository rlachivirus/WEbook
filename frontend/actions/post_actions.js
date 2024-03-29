import * as PostsUtil from '../util/post_util';

export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const addPost = post => ({
    type: ADD_POST,
    post
});

export const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
});

export const receiveAllPosts = (posts) => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
})

export const createPost = (formData) => dispatch => (
    PostsUtil.createPost(formData)
        .then((post) => dispatch(addPost(post)))
)

export const deletePost = (postId) => dispatch => (
    PostsUtil.deletePost(postId)
        .then(() => dispatch(removePost(postId)))
)

export const updatePost = (formData) => dispatch => (
    PostsUtil.updatePost(formData)
        .then((post) => dispatch(receivePost(post)))
)

export const fetchPosts = () => dispatch => (
    PostsUtil.fetchPosts()
        .then((posts) => dispatch(receiveAllPosts(posts)))
)

export const fetchPost = (postId) => dispatch => (
    PostsUtil.fetchPost(postId)
        .then((postId) => dispatch(receivePost(postId)))
)