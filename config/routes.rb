Rails.application.routes.draw do
  resources :games, only: [:index, :show]
  get 'games/:gamename' => 'games#show'
  # resources :campers, only: [:index, :create, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
