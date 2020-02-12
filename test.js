const http = require('http');
http.createServer().listen(process.env.PORT);
  const Discord = require('discord.js');
  const bot = new Discord.Client();
  const Music = require('./index.js');
  const music = new Music(bot, {
    lavalink: {
      "restnode": {
        "host": "music",
        "address": "https://frederikam-lavalink-4.glitch.me",
        "port": 3000,
        "password": "raj"
      },
      "nodes": [
        { "host": "music", "address": "https://frederikam-lavalink-4.glitch.me", "port": 3000, "region": "asia", "password": "raj" }
      ]
    },
    admins: ["518731387591720961"]
  });

  bot.on('ready', () => {
    console.log('Hi');

  });
bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'launching soon',
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"
        }
    });
});


  bot.login("NjM2OTI4Njc1MDgxNjE3NDA4.XkP03w.lsghf1s67jxNDbaCxIIOPrK3Yd4");