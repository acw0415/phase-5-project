class GamesController < ApplicationController

  skip_before_action :authenticate_user, only: [:show]

  # GET /games or /games.json
  def index                         #/currently unused
    options = {
      'X-RapidAPI-Key': 'e034744f63msh6690c7038a5de12p1a21f4jsn9b4c1f96edd2',
      'X-RapidAPI-Host': 'game-prices.p.rapidapi.com'
    }
    response = RestClient.get 'https://game-prices.p.rapidapi.com/games?title=dying-light&region=us&offset=0&limit=30',
                              options

    render json: response, status: :ok
  end

  def show
    gameName = params[:id]
    options = {
      'X-RapidAPI-Key': 'e034744f63msh6690c7038a5de12p1a21f4jsn9b4c1f96edd2',
      'X-RapidAPI-Host': 'game-prices.p.rapidapi.com'
    }
    url = "https://game-prices.p.rapidapi.com/games?region=us&title=#{gameName}&offset=0&limit=30"
    puts url
    response = RestClient.get url,
                              options

    render json: response, status: :ok
  end

 

  private

  # Use callbacks to share common setup or constraints between actions.
  # def set_game
  #   @game = Game.find(params[:id])
  # end

  # Only allow a list of trusted parameters through.
  def game_params
    params.require(:game).permit(:name,:currentLowestPrice)
  end
end
