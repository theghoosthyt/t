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

bot.on("chat", function(username, message) {
  if (!username == "mihabozic321") return;

  if (message == "start") {
    bot.chat("Started!");
    bot.setControlState("jump", true);
    return;
  }
});

bot.on("error", err => console.log(err));

console.log(`Bot started! Name: ${bot.username}!`);
