json.extract! @comment, :id, :author_id, :body, :post_id, :created_at, :updated_at
json.extract! @comment.user, :fname, :lname
json.extract! @comment.post, :id