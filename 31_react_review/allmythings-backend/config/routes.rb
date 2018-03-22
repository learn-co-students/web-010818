Rails.application.routes.draw do
  resources :users
  post "/login", to: "auth#create"
  get "/profile", to: "users#profile"
  get "/messages", to: "messages#show"
  resources :books, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
