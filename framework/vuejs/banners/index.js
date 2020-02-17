Vue.component('banner-member', {
  template: `<div class='banner'>
    <h3>メンバー募集</h3>
    <p>member</p>
    </div>`
})
Vue.component('banner-new', {
  template: `<div class='banner'>
    <h3>NEW</h3>
    <p>new</p>
    </div>`
})
Vue.component('banner-env', {
  template: `<div class='banner'>
    <h3>ENV</h3>
    <p>env</p>
    </div>`
})

new Vue({
  el: '#app',
  created() {
    let that = this;
    this.interval = setInterval(function() {
      that.current = (that.current + 1) % that.components.length;
    }, 3000)
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  computed: {
    currentBanner() {
      return 'banner-' + this.components[this.current];
    }
  },
  data: {
    current: 0,
    components: [ 'member', 'new', 'env' ]
  }
})

