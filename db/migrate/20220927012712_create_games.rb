class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :availability
      t.string :currency
      t.integer :currentLowestPrice
      t.string :gameId
      t.string :name
      t.date :releaseDate
      t.string :type

      t.timestamps
    end
  end
end
