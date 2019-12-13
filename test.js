const http = require('http');
http.createServer().listen(process.env.PORT);
setTimeout(() => {
  const Discord = require('discord.js');
  const bot = new Discord.Client();
  const Music = require('./index.js');
  const music = new Music(bot, {
    lavalink: {
      "restnode": {
        "host": "music",
        "address": "http://localhost:4568",
        "port": 8080,
        "password":"projectXbot85645"
      },
      "nodes": [
        { "host": "music", "address": "ws://localhost:4568", "port": 8080, "region": "asia", "password": "projectXbot85645" }
      ]
    },
    admins: ["518731387591720961"]
  });

  bot.on('ready', () => {
    console.log('Hi');
  });

  bot.login("NjUzOTkzMTg2ODQ2NTcyNTQ1.Xe_EzA.3SX4xf50ndeFNK_ETHBxpmUSvv8");
}, 30000);