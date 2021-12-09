json.extract! user, :id, :email, :fname, :lname, :bio, :birthday

if user.photo.attached?
    json.photoUrl url_for(user.photo)
end

json.posts user.posts, :id, :author_id, :body, :user_id, :created_at, :updated_at

user.posts.each do |post|
    json.likes post.likes
end

json.friends user.friend_lists.each do |friend| 
    json.extract! friend, :id, :user_id, :friend_id, :status

    # if friend.photo.attached?
    #     json.photoUrl url_for(friend.photo)
    # end
end