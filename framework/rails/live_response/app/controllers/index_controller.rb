class IndexController < ApplicationController
  include ActionController::Live

  def index
  end

  def stream
    response.headers['Content-Type'] = 'text/plain'

    10.times do |i|
      response.stream.write("hello #{i}\n")
      sleep 0.2
    end
    response.stream.write("done\n")
    response.stream.close
  end
end
