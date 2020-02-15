new Vue({
  el: '#app',
  data: {
    current: new Date()
  },
  created: function() {
    console.log('created');
    let that = this;
    this.timer = setInterval(function() {
      console.log('interval');
      that.current = new Date();
    }, 1000);
  },
  beforeDestroy: function() {
    console.log('beforeDestroy');
    crearInterval(this.timer);
  }
})
