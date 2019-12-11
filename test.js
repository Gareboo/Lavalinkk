const Discord = require('discord.js');
const bot = new Discord.Client();
const Music = require('./index.js');
const music = new Music(bot, {
	lavalink: {
		"restnode": {
			"host": "http://144.172.70.233:8080",
			"port": 3000,
			"password":"projectXbot85645"
		},
		"nodes": [
			{ "host": "http://144.172.70.233:8080", "port": 3000, "region": "asia", "password": "projectXbot85645" }
		]
	},
	admins: ["518731387591720961"]
});

bot.login("NjUzOTkzMTg2ODQ2NTcyNTQ1.Xe_EzA.3SX4xf50ndeFNK_ETHBxpmUSvv8");I