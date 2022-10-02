class FavoritesSerializer < ActiveModel::Serializer
  attributes :id, :name, :gameId
  has_one :user
end
