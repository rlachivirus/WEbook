@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :email, :fname, :lname, :bio, :birthday

        # json.friends user.friends.each do |friend| 
        #     json.extract! friend, :id
        # end

        json.friends user.friends, :id

        if user.photo.attached?
            json.photoUrl url_for(user.photo)
        end
    end
end
