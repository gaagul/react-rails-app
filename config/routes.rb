Rails.application.routes.draw do
  namespace :api do
    resources :direct_uploads, only: [:create]
  end

  root "home#index"

  get "*path", to: "home#index", via: :all, constraints: -> (request) do
    request.path.exclude?("/rails") && !request.xhr? && request.format.html?
  end
end
