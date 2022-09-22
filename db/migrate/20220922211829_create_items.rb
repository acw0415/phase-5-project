class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :availability
      t.string :currency
      t.integer :currentLowestPrice
      t.string :id
      t.string :name
      t.date :releaseDate

      t.timestamps
    end
  end
end
