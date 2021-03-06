Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users
  root 'dashboard#index'
  resources :tickets, :defaults => { :format => 'json' }
  resources :users, :defaults => { :format => 'json' }
  resources :departments, :defaults => { :format => 'json' }
end
