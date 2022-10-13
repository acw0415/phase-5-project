class FavoritesController < ApplicationController
  before_action :set_favorite, only: %i[ show create update destroy ]
 

  def index
    favorites = User.find(params[:id]).games
    render json: favorites, status: :ok
  end
  
  
  # GET /favorites/1 or /favorites/1.json
  def show 
    favorites = User.find(params[:id]).games
    render json: favorites, status: :ok 
  end


  # POST /favorites or /favorites.json
  def create
    user_id = session[:user_id]
    exists = Game.find_by(game_params) 
    # user_id = 2
    if !exists
          exists = Game.create!(game_params)
    end
          favorites = Favorite.where(user_id: user_id, game_id: exists.id).first_or_create
          render json: favorites, status: :created
    end

  # DELETE /favorites/1 or /favorites/1.json
  def destroy

    @favorite.where(game_id: params[:id]).destroy_all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite
      @favorite = User.find(session[:user_id]).favorites
    end

    # Only allow a list of trusted parameters through.
    def game_params
      params.permit(:name, :currentLowestPrice)
    end
end
