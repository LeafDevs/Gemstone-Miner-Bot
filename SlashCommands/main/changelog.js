const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "changelog",
    description: "Bot's changelog",
    type: "CHAT_INPUT",
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args, ) => {
        const embed = new MessageEmbed()
        embed.setTitle("Changelog")
        embed.addField("**Whats New?**", "- Added /verify so u can verify your ign with the bot to get access to special commands!\n- Added /user to see what stats a player has on hypixel.")
        embed.addField("**Coming Soon!**", "- Solo Dungeon Bot (Frag Bot) \n- Bazaar Flipping Info \n - Bin/Auction Flipping\n - And More Planned.")
        embed.setColor("#5500FF")
        await interaction.followUp({ embeds: [embed] })
    }
}