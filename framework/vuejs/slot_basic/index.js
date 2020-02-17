Vue.component('my-hello', {
  props: [ 'yourName' ],
  template: `<div>こんにちは、<slot>ほげほげ</slot>さん!</div>`,
})

new Vue({
  el: '#app'
})
