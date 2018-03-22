class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]
  # SIGN IN
  # POST /login
  # { username: "meryl", password: "mangoes"}
  def create

    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      payload = { user_id: @user.id}

      render json: {user: UserSerializer.new(@user), token: issue_token(payload) }
    else
      render json: {message: "SUCKS"}
    end

  end
end
