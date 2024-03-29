export const fetchUsers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/users'
    })
);

export const fetchUser = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
);

export const updateUser = (user) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        data: { user }
    })
)

export const updateUserPhoto = (formData) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${parseInt(formData.get('user[id]'))}`,
        data: formData,
        contentType: false,
        processData: false
    })
)