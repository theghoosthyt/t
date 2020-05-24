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

bot.on("move", () => {
  
  bot.setControlState("jump", true);
  
  setTimeout(() => {
     
  bot.setControlState("forward", true);
    
    setTimeout(function() {
        bot.setControlState("forward", false);
            //bot.setControlState("jump", true);
    }, 1000);    
    
    }, 2000);
    
   setTimeout(() => {

    bot.setControlState("back", true);
    
    setTimeout(() => {
          //bot.setControlState("jump", false);
        bot.setControlState("back", false);
    },1000); 
     
   }, 2000);  
  
   setTimeout(() => {
     
  bot.setControlState("right", true);
    
    setTimeout(() => {
        bot.setControlState("right", false);
            //bot.setControlState("jump", true);
    }, 1000);    
    
    }, 2000);
    
   setTimeout(() => {

   bot.setControlState("left", true);
    
    setTimeout(() => {
          //bot.setControlState("jump", false);
        bot.setControlState("left", false);
    }, 1000); 
     
   }, 2000);  
  
});

bot.on("end", () => {
  bot();
});

bot.on("error", err => console.log(err));

console.log(`Bot started! Name: ${bot.username}!`);
