Rails.application.routes.draw do
    resources :apartments
    # , only: [:index, :create, :destroy, :update]
    devise_for :users
    
    get '*path', :to => 'pages#root', constraints: ->(request){ request.format.html? }
    
    root :to => 'pages#index'
    
    
end
