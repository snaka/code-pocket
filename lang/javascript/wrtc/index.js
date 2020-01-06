const { RTCPeerConnection } = require('wrtc')

function getIPAddresses() {
  return new Promise(resolve => {
    const pc = new RTCPeerConnection({
      iceServers: [
        {
          urls: ["stun:stun.l.google.com:19302"]
        }
      ]
    })

    const rslt = []

    pc.addEventListener('icecandidate', e => {
      console.log('on icecandidate', e)
      pc.close()
      resolve(rslt)
    })
    pc.addEventListener('negotiationneeded', async () => {
      console.log('on negotiationneeded')
      const offer = await pc.createOffer()
      console.log('offer', offer)
      await pc.setLocalDescription(offer)
      console.log('negotiation finished')
    })

    pc.createDataChannel("")
  })
}

getIPAddresses().then(result => {
  console.log('result', result)
})
