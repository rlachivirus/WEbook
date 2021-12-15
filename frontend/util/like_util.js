export const createLike = (formData) => (
    $.ajax({
        method: 'POST',
        url: `/api/likes`,
        data: formData,
        contentType: false,
        processData: false
    })
);

export const deleteLike = (likeId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`
    })
)

export const fetchLikes = () => (
    $.ajax({
        method: 'GET',
        url: '/api/likes'
    })
);
