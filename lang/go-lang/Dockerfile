# GO勉強環境
FROM golang:latest

RUN mkdir /go/src/app

WORKDIR /go/src/app

# REPL & etc.
RUN go get github.com/motemen/gore/cmd/gore
RUN go get github.com/mdempsky/gocode
RUN go get github.com/k0kubun/pp

# x/tools
RUN go get golang.org/x/tools/cmd/...

# godoc
EXPOSE 6060/tcp
