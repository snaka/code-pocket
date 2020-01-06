package main

import (
  "log"
  "github.com/pion/webrtc/v2"
)

func main() {
  config := webrtc.Configuration{
    ICEServers: []webrtc.ICEServer{
      {
        URLs: []string{"stun:stun.l.google.com:19302"},
      },
    },
  }

  // generate a new connection
  peerConnection, err := webrtc.NewPeerConnection(config)
  if err != nil {
    log.Fatal(err)
  }
  log.Println("peerConnection", peerConnection)

  peerConnection.OnICECandidate(func(c *webrtc.ICECandidate) {
    log.Println("on icecandidate", c)
    if c == nil {
      return
    }
  })

  dataChannel, err := peerConnection.CreateDataChannel("", nil)
  if err != nil {
    log.Fatal(err)
  }
  log.Println("dataChannel", dataChannel)

  offer, err := peerConnection.CreateOffer(nil)
  if err != nil {
    log.Fatal(err)
  }
  log.Println("offer", offer)

  if err = peerConnection.SetLocalDescription(offer); err != nil {
    log.Fatal(err)
  }

  // block forever
  select {}
}
