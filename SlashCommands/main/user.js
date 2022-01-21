const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    name: "user",
    description: "User stats on hypixel.",
    type: "CHAT_INPUT",
    options: [
        {
            name: "username",
            description: "Username of targeted player",
            type: 3,
            required: true,
         }//,
        // {
        //     name: "game",
        //     description: "Name of the game you want to check stats for",
        //     type: 3,
        //     required: false,
        // }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args, ) => {
        const options = interaction.options._hoistedOptions;
        // const game = options. find((e) => e.name === "game");
        const ign = options. find((e) => e.name === "username");
        const name = ign.value
        async function getStats() {
                const response = await fetch("https://api.slothpixel.me/api/players/" + name);
                const data = await response.json()
                // if(!game) {
                const { level, exp, karma, achievement_points, rank } = data;
                const e = new MessageEmbed()
                if(level === undefined) {
                    const em = new MessageEmbed()
                    em.setTitle("Error")
                    em.addField("Error obtaining stats from API 'Invalid Username/UUID'", "Make sure you spelled the name correctly!")
                    em.setColor("RED")
                    em.setFooter("This could be caused by an API Issue. Please try again in a moment.")
                    return interaction.followUp({ embeds: [em] })
                }
                e.setTitle(name + "'s Stats")
                e.addField("Level", `${level}`, true)
                e.addField("Experience", `${exp}`, true)
                e.addField("Karma", `${karma}`, true)
                e.addField("Achievement Points", `${achievement_points}`, true)
                if(rank === null) {
                    e.addField("Rank", "None",true)
                    e.setColor("#757575")
                }
                if(rank === "VIP") {
                    e.addField("Rank", "VIP",true)
                    e.setColor("#0FFF00")
                }
                if(rank === "VIP_PLUS") {
                    e.addField("Rank", "VIP+",true)
                    e.setColor("#0DD500")
                }
                if(rank === "MVP") {
                    e.addField("Rank", "MVP",true)
                    e.setColor("#00FFF7")
                }
                if(rank === "MVP_PLUS") {
                    e.addField("Rank", "MVP+",true)
                    e.setColor("#1DDACC")
                }
                if(rank === 'MVP_PLUS_PLUS') {
                    e.addField("Rank", "MVP++",true)
                    e.setColor("#FFAA00")
                }
                if(rank === 'YOUTUBER') {
                    e.addField("Rank", "Youtuber",true)
                    e.setColor("#EE2626")
                }
                if(rank === 'ADMIN') {
                    e.addField("Rank", "Admin",true)
                    e.setColor("#F80000")
                }
                if(rank === 'GAME_MASTER') {
                    e.addField("Rank", "Game Master",true)
                    e.setColor("#0D7C00")
                }
                if(rank === 'OWNER') {
                    e.addField("Rank", "Owner",true)
                    e.setColor("#FF0000")
                }
                await interaction.followUp({ embeds: [e] })
                    
               //}
        }
        getStats()
    }
}