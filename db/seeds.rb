# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')

demoUser = User.create!(
    email: 'demo@email.com',
    password: 'password',
    fname: 'De',
    lname: 'Mo',
    bio: "I'm a Demo.",
    birthday: 'November 15, 2021'
)

user1 = User.create!(
    email: 'ppark@email.com',
    password: 'user1pass',
    fname: 'Peter',
    lname: 'Park',
    bio: 'Loving life',
    birthday: 'August 10, 2001'
)

user2 = User.create!(
    email: 'tshark@email.com',
    password: 'user2pass',
    fname: 'Tony',
    lname: 'Shark',
    bio: 'A tech guru',
    birthday: 'May 29, 1970'
)

user3 = User.create!(
    email: 'carold@email.com',
    password: 'user3pass',
    fname: 'Carol',
    lname: 'Denver',
    bio: 'Love the space and stars',
    birthday: 'October 21, 1989'
)

Friend.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('friends')

friend1 = Friend.create!(
    user_id: 1,
    friend_id: 2
)

friend2 = Friend.create!(
    user_id: 1,
    friend_id: 3
)

friend3 = Friend.create!(
    user_id: 2,
    friend_id: 1
)

friend4 = Friend.create!(
    user_id: 2,
    friend_id: 4
)

friend5 = Friend.create!(
    user_id: 3,
    friend_id: 1
)

friend6 = Friend.create!(
    user_id: 3,
    friend_id: 4
)

friend7 = Friend.create!(
    user_id: 4,
    friend_id: 2
)

friend8 = Friend.create!(
    user_id: 4,
    friend_id: 3
)