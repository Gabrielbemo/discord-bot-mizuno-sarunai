const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", async () => {
    console.log(`Mizuno acordo, e tem ${client.users.cache.size} pessoas`);
    client.user.setActivity(`alo`)
});

client.on("guildCreate", guild => {
    console.log(`mizuno entro no server`);
});

client.on("guildDelete", guild => {
    console.log(`mizuno saiu do server`);
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    if (command === "help") {
        const m = await message.channel.send(`help`);
    }

    if (command === "ping") {
        const m = await message.channel.send(`Ping?`);
        m.edit(`Pong! a latência da mizuno é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${client.ws.ping}ms`);
    }
});

client.login(config.token);