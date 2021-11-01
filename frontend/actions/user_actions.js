import * as UsersUtil from '../util/user_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const fetchUsers = () => dispatch => (
    UsersUtil.fetchUsers()
        .then((users) => dispatch(receiveAllUsers(users)))
)

export const fetchUser = userId => dispatch => (
    UsersUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
)

export const updateUser = user => dispatch => (
    UsersUtil.updateUser(user)
        .then(dispatch(receiveUser(user)))
)