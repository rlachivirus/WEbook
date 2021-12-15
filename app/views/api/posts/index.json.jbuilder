@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :author_id, :body, :user_id, :created_at, :updated_at
        json.extract! post.user, :fname, :lname
        json.likes post.likes, :id, :like_id, :like_type, :user_id

        if post.photo.attached?
            json.photoUrl url_for(post.photo)
        end
    end
end
