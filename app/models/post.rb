class Post < ApplicationRecord

    validates :body, presence: true

    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

    has_one_attached :photo
end