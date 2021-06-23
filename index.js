const Discord = require ("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", (msg) => {
	if(!msg.guild) return;
	if(msg.author.bot) return;
  
const ownerID = "PutYourID";
const prefix = ">";

let args = msg.content.slice(prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();


if (cmd === "ping") {
   msg.channel.send(`Ping ${client.ws.ping} !`);
};



if (cmd === "commands") {
   const exampleEmbed = new Discord.MessageEmbed()
   .setColor("BLUE")
   .setTitle("Commands list")
   .setDescription(`Usage ${prefix}command

${prefix}ping | Check the bot ping
${prefix}info | Bot info`)
   .setFooter("My prefix is >");
   msg.channel.send(exampleEmbed);
};

if (cmd === "info") {
		msg.channel.send(`Owner: ${client.users.cache.get(ownerID).tag} `);
};
})

client.login(process.env.TOKEN)
