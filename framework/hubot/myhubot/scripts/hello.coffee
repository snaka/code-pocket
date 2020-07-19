module.exports = (robot) ->
  robot.hear(/hello/i, (res) ->
    console.log 'received!!'
    res.reply("hi")
  )
