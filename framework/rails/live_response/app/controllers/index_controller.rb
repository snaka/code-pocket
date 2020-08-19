class IndexController < ApplicationController
  include ActionController::Live

  def index
  end

  def stream
    headers['Last-Modified'] = '0'
    headers['ETag'] = '0'
    headers['Content-Type'] = 'text/plain'
    headers['X-Hoge'] = 10

    response.stream.write('')

    buffer = ""
    10.times do |i|
      buffer << "hello #{i}\n"
      sleep 0.5
    end
    buffer << "done\n"
    response.stream.write(buffer)
    response.stream.close
  end
end
