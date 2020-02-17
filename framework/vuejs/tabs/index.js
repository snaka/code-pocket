Vue.component('tab-member', {
  template: `<div class='banner'>
    <h3>メンバー募集</h3>
    <p>member</p>
    <form>
      <input type="text"></input>
    </form>
    </div>`
})
Vue.component('tab-new', {
  template: `<div class='banner'>
    <h3>NEW</h3>
    <p>new</p>
    </div>`
})
Vue.component('tab-env', {
  template: `<div class='banner'>
    <h3>ENV</h3>
    <p>env</p>
    </div>`
})


new Vue({
  el: '#app',
  methods: {
    onclick(tab) {
      this.current = tab;
    }
  },
  computed: {
    tabNames() {
      return Object.keys(this.tabs);
    },
    currentTab() {
      return 'tab-' + this.current;
    }
  },
  data: {
    current: 'member',
    tabs: {
      'member': 'メンバー募集',
      'new': '新刊紹介',
      'env': '環境構築設定'
    }
  }
})
