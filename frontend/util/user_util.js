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

export const updateUser = (formData) => {
    // debugger
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${parseInt(formData.get('user[id]'))}`,
        data: formData,
        contentType: false,
        processData: false
    })
}

