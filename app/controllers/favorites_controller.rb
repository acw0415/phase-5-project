class FavoritesController < ApplicationController
  # before_action :set_favorite, only: %i[ show create update destroy ]
  skip_before_action :authenticate_user ##this allows testing in postman ect without auth

  def index
    favorites = User.find(params[:id]).favorites
    render json: favorites, status: :ok
  end
  
  
  # GET /favorites/1 or /favorites/1.json
  def show 
    favorites = User.find(params[:id]).favorites
    render json: favorites, status: :ok
  end


  # POST /favorites or /favorites.json
  def create
    user_id = session[:user_id]
    puts user_id
    puts "kiko"
    # user_id = 2
    if user_id 
          databaseParams = favorite_params.merge!(user_id: user_id)
          favorites = Favorite.create!(databaseParams)
          render json: favorites, status: :created
    else
      puts "cannot create a favorite when not logged in"
    end

  end

  # UPDATE /favorites or /favorites.json
  def update
    power = find_power
    power.update!(power_params)
    render json: power, status: :accepted
  end

  # DELETE /favorites/1 or /favorites/1.json
  def destroy
    @favorite.destroy(params[:id])
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite
      @favorite = User.find(params[:id]).favorites
    end

    # Only allow a list of trusted parameters through.
    def favorite_params
      params.permit(:name, :currentLowestPrice, :note)
    end
end
