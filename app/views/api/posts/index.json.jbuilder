@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :author_id, :created_at, :updated_at
    end
end
