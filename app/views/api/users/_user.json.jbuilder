json.extract! user, :id, :email, :fname, :lname, :bio, :birthday

if user.photo.attached?
    json.photoUrl url_for(user.photo)
end

json.friends user.friends.each do |friend| 
    json.extract! friend, :id

    if friend.photo.attached?
        json.photoUrl url_for(friend.photo)
    end
end