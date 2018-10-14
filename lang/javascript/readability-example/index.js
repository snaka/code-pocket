const read = require('readability-js')

read('http://howtonode.org/really-simple-file-uploads', (err, article) => {
  if (err) {
    console.log('ERR:', err)
    return
  }
  // main article
  console.log(article.content.text())
  // title
  console.log(article.title)
  // article html source
  // console.log(article.content.html())
})
