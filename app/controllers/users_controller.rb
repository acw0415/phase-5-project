class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    skip_before_action :authenticate_user, only: [:create]

    #POST "/signup"
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    #GET "/users"
    def index
        render json: User.all
    end

    #GET "/me"
    def show
        if current_user 
            render json: current_user, status: :ok 
        else 
            render json: "No current session stored", status: :unauthorized
        end
    end

    private
    
    def user_params
        params.permit(:email, :password, :password_confirmation)
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity 
    end
end
