@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :author_id, :body, :user_id, :created_at, :updated_at
        json.extract! post.user, :fname, :lname
    end
end
