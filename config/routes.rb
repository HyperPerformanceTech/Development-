Rails.application.routes.draw do
  root 'public_site#index'
  get '*path', to: 'public_site#index'
end
