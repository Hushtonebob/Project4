Rails.application.routes.draw do

  resources :users 

  post "/login", to: "sessions#create"


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
