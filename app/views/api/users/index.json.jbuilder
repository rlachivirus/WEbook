@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :email, :fname, :lname, :bio, :birthday

        # json.friends user.friends.each do |friend| 
        #     json.extract! friend, :id
        # end

        json.friends user.friend_lists, :id, :user_id, :friend_id, :status

        # json.friends user.friend_lists.each do |friend| 
        #     json.extract! friend, :id, :user_id, :friend_id, :status
        #     json.requester friend.user_id
        # end

        json.posts user.posts, :id, :author_id, :body, :user_id, :created_at, :updated_at

        if user.photo.attached?
            json.photoUrl url_for(user.photo)
        end
    end
end
