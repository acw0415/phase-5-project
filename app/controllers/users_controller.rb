class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  skip_before_action :authenticate_user, only: [:create, :index]

  # POST "/signup"
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # GET "/users"
  def index
    render json: User.all
  end

  # GET "/me"
  def show
    render json: current_user, status: :ok
  end

  def update
    current_user.update!(change_email_params)
    render json: current_user, status: :accepted
  end

  def destroy
    current_user.destroy
  end

  private
  def change_email_params
    params.permit(:email)
  end

  def user_params
    params.permit(:email, :password)
  end

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
