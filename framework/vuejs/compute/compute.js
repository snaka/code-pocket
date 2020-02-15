new Vue({
  el: '#app',
  data: {
    email: 'hoge@example.com'
  },
  computed: {
    localEmail: function() {
      return this.email.split('@')[0].toLowerCase();
    }
  }
})
