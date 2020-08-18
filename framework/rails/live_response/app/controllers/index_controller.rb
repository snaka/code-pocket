class IndexController < ApplicationController
  include ActionController::Live

  def stream
    response.headers['Content-Type'] = 'text/event-stream'

    10.times do |i|
      response.stream.write("event: message\n")
      response.stream.write("data: Hello Hoge #{i}\n\n")
      sleep 1
    end

    response.stream.write("event: done\n")
    response.stream.write("data: done\n\n")
  ensure
    response.stream.close
  end
end
