require('dotenv').config();


//Instagram initialization
const { IgApiClient } = require('instagram-private-api');
const { sample } = require('lodash');

const ig = new IgApiClient();

ig.state.generateDevice(process.env.IG_USERNAME);

/**/
(async () => {
	await ig.simulate.preLoginFlow();
})()
/**/

//Discord initalization
const Discord = require("discord.js");
const clientDiscord = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

clientDiscord.on("ready", () => {
	console.log(`Logged in as ${clientDiscord.user.tag}!`) })
	clientDiscord.on("message", async msg => {
		if (msg.content === "gm") {
			
			const loggedInUser = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
			
		  const userFeed = ig.feed.user(loggedInUser.pk);
		  const myPostsFirstPage = await userFeed.items();
			//console.log(myPostsFirstPage[0]);
			msg.reply(`https://www.instagram.com/p/${myPostsFirstPage[0].code}`);
			
	}
})

clientDiscord.login(process.env.DISCORD_TOKEN);


