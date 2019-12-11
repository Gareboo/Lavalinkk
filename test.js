const Discord = require('discord.js');
const bot = new Discord.Client();
const Music = require('./index.js');
const music = new Music(bot, {
	lavalink: {
		"restnode": {
			"host": "localhost",
			"port": 3000,
			"password":"youshallnotpass"
		},
		"nodes": [
			{ "host": "localhost", "port": 3000, "region": "asia", "password": "youshallnotpass" }
		]
	},
	admins: ["455346525716086795"]
});

bot.login("NjUzOTkzMTg2ODQ2NTcyNTQ1.Xe_EzA.3SX4xf50ndeFNK_ETHBxpmUSvv8");