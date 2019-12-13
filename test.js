const http = require('http');
http.createServer().listen(process.env.PORT);
  const Discord = require('discord.js');
  const bot = new Discord.Client();
  const Music = require('./index.js');
  const music = new Music(bot, {
    lavalink: {
      "restnode": {
        "host": "music",
        "address": "http://bluspring-uranus-lavalink.glitch.me",
        "port": 3000,
        "password":"youshallnotpassWORD"
      },
      "nodes": [
        { "host": "music", "address": "ws://bluspring-uranus-lavalink.glitch.me", "port": 3000, "region": "asia", "password": "youshallnotpassWORD" }
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
            name: 'launched soon',
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"
        }
    });
});


  bot.login("NjUzOTkzMTg2ODQ2NTcyNTQ1.Xe_EzA.3SX4xf50ndeFNK_ETHBxpmUSvv8");