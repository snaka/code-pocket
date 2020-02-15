let app = new Vue({
  el: '#app',
  beforeCreate() {
    console.log('beforeCreate...');
  },
  created() {
    console.log('created...');
  },
  beforeMount() {
    console.log('beforerMount...');
  },
  mounted() {
    console.log('mounted...');
  },
  beforreUpdate() {
    console.log('beforreUpdate...');
  },
  updated() {
    console.log('updated...');
  },
  beforerDestroy() {
    console.log('beforerDestroy...');
  },
  destroyed() {
    console.log('destroyed...');
  }
});

setTimeout(function() {
  app.$destroy();
}, 300);
