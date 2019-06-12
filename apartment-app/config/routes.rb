Rails.application.routes.draw do
  resources :apartments
    devise_for :users
    
    root :to => 'pages#index'
end
