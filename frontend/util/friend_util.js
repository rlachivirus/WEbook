export const createFriend = (formData) => {
    debugger
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