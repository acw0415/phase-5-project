class GamesSerializer < ActiveModel::Serializer
  attributes :id, :name, :currentLowestPrice
end
