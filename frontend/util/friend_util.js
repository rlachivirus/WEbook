export const createFriend = () => (
    $.ajax({
        method: 'POST',
        url: `/api/friends`
    })
);

export const deleteFriend = (friendId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/friends/${friendId}`
    })
)