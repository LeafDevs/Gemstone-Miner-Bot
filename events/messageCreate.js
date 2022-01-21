const client = require("../index");


client.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith("-")
    )
        return; 
    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);

    if(message.guild.id === 766738677300723733) {
        if(message.channel.id === 908804261016645652) {
            if(message.author.bot) return;
            setTimeout(() => {
                message.delete()
            }, 25000);
        }
    }
    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(client, message, args);
});
