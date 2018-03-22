class MessagesController < ApplicationController
  # before_action :current_user, only: [:show]

  def show
    if logged_in?
        # current_user.messages
        render json: {message: "WOOOOO"}
    else
      render json: {message: "Not Authorized"}
    end
  end



end
