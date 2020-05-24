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

//the config
const bot = mineflayer.createBot({ 
  host: "your server address here", //mc.hypixel.net for example
  port: 25565, //server port (leave it as is unless you know what you're doing!)
  username: "bot name here", //username only for cracked/offline mode servers, email for premium
  password: "your password here", //only for premium
  version: false //version of the server (false = auto detect)
});

bot.on("move", function() { //triggers when the bot moves
  
  bot.setControlState("jump", true); //continuously jumps
  setTimeout(() => { //sets a delay
  bot.setControlState("jump", false); //stops jumping
  }, 1000); //delay time
    
  setTimeout(() => { //sets a delay
     
  bot.setControlState("forward", true);
    
  setTimeout(() => { //sets a delay
        bot.setControlState("forward", false);
            //bot.setControlState("jump", true);
    }, 500); //delay time
    
    }, 1000); //delay time
    
  setTimeout(() => { //sets a delay

    bot.setControlState("back", true);
    
  setTimeout(() => { //sets a delay
          //bot.setControlState("jump", false);
        bot.setControlState("back", false);
    }, 500); //delay time
     
   }, 2000); //delay time
  
  setTimeout(() => { //sets a delay
     
  bot.setControlState("right", true);
    
  setTimeout(() => { //sets a delay
        bot.setControlState("right", false);
    }, 2000); //delay time
    
    }, 500);
    
  setTimeout(() => { //sets a delay

    bot.setControlState("left", true);
    
  setTimeout(() => { //sets a delay
          //bot.setControlState("jump", false);
        bot.setControlState("left", false);
    }, 2000); 
     
   }, 500);  
  
});
bot.on("end", () => bot()); //riggers when the bot leaves/gets kicked and create a new bot from the config

bot.on("error", err => console.log(err)); //triggers when there's an error and logs it into console
