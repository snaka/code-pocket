Vue.component('my-loading', {
  pros: [ 'type' ],
  render: function(h) {
    switch (this.type) {
      case 'text':
        return h('p', '...Now Loading...')
      case 'image':
        return h('img', {
          attrs: {
            src: 'loading.gif',
            alt: 'loading'
          }
        })
      default:
        console.
    }
  }
})
