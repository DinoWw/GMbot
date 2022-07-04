require('dotenv').config();


//Instagram initialization
const Instagram = require('instagram-web-api')
const { username, password } = process.env
 
const clientinstagram = new Instagram({ username, password })
 
;(async () => {
  await clientinstagram.login()
  const profileInstagram = await clientinstagram.getProfile()
 
  console.log(profileInstagram)
})()




//Discord initalization
const Discord = require("discord.js");
const clientDiscord = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

clientDiscord.on("ready", () => {
	console.log(`Logged in as ${clientDiscord.user.tag}!`) })
	clientDiscord.on("message", msg => {
		if (msg.content === "ping") {
			await client.getPhotosByUsername({ username: 'unicorn' , 'first': 1})
	}
})

clientDiscord.login(process.env.DISCORD_TOKEN);


