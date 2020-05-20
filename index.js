const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
  host: "blazserver.aternos.me",
  port: 25565,     
  username: "Bot", 
  version: false   
});
bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  bot.chat(message);
});
bot.on('error', err => console.log(err))
console.log("hi")
