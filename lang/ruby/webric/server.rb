require 'webrick'

srv = WEBrick::HTTPServer.new({ Port: 8080 })

srv.mount_proc '/' do |req, res|
  res.chunked = true
  res.body = 'hello'
end

srv.start
