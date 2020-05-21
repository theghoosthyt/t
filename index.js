//---------------------------------------------------------------------
// Glitch 24/7
// Required to let uptime robot waving our bot.
//---------------------------------------------------------------------

const express = require("express");
const http = require("http");

const app = express();

app.use(express.json());

app.get("/", (_, res) => res.sendFile(__dirname + "/index.html"));
app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 224000);

// End of Glitch 24/7

const mineflayer = require("mineflayer");
const bot = mineflayer.createBot({
  host: "blazserver.aternos.me",
  port: 25565,
  username: "Bot",
  version: false
});

bot.on("whisper", function(username, message) {
  if (!username === "Bot2") return;
  bot.whisper("Bot2", "e");
      setTimeout(function() {
      bot.setControlState('forward', true)
      }, 1000);
      bot.setControlState('right', true)
});

bot.on("chat", async function(username, message) {
await bot.chat("blaž ti si nor");
  await new Promise(resolve => setTimeout(resolve, 2000));
})

bot.on("error", err => console.log(err));

console.log(`Bot started! Name: ${bot.username}!`);
