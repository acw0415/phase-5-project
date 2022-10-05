Rails.application.routes.draw do
  resources :favorites
  resources :users
  resources :games, only: [:index, :show]
  get 'games/:gamename' => 'games#show'

  post "/signup", to: "users#create"

  get "/me", to: "users#show"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  get "/favorites", to: "favorites#show"

  post "/favorites", to: "favorites#create"

  delete "/favorites", to: "favorites#destroy"

end
