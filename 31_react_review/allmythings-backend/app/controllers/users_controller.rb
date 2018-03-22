class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  # POST /users
  #
  # { username: "beef", password: "steak"}
  def create
    @user = User.new(username: params[:username], password: params[:password])
    if @user.save
      # SUCCESSFUL CREATION
      payload = { user_id: @user.id}
      render json: {user: UserSerializer.new(@user), token: issue_token(payload)}
    else
      render json: {message: "Sucks to suck"}
    end
  end

  def profile 
    render json: current_user
  end 

end

#eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1fQ.gvq78yb7TtANy09T514Q9u1AvFFDYNCXsh7wuKXsQ74
#eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0fQ.OfptzoJWsQMhHtDIsA2CFL5UMLHW5FZxvXHefrfA5nY
