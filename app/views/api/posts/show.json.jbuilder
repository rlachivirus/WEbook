json.extract! @post, :id, :author_id, :body, :created_at, :updated_at
json.extract! @post.user, :fname, :lname