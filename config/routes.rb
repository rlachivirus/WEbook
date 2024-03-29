Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :friends, only: [:index, :create, :destroy, :update]
    resources :posts, only: [:index, :create, :destroy, :update, :show]
    resources :comments, only: [:index, :show, :create, :destroy, :update]
    resources :likes, only: [:index, :create, :destroy, :show]
  end
end
