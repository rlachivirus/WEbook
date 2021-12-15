# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')

name1 = ["Frank", "Longbottom"]
name2 = ["Armando", "Dippet"]
name3 = ["Bill", "Weasley"]
name4 = ["Ariana", "Dumbledore"]
name5 = ["Zacharias", "Smith"]
name6 = ["Cuthbert", "Binns"]
name7 = ["Rowena", "Ravenclaw"]
name8 = ["Graham", "Montague"]
name9 = ["Petunia", "Dursley"]
name10 = ["Bathilda", "Bagshot"]
name11 = ["Horace", "Slughorn"]
name12 = ["Gregory", "Goyle"]
name13 = ["Ignotus", "Peverell"]
name14 = ["Charlie", "Weasley"]
name15 = ["Igor", "Karkaroff"]
name16 = ["Olympe", "Maxime"]
name17 = ["Susan", "Bones"]
name18 = ["Demelza", "Robins"]
name19 = ["Kingsley", "Shacklebolt"]

demoUser = User.create!(email: 'demo@email.com', password: 'password', fname: 'De', lname: 'Mo', bio: "I'm a Demo.", birthday: '2021-11-15')
user1 = User.create!(email: 'user1@email.com', password: 'password', fname: name1[0], lname: name1[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user2 = User.create!(email: 'user2@email.com', password: 'password', fname: name2[0], lname: name2[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user3 = User.create!(email: 'user3@email.com', password: 'password', fname: name3[0], lname: name3[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user4 = User.create!(email: 'user4@email.com', password: 'password', fname: name4[0], lname: name4[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user5 = User.create!(email: 'user5@email.com', password: 'password', fname: name5[0], lname: name5[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user6 = User.create!(email: 'user6@email.com', password: 'password', fname: name6[0], lname: name6[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user7 = User.create!(email: 'user7@email.com', password: 'password', fname: name7[0], lname: name7[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user8 = User.create!(email: 'user8@email.com', password: 'password', fname: name8[0], lname: name8[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user9 = User.create!(email: 'user9@email.com', password: 'password', fname: name9[0], lname: name9[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user10 = User.create!(email: 'user10@email.com', password: 'password', fname: name10[0], lname: name10[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user11 = User.create!(email: 'user11@email.com', password: 'password', fname: name11[0], lname: name11[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user12 = User.create!(email: 'user12@email.com', password: 'password', fname: name12[0], lname: name12[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user13 = User.create!(email: 'user13@e1ail.com', password: 'password', fname: name13[0], lname: name13[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user14 = User.create!(email: 'user14@email.com', password: 'password', fname: name14[0], lname: name14[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user15 = User.create!(email: 'user15@ema1l.com', password: 'password', fname: name15[0], lname: name15[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user16 = User.create!(email: 'user16@email.com', password: 'password', fname: name16[0], lname: name16[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user17 = User.create!(email: 'user17@email.com', password: 'password', fname: name17[0], lname: name17[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user18 = User.create!(email: 'user18@email.com', password: 'password', fname: name18[0], lname: name18[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))
user19 = User.create!(email: 'user19@email.com', password: 'password', fname: name19[0], lname: name19[1], bio: Faker::Movies::HarryPotter.unique.quote, birthday: String(Faker::Date.unique.birthday))

demoUser.photo.attach(io: File.open("app/assets/images/emojis/emoji.png"), filename: "emoji.png")
user1.photo.attach(io: File.open("app/assets/images/emojis/emoji1.png"), filename: "emoji1.png")
user2.photo.attach(io: File.open("app/assets/images/emojis/emoji2.png"), filename: "emoji2.png")
user3.photo.attach(io: File.open("app/assets/images/emojis/emoji3.png"), filename: "emoji3.png")
user4.photo.attach(io: File.open("app/assets/images/emojis/emoji4.jpg"), filename: "emoji4.jpg")
user5.photo.attach(io: File.open("app/assets/images/emojis/emoji5.png"), filename: "emoji5.png")
user6.photo.attach(io: File.open("app/assets/images/emojis/emoji6.jpg"), filename: "emoji6.jpg")
user7.photo.attach(io: File.open("app/assets/images/emojis/emoji7.png"), filename: "emoji7.png")
user8.photo.attach(io: File.open("app/assets/images/emojis/emoji8.png"), filename: "emoji8.png")
user9.photo.attach(io: File.open("app/assets/images/emojis/emoji9.jpeg"), filename: "emoji9.jpeg")
user10.photo.attach(io: File.open("app/assets/images/emojis/emoji10.png"), filename: "emoji10.png")
user11.photo.attach(io: File.open("app/assets/images/emojis/emoji11.png"), filename: "emoji11.png")
user12.photo.attach(io: File.open("app/assets/images/emojis/emoji12.png"), filename: "emoji12.png")
user13.photo.attach(io: File.open("app/assets/images/emojis/emoji13.png"), filename: "emoji13.png")
user14.photo.attach(io: File.open("app/assets/images/emojis/emoji14.png"), filename: "emoji14.png")
user15.photo.attach(io: File.open("app/assets/images/emojis/emoji15.png"), filename: "emoji15.png")
user16.photo.attach(io: File.open("app/assets/images/emojis/emoji16.png"), filename: "emoji16.png")
user17.photo.attach(io: File.open("app/assets/images/emojis/emoji17.jpeg"), filename: "emoji17.jpeg")
user18.photo.attach(io: File.open("app/assets/images/emojis/emoji18.jpeg"), filename: "emoji18.jpeg")
user19.photo.attach(io: File.open("app/assets/images/emojis/emoji19.jpeg"), filename: "emoji19.jpeg")