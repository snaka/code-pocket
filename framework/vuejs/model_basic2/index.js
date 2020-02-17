Vue.component('my-input', {
  props: [ 'value' ],
  template: `<label>
    名前:
    <input type="text" v-model="internalValue" />
    </label>`,
  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        if (this.value !== newValue) {
          this.$emit('input', newValue);
        }
      }
    }
  }
});

new Vue({
  el: '#app',
  data: {
    message: ''
  }
})
