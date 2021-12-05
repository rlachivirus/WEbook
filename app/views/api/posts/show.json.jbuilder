json.extract! @post, :id, :author_id, :body, :user_id, :created_at, :updated_at
json.extract! @post.user, :fname, :lname

if @post.photo.attached?
    json.photoUrl url_for(@post.photo)
end