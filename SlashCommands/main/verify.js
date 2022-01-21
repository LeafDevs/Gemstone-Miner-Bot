const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const profileModel = require("../../models/profileSchema")
const mongoose = require("mongoose")


module.exports = {
    name: "verify",
    description: "verify your minecraft with discord.",
    type: "CHAT_INPUT",
    options: [
        {
            name: "username",
            description: "Username that your discord is linked to (hypixel)",
            type: 3,
            required: true
        }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args, ) => {
        const options = interaction.options._hoistedOptions;
        const ign = options. find((e) => e.name === "username");
        const name = ign.value
        const resp = await fetch("https://api.slothpixel.me/api/players/" + name)
        const data = await resp.json()
        const { links } = data;
        const discord = links.DISCORD;
        if(discord === interaction.user.tag) {
            let profileData;
            try {
                profileData = await profileModel.findOne({ userID: interaction.user.id });
            } catch (err) {
                console.log(err);
            }
            if(profileData) {
                const e = new MessageEmbed()
                e.setTitle("Error With Verifying.")
                e.addField("Couldn't verified as `" + name + "`!", "You are already verified! Please contact the bot owner to be able to reverify!")
                e.setColor("RED")
                return interaction.followUp({ embeds: [e] })
            }
            let profile = await profileModel.create({
                userID: interaction.user.id,
                Username: name
            })
            profile.save()
            const e = new MessageEmbed()
            e.setTitle("Successfully Verified Username!")
            e.addField("Successfully verified as `" + name + "`!", "Since you verified you have been given access to special commands like /selloffer!")
            e.setColor("GREEN")
            return interaction.followUp({ embeds: [e] })

        } else {
            const e = new MessageEmbed()
            e.setTitle("Error With Verifying.")
            e.addField("Couldn't verified as `" + name + "`!", "Failed to verify you because your discord isnt set what is set to the ign!")
            e.setColor("RED")
            return interaction.followUp({ embeds: [e] })
        }
    }
}