const { App, ExpressReceiver, LogLevel } = require('@slack/bolt');
const serverlessExpress = require('@vendia/serverless-express');

const expressReceiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  processBeforeResponse: true
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: expressReceiver,
  logLevel: LogLevel.DEBUG,
});

app.message('hello', async ({ message, say }) => {
  await say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `Hey there <@${message.user}>!`
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Click Me"
          },
          "action_id": "button_click"
        }
      }
    ],
    text: `Hey there <@${message.user}>! (fallback)`
  });
});

app.action('button_click', async ({ body, ack, say }) => {
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
});

app.message('goodbye', async ({ message, say }) => {
  await say(`またねー :wave: <@${message.user}>`);
});

let lastMessageTS = null;

// handle web request
expressReceiver.router.get('/himitsu', async (req, res) => {
  console.log('req.query.ts: ', req.query.ts);
  res.send('ひみつだぜ!');
  response = await app.client.chat.postMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: "test",
    text: "ひみつのめっせーじ",
    thread_ts: req.query.ts,
  });
  console.log(response);
  lastMessageTS = response.message.ts;
});

module.exports.handler = serverlessExpress({
  app: expressReceiver.app
});
