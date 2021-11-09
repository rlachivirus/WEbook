import { ADD_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';

const friendsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case ADD_FRIEND:
            nextState[action.friend.id] = action.friend;
            // nextState.table = action.friend;
            return nextState;
        case REMOVE_FRIEND:
            delete nextState[action.friendId];
            return nextState;
        default:
            return state;
    }
}

export default friendsReducer;