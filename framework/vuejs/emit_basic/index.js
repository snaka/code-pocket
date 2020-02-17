Vue.component('my-counter', {
  props: [ 'step' ],
  template: `<button type="button" type="button" v-on:click="onclick">
              {{ step }}</button>`,
  methods: {
    onclick() {
      this.$emit('plus', Number(this.step))
    }
  }
})

new Vue({
  el: '#app',
  data: {
    current: 0
  },
  methods: {
    onplus(e) {
      this.current += e;
    }
  }
})
