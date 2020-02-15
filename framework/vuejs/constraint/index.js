let app = new Vue({
  el: '#app',
  data: {
    author: {
      name: '山田'
    }
  },
  created: function() {
    let that = this;
    this.timer = setTimeout(function() {
      // that.author.name = "Yamada";
      // that.author.company = 'WINGSプロジェクト';
      Vue.set(that.author, 'company', 'WINGS Project');
    }, 3000);
  },
  beforeDestroy: function() {
    clearInterval(this.timer);
  }
});
