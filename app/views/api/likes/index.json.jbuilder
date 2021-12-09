@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id, :like_id, :like_type
    end
end
