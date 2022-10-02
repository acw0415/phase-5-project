class Favorite < ApplicationRecord
   has_many :games
   has_one :user

end
