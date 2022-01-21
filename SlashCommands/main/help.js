const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    description: "Lists all commands",
    type: "CHAT_INPUT",
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args, ) => {
        const embed = new MessageEmbed()
        embed.setTitle("       Help")
        embed.addField("**/gemstone**", "Used to find what gemstone prices are.")
        embed.addField("**-ping**", "Check response to the API and the bot's ping")
        embed.addField("**/help**", "Used to see all commands")
        embed.addField("**/user**", "Used to get stats of a player. Leave `game` empty for main stats.\nDoesn't include arcade games.")
        embed.setColor("#420420")
        await interaction.followUp({ embeds: [embed] })
    }
}