# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demoUser = User.create!(
    email: 'demo@email.com',
    password: 'password',
    fname: 'Peter',
    lname: 'Park',
    bio: 'nah nah nah',
    birthday: 'August 10, 2001'
)

# user1 = User.create!(
#     email: 'user1@email.com',
#     password: 'passforuser1'
# )

# user2 = User.create!(
#     email: 'user2@email.com',
#     password: 'passforuser2'
# )

# user3 = User.create!(
#     email: 'user3@email.com',
#     password: 'passforuser3'
# )
