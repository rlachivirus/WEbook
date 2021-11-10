export const createFriend = (formData) => {

    return $.ajax({
        method: 'POST',
        url: `/api/friends`,
        data: formData,
        contentType: false,
        processData: false
    })
};

export const deleteFriend = (friendId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/friends/${friendId}`
    })
)

export const updateFriend = (formData) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/friends/${parseInt(formData.get('friend[id]'))}`,
        data: formData,
        contentType: false,
        processData: false
    })
}

export const fetchFriends = () => (
    $.ajax({
        method: 'GET',
        url: '/api/friends'
    })
);