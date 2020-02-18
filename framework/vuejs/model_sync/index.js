Vue.component('my-input', {
  props: [ 'value' ],
  template: `<label>
      名前:
    </label>
    <input
      type="text" v-bind:value="value"
      v-on:input="$emit('update:value', $event.target.value)" />`
})

new Vue({
  el: '#app',
  data: {
    message: ''
  }
})
