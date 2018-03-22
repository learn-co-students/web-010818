class BooksController < ApplicationController
  def index
    # show that users books\
    @books = current_user.books
    render json: @books
  end
end
