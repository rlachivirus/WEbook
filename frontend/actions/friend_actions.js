import * as FriendsUtil from '../util/friend_util';

export const ADD_FRIEND = 'ADD_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

export const addFriend = friend => ({
    type: ADD_FRIEND,
    friend
});

export const removeFriend = (friendId) => ({
    type: REMOVE_FRIEND,
    friendId
});

export const createFriend = () => dispatch => (
    FriendsUtil.createFriend()
        .then((friend) => dispatch(addFriend(friend)))
)

export const deleteFriend = (friendId) => dispatch => (
    FriendsUtil.deleteFriend(friendId)
        .then((friendId) => dispatch(removeFriend(friendId)))
)