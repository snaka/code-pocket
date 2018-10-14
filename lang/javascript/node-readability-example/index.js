'use strict'
const read = require('node-readability')

read('http://howtonode.org/really-simple-file-uploads', function (err, article, meta) {
  // main article
  //console.log(article.content)
  console.log(article.textBody)
  // title
  console.log(article.title)

  // HTML source
  //console.log(article.html)
  // DOM
  //console.log(article.document)

  // response object from request lib
  //console.log(meta)

  article.close()
})

