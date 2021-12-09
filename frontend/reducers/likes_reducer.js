import { ADD_LIKE, REMOVE_LIKE, RECEIVE_ALL_LIKES } from '../actions/comment_actions';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case ADD_LIKE:
            nextState[action.like.id] = action.like;
            return nextState;
        case RECEIVE_ALL_LIKES:
            return action.likes
        case REMOVE_LIKE:
            delete nextState[action.likeId];
            return nextState;
        default:
            return state;
    }
}

export default likesReducer;