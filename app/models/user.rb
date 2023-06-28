class User < ApplicationRecord

    has_secure_password
    validates :username, presence: true
    validates :username, length: {in: 4..15}
    validates :username, uniqueness: true
    
end
