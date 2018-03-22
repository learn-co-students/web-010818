class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods



  def logged_in?
    !!current_user
  end


  def current_user

    authenticate_or_request_with_http_token do |jwt_token, options|

      begin
        decoded_token = decode_token(jwt_token)
        if user_id = decoded_token[0]["user_id"]
          # then we have a user_id
          @user = User.find_by(id: user_id)
        else

        end
      rescue JWT::DecodeError

      end
    end
    # token = request.headers["Authorization"].split(" ")[1]
    # decoded_token = decode_token(token)
    # user_id = decoded_token[0]["user_id"]
    # @user = User.find_by(id: user_id)
  end

  def issue_token(payload)
    token = JWT.encode(payload, "florb", "HS256")
  end


  def decode_token(token)
    JWT.decode(token, "florb", true, { algorithm: "HS256"})
  end

end
