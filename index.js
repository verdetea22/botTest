const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

// command prefix 
const prefix = "!";


// responses to commands
client.on("messageCreate", function(message) {

    //responding to msgs that start with !
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    //understanding command from input, will convert to lowercase
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    // ping pong tests w latency time
    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }


    // greeting
    if (command === "hi" || command === "hello") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Hi cutie pie! This message had a latency of ${timeTaken}ms.`);
    }

    // isengard
    if (command === "" || command === "hello") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Hi cutie pie! This message had a latency of ${timeTaken}ms.`);
    }

    // help
    function helpCommand(args, commandBody) {
        if (commandBody === "!help") {

            if (args.length > 0) {
                command.channel.send("It looks like you might need help with " + args)
            } else {
                command.channel.send("I'm not sure what you need help with. Try `!help [topic]`")
            }
        };
    }



}); //END OF MESSAGES

// activity
client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity(" with knives", { ID: 2 })

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})



client.login(config.BOT_TOKEN);
