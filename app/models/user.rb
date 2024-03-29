class User < ApplicationRecord

  attr_reader :password
  
  validates :email, presence: true, uniqueness: true
  validates :fname, :lname, :password_digest, :session_token, presence: true
  validates_format_of :email, :with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_one_attached :photo

  has_many :friend_lists,
    foreign_key: :user_id,
    class_name: :Friend

  has_many :friends,
    through: :friend_lists,
    source: :friend

  has_many :posts,
    foreign_key: :author_id,
    class_name: :Post

  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
