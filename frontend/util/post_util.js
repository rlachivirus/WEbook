export const createPost = (formData) => (
    $.ajax({
        method: 'POST',
        url: `/api/posts`,
        data: formData,
        contentType: false,
        processData: false
    })
);

export const deletePost = (postId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/posts/${postId}`
    })
)

export const updatePost = (formData) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/posts/${parseInt(formData.get('post[id]'))}`,
        data: formData,
        contentType: false,
        processData: false
    })
}

export const fetchPosts = () => (
    $.ajax({
        method: 'GET',
        url: '/api/posts'
    })
);