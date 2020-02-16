Vue.component('my-hello', {
  props: [ 'yourName' ],
  template: `<div>こんにちは、{{ yourName }}さん!</div>`
})

new Vue({
  el: '#app'
})
