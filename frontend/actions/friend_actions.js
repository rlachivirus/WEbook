import * as FriendsUtil from '../util/friend_util';

export const ADD_FRIEND = 'ADD_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS'

export const addFriend = friend => ({
    type: ADD_FRIEND,
    friend
});

export const removeFriend = (friendId) => ({
    type: REMOVE_FRIEND,
    friendId
});

export const receiveAllFriends = (friends) => ({
    type: RECEIVE_ALL_FRIENDS,
    friends
});

export const createFriend = (formData) => dispatch => (
    FriendsUtil.createFriend(formData)
        .then((friend) => dispatch(addFriend(friend)))
)

export const deleteFriend = (friendId) => dispatch => (
    FriendsUtil.deleteFriend(friendId)
        .then(() => dispatch(removeFriend(friendId)))
)

export const updateFriend = (friend) => dispatch => (
    FriendsUtil.updateFriend(friend)
        .then((friend) => dispatch(addFriend(friend)))
)

export const fetchFriends = () => dispatch => (
    FriendsUtil.fetchFriends()
        .then((friends) => dispatch(receiveAllFriends(friends)))
)