import * as CommentsUtil from '../util/comment_util';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const addComment = comment => ({
    type: ADD_COMMENT,
    comment
});

export const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
});

export const receiveAllComments = (comments) => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
});

export const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

export const createComment = (formData) => dispatch => (
    CommentsUtil.createComment(formData)
        .then((comment) => dispatch(addComment(comment)))
)

export const deleteComment = (commentId) => dispatch => (
    CommentsUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
)

export const updateComment = (comment) => dispatch => (
    CommentsUtil.updateComment(comment)
        .then((comment) => dispatch(receiveComment(comment)))
)

export const fetchComments = () => dispatch => (
    CommentsUtil.fetchComments()
        .then((comments) => dispatch(receiveAllComments(comments)))
)

export const fetchComment = (commentId) => dispatch => (
    CommentsUtil.fetchComment(commentId)
        .then((commentId) => dispatch(receiveComment(commentId)))
)