class GamesController < ApplicationController

  skip_before_action :authenticate_user, only: [:show]

  # GET /games or /games.json
  def index                         #/currently unused
    options = {
      'X-RapidAPI-Key': '32031538e6mshc7db306a60d2ca8p115933jsnb5ab8b1cd875',
      'X-RapidAPI-Host': 'game-prices.p.rapidapi.com'
    }
    response = RestClient.get 'https://game-prices.p.rapidapi.com/games?title=dying-light&region=us&offset=0&limit=50',
                              options

    render json: response, status: :ok
  end

  def show
    gameName = params[:id]
    options = {
      'X-RapidAPI-Key': '32031538e6mshc7db306a60d2ca8p115933jsnb5ab8b1cd875',
      'X-RapidAPI-Host': 'game-prices.p.rapidapi.com'
    }
    url = "https://game-prices.p.rapidapi.com/games?region=us&title=#{gameName}&offset=0&limit=50"
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
    params.require(:game).permit(:availability, :currency, :currentLowestPrice, :gameId, :name, :releaseDate, :type)
  end
end
