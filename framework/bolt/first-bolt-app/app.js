const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

const storage = {};

app.message(/.*/, async ({ message, say }) => {
  console.log(message);
  const lastPostedTime = storage[message.user];
  const currentTime = Date.now();
  if (lastPostedTime) {
    console.log('elapsed time since the last posted:', currentTime - lastPostedTime);
  }
  storage[message.user] = currentTime;
});

app.message('hello', async ({ message, say }) => {
  await say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `何？ <@${message.user}>`
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "ここをクリック"
          },
          "action_id": "button_click"
        }
      }
    ],
    text: `Hey there <@${message.user}>!`
  });
});

app.action('button_click', async ({ body, ack, say }) => {
  await ack();
  await say(`<@${body.user.id}> がクリック`);
});

app.command('/echo', async ({ command, ack, say }) => {
  await ack();
  await say(`${command.text}`);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('Bolt app is running!');
})();
