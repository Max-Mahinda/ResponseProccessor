Rails.application.routes.draw do
  # ... (other routes)

  namespace :api do
    resources :messages, only: [:index, :show]
    get "up" => "health#show", as: :health_check
  end
  
  # Defines the root path route ("/")
  # root "posts#index"
end

