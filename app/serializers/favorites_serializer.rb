class FavoritesSerializer < ActiveModel::Serializer
  attributes :id, :name, :currentLowestPrice, :note
  has_one :user
end
