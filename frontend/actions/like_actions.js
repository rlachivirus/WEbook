import * as LikesUtil from '../util/like_util';

export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';

export const addLike = like => ({
    type: ADD_LIKE,
    like
});

export const removeLike = (likeId) => ({
    type: REMOVE_LIKE,
    likeId
});

export const receiveAllLikes = (likes) => ({
    type: RECEIVE_ALL_LIKES,
    likes
});

export const createLike = (formData) => dispatch => (
    LikesUtil.createLike(formData)
        .then((comment) => dispatch(addLike(comment)))
)

export const deleteLike = (likeId) => dispatch => (
    LikesUtil.deleteLike(likeId)
        .then(() => dispatch(removeLike(likeId)))
)

export const fetchLikes = () => dispatch => (
    LikesUtil.fetchLikes()
        .then((likes) => dispatch(receiveAllLikes(likes)))
)
