const http = require('http');
http.createServer().listen(process.env.PORT);
const Discord = require('discord.js');
const bot = new Discord.Client();
const Music = require('./index.js');
const music = new Music(bot, {
	lavalink: {
		"restnode": {
			"host": "music",
      "address": "http://144.172.70.233:8080",
			"port": 8080,
			"password":"projectXbot85645"
		},
		"nodes": [
			{ "host": "music", "address": "ws://144.172.70.233:8080", "port": 8080, "region": "asia", "password": "projectXbot85645" }
		]
	},
	admins: ["518731387591720961"]
});


bot.login("NjUzOTkzMTg2ODQ2NTcyNTQ1.Xe_EzA.3SX4xf50ndeFNK_ETHBxpmUSvv8");