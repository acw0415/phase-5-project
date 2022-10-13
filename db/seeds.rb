# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Favorite.destroy_all
Game.destroy_all

puts 'Making Games...'
5.times do
  Game.create(name: 'random name',
              currentLowestPrice: rand(1..15))
end
puts 'Making Favorites...'
1.times do
  Favorite.create(user_id: User.first.id,
                  game_id: Game.first.id)
end
