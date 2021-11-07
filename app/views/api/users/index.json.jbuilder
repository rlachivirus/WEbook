# @users.each do |user|
#     json.extract! user, :id, :email, :fname, :lname, :bio, :birthday
#     if user.photo.attached?
#         json.photoUrl url_for(user.photo)
#     end
#     json.friends user.friends, :friend_id
# end