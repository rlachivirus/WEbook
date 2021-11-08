export const createFriend = () => (
    $.ajax({
        method: 'POST',
        url: `/api/friends`
    })
);

export const deleteFriend = (friend) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/friends/${friend.id}`,
        data: { friend }
    })
)