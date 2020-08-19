Rails.application.routes.draw do
  root 'index#index'
  get 'stream' => 'index#stream'
end
