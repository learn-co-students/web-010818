Rails.application.routes.draw do
  resources :users
  post "/login", to: "auth#create"
  get "/messages", to: "messages#show"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
