const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


module.exports = {
    name: "gemstone",
    description: "Lists all T1 gemstones and their prices.",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "gem",
            description: "name of the gemstone to get data on all of that type of gemstone.",
            type: 3,
            required: true,
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
        const gemstone = options. find((e) => e.name === "gem");
        if(interaction.guild.id === 766738677300723733) {
            if(interaction.channel.id !== 908804261016645652) {
                return interaction.followUp(`Please use <#908804261016645652> to use this command!`);
            }
        }
        const g = gemstone.value.toLowerCase() 
        async function getGemPrices() {
            if(g === "jasper") {
                const response = await fetch("https://api.slothpixel.me/api/skyblock/bazaar")
                const d = await response.json()
                const { FLAWED_JASPER_GEM, FINE_JASPER_GEM, PERFECT_JASPER_GEM, ROUGH_JASPER_GEM, FLAWLESS_JASPER_GEM } = d;
                const Jaspert1 = ROUGH_JASPER_GEM.quick_status.sellPrice.toFixed(2)
                const Jaspert2 = FLAWED_JASPER_GEM.quick_status.sellPrice.toFixed(2)
                const Jaspert3 = FINE_JASPER_GEM.quick_status.sellPrice.toFixed(2)
                const Jaspert4 = FLAWLESS_JASPER_GEM.quick_status.sellPrice.toFixed(2)
                const Jaspert5 = PERFECT_JASPER_GEM.quick_status.sellPrice.toFixed(2)
                const Jaspert1b = ROUGH_JASPER_GEM.quick_status.buyPrice.toFixed(2)
                const Jaspert2b = FLAWED_JASPER_GEM.quick_status.buyPrice.toFixed(2)
                const Jaspert3b = FINE_JASPER_GEM.quick_status.buyPrice.toFixed(2)
                const Jaspert4b = FLAWLESS_JASPER_GEM.quick_status.buyPrice.toFixed(2)
                const Jaspert5b = PERFECT_JASPER_GEM.quick_status.buyPrice.toFixed(2)
                const embed = new MessageEmbed()
                embed.setTitle("<:Jasper:908719954105335878> Jasper Gemstone Data <:Jasper:908719954105335878>")
                embed.setFooter("Made By oLeaf", "https://i.imgur.com/b1D8Ekx.gif")
                embed.setAuthor(`Ran By: ${interaction.user.username}`, interaction.user.displayAvatarURL)
                embed.addField("Rough Jasper Gemstone:", `Buy Price: ${Jaspert1b}, Sell Price: ${Jaspert1}`)
                embed.addField("Flawed Jasper Gemstone:", `Buy Price: ${Jaspert2b}, Sell Price: ${Jaspert2}`)
                embed.addField("Fine Jasper Gemstone:", `Buy Price: ${Jaspert3b}, Sell Price: ${Jaspert3}`)
                embed.addField("Flawless Jasper Gemstone:", `Buy Price: ${Jaspert4b}, Sell Price: ${Jaspert4}`)
                embed.addField("Perfect Jasper Gemstone:", `Buy Price: ${Jaspert5b}, Sell Price: ${Jaspert5}`)
                embed.setColor("LUMINOUS_VIVID_PINK")
                interaction.followUp({ embeds: [embed] })
                return;
            }
            if(g === "ruby") {
                const response = await fetch("https://api.slothpixel.me/api/skyblock/bazaar")
                const d = await response.json()
                const { FLAWED_RUBY_GEM, FINE_RUBY_GEM, PERFECT_RUBY_GEM, ROUGH_RUBY_GEM, FLAWLESS_RUBY_GEM } = d
                const RUBYt1 = ROUGH_RUBY_GEM.quick_status.sellPrice.toFixed(2)
                const RUBYt2 = FLAWED_RUBY_GEM.quick_status.sellPrice.toFixed(2)
                const RUBYt3 = FINE_RUBY_GEM.quick_status.sellPrice.toFixed(2)
                const RUBYt4 = FLAWLESS_RUBY_GEM.quick_status.sellPrice.toFixed(2)
                const RUBYt5 = PERFECT_RUBY_GEM.quick_status.sellPrice.toFixed(2)
                const RUBYt1b = ROUGH_RUBY_GEM.quick_status.buyPrice.toFixed(2)
                const RUBYt2b = FLAWED_RUBY_GEM.quick_status.buyPrice.toFixed(2)
                const RUBYt3b = FINE_RUBY_GEM.quick_status.buyPrice.toFixed(2)
                const RUBYt4b = FLAWLESS_RUBY_GEM.quick_status.buyPrice.toFixed(2)
                const RUBYt5b = PERFECT_RUBY_GEM.quick_status.buyPrice.toFixed(2)
                const embed = new MessageEmbed()
                embed.setTitle("<:Ruby:908719538231734302> Ruby Gemstone Data <:Ruby:908719538231734302>")
                embed.setFooter("Made By oLeaf", "https://i.imgur.com/b1D8Ekx.gif")
                embed.setAuthor(`Ran By: ${interaction.user.username}`, interaction.user.displayAvatarURL)
                embed.addField("Rough Ruby Gemstone:", `Buy Price: ${RUBYt1b}, Sell Price: ${RUBYt1}`)
                embed.addField("Flawed Ruby Gemstone:", `Buy Price: ${RUBYt2b}, Sell Price: ${RUBYt2}`)
                embed.addField("Fine Ruby Gemstone:", `Buy Price: ${RUBYt3b}, Sell Price: ${RUBYt3}`)
                embed.addField("Flawless Ruby Gemstone:", `Buy Price: ${RUBYt4b}, Sell Price: ${RUBYt4}`)
                embed.addField("Perfect Ruby Gemstone:", `Buy Price: ${RUBYt5b}, Sell Price: ${RUBYt5}`)
                embed.setColor("RED")
                interaction.followUp({ embeds: [embed] })
                return;
            }
            if(g === "amethyst") {
                const response = await fetch("https://api.slothpixel.me/api/skyblock/bazaar")
                const d = await response.json()
                const { FLAWED_AMETHYST_GEM, FINE_AMETHYST_GEM, PERFECT_AMETHYST_GEM, ROUGH_AMETHYST_GEM, FLAWLESS_AMETHYST_GEM } = d
                const Amethystt1 = ROUGH_AMETHYST_GEM.quick_status.sellPrice.toFixed(2)
                const Amethystt2 = FLAWED_AMETHYST_GEM.quick_status.sellPrice.toFixed(2)
                const Amethystt3 = FINE_AMETHYST_GEM.quick_status.sellPrice.toFixed(2)
                const Amethystt4 = FLAWLESS_AMETHYST_GEM.quick_status.sellPrice.toFixed(2)
                const Amethystt5 = PERFECT_AMETHYST_GEM.quick_status.sellPrice.toFixed(2)
                const Amethystt1b = ROUGH_AMETHYST_GEM.quick_status.buyPrice.toFixed(2)
                const Amethystt2b = FLAWED_AMETHYST_GEM.quick_status.buyPrice.toFixed(2)
                const Amethystt3b = FINE_AMETHYST_GEM.quick_status.buyPrice.toFixed(2)
                const Amethystt4b = FLAWLESS_AMETHYST_GEM.quick_status.buyPrice.toFixed(2)
                const Amethystt5b = PERFECT_AMETHYST_GEM.quick_status.buyPrice.toFixed(2)
                const embed = new MessageEmbed()
                embed.setTitle("<:Amethyst:908719954096967700> Amethyst Gemstone Data <:Amethyst:908719954096967700>")
                embed.setFooter("Made By oLeaf", "https://i.imgur.com/b1D8Ekx.gif")
                embed.setAuthor(`Ran By: ${interaction.user.username}`, interaction.user.displayAvatarURL)
                embed.addField("Rough Amethyst Gemstone:", `Buy Price: ${Amethystt1b}, Sell Price: ${Amethystt1}`)
                embed.addField("Flawed Amethyst Gemstone:", `Buy Price: ${Amethystt2b}, Sell Price: ${Amethystt2}`)
                embed.addField("Fine Amethyst Gemstone:", `Buy Price: ${Amethystt3b}, Sell Price: ${Amethystt3}`)
                embed.addField("Flawless Amethyst Gemstone:", `Buy Price: ${Amethystt4b}, Sell Price: ${Amethystt4}`)
                embed.addField("Perfect Amethyst Gemstone:", `Buy Price: ${Amethystt5b}, Sell Price: ${Amethystt5}`)
                embed.setColor("PURPLE")
                interaction.followUp({ embeds: [embed] })
                return;
            }
            if(g === "jade") {
                const response = await fetch("https://api.slothpixel.me/api/skyblock/bazaar")
                const d = await response.json()
                const { FLAWED_JADE_GEM, FINE_JADE_GEM, PERFECT_JADE_GEM, ROUGH_JADE_GEM, FLAWLESS_JADE_GEM } = d
                const JADEt1 = ROUGH_JADE_GEM.quick_status.sellPrice.toFixed(2)
                const JADEt2 = FLAWED_JADE_GEM.quick_status.sellPrice.toFixed(2)
                const JADEt3 = FINE_JADE_GEM.quick_status.sellPrice.toFixed(2)
                const JADEt4 = FLAWLESS_JADE_GEM.quick_status.sellPrice.toFixed(2)
                const JADEt5 = PERFECT_JADE_GEM.quick_status.sellPrice.toFixed(2)
                const JADEt1b = ROUGH_JADE_GEM.quick_status.buyPrice.toFixed(2)
                const JADEt2b = FLAWED_JADE_GEM.quick_status.buyPrice.toFixed(2)
                const JADEt3b = FINE_JADE_GEM.quick_status.buyPrice.toFixed(2)
                const JADEt4b = FLAWLESS_JADE_GEM.quick_status.buyPrice.toFixed(2)
                const JADEt5b = PERFECT_JADE_GEM.quick_status.buyPrice.toFixed(2)
                const embed = new MessageEmbed()
                embed.setTitle("<:Jade:908719954096951356> Jade Gemstone Data <:Jade:908719954096951356>")
                embed.setFooter("Made By oLeaf", "https://i.imgur.com/b1D8Ekx.gif")
                embed.setAuthor(`Ran By: ${interaction.user.username}`, interaction.user.displayAvatarURL)
                embed.addField("Rough Jade Gemstone:", `Buy Price: ${JADEt1b}, Sell Price: ${JADEt1}`)
                embed.addField("Flawed Jade Gemstone:", `Buy Price: ${JADEt2b}, Sell Price: ${JADEt2}`)
                embed.addField("Fine Jade Gemstone:", `Buy Price: ${JADEt3b}, Sell Price: ${JADEt3}`)
                embed.addField("Flawless Jade Gemstone:", `Buy Price: ${JADEt4b}, Sell Price: ${JADEt4}`)
                embed.addField("Perfect Jade Gemstone:", `Buy Price: ${JADEt5b}, Sell Price: ${JADEt5}`)
                embed.setColor("GREEN")
                interaction.followUp({ embeds: [embed] })
                return;
            }
            if(g === "sapphire") {
                const response = await fetch("https://api.slothpixel.me/api/skyblock/bazaar")
                const d = await response.json()
                const { FLAWED_SAPPHIRE_GEM, FINE_SAPPHIRE_GEM, PERFECT_SAPPHIRE_GEM, ROUGH_SAPPHIRE_GEM, FLAWLESS_SAPPHIRE_GEM } = d
                const Sapphiret1 = ROUGH_SAPPHIRE_GEM.quick_status.sellPrice.toFixed(2)
                const Sapphiret2 = FLAWED_SAPPHIRE_GEM.quick_status.sellPrice.toFixed(2)
                const Sapphiret3 = FINE_SAPPHIRE_GEM.quick_status.sellPrice.toFixed(2)
                const Sapphiret4 = FLAWLESS_SAPPHIRE_GEM.quick_status.sellPrice.toFixed(2)
                const Sapphiret5 = PERFECT_SAPPHIRE_GEM.quick_status.sellPrice.toFixed(2)
                const Sapphiret1b = ROUGH_SAPPHIRE_GEM.quick_status.buyPrice.toFixed(2)
                const Sapphiret2b = FLAWED_SAPPHIRE_GEM.quick_status.buyPrice.toFixed(2)
                const Sapphiret3b = FINE_SAPPHIRE_GEM.quick_status.buyPrice.toFixed(2)
                const Sapphiret4b = FLAWLESS_SAPPHIRE_GEM.quick_status.buyPrice.toFixed(2)
                const Sapphiret5b = PERFECT_SAPPHIRE_GEM.quick_status.buyPrice.toFixed(2)
                const embed = new MessageEmbed()
                embed.setTitle("<:Sapphire:908719764472479795> Sapphire Gemstone Data <:Sapphire:908719764472479795>")
                embed.setFooter("Made By oLeaf", "https://i.imgur.com/b1D8Ekx.gif")
                embed.setAuthor(`Ran By: ${interaction.user.username}`, interaction.user.displayAvatarURL)
                embed.addField("Rough Sapphire Gemstone:", `Buy Price: ${Sapphiret1b}, Sell Price: ${Sapphiret1}`)
                embed.addField("Flawed Sapphire Gemstone:", `Buy Price: ${Sapphiret2b}, Sell Price: ${Sapphiret2}`)
                embed.addField("Fine Sapphire Gemstone:", `Buy Price: ${Sapphiret3b}, Sell Price: ${Sapphiret3}`)
                embed.addField("Flawless Sapphire Gemstone:", `Buy Price: ${Sapphiret4b}, Sell Price: ${Sapphiret4}`)
                embed.addField("Perfect Sapphire Gemstone:", `Buy Price: ${Sapphiret5b}, Sell Price: ${Sapphiret5}`)
                embed.setColor("BLUE")
                interaction.followUp({ embeds: [embed] })
                return;
            }
            if(g === "topaz") {
                const response = await fetch("https://api.slothpixel.me/api/skyblock/bazaar")
                const d = await response.json()
                const { FLAWED_TOPAZ_GEM, FINE_TOPAZ_GEM, PERFECT_TOPAZ_GEM, ROUGH_TOPAZ_GEM, FLAWLESS_TOPAZ_GEM } = d
                const Topazt1 = ROUGH_TOPAZ_GEM.quick_status.sellPrice.toFixed(2)
                const Topazt2 = FLAWED_TOPAZ_GEM.quick_status.sellPrice.toFixed(2)
                const Topazt3 = FINE_TOPAZ_GEM.quick_status.sellPrice.toFixed(2)
                const Topazt4 = FLAWLESS_TOPAZ_GEM.quick_status.sellPrice.toFixed(2)
                const Topazt5 = PERFECT_TOPAZ_GEM.quick_status.sellPrice.toFixed(2)
                const Topazt1b = ROUGH_TOPAZ_GEM.quick_status.buyPrice.toFixed(2)
                const Topazt2b = FLAWED_TOPAZ_GEM.quick_status.buyPrice.toFixed(2)
                const Topazt3b = FINE_TOPAZ_GEM.quick_status.buyPrice.toFixed(2)
                const Topazt4b = FLAWLESS_TOPAZ_GEM.quick_status.buyPrice.toFixed(2)
                const Topazt5b = PERFECT_TOPAZ_GEM.quick_status.buyPrice.toFixed(2)
                const embed = new MessageEmbed()
                embed.setTitle("<:Topaz:908720229734043718> Topaz Gemstone Data <:Topaz:908720229734043718>")
                embed.setFooter("Made By oLeaf", "https://i.imgur.com/b1D8Ekx.gif")
                embed.setAuthor(`Ran By: ${interaction.user.username}`, interaction.user.displayAvatarURL)
                embed.addField("Rough Topaz Gemstone:", `Buy Price: ${Topazt1b}, Sell Price: ${Topazt1}`)
                embed.addField("Flawed Topaz Gemstone:", `Buy Price: ${Topazt2b}, Sell Price: ${Topazt2}`)
                embed.addField("Fine Topaz Gemstone:", `Buy Price: ${Topazt3b}, Sell Price: ${Topazt3}`)
                embed.addField("Flawless Topaz Gemstone:", `Buy Price: ${Topazt4b}, Sell Price: ${Topazt4}`)
                embed.addField("Perfect Topaz Gemstone:", `Buy Price: ${Topazt5b}, Sell Price: ${Topazt5}`)
                embed.setColor("YELLOW")
                interaction.followUp({ embeds: [embed] })
                return;
            }
            if(g === "amber") {
                const response = await fetch("https://api.slothpixel.me/api/skyblock/bazaar")
                const d = await response.json()
                const { FLAWED_AMBER_GEM, FINE_AMBER_GEM, PERFECT_AMBER_GEM, ROUGH_AMBER_GEM, FLAWLESS_AMBER_GEM } = d
                const Ambert1 = ROUGH_AMBER_GEM.quick_status.sellPrice.toFixed(2)
                const Ambert2 = FLAWED_AMBER_GEM.quick_status.sellPrice.toFixed(2)
                const Ambert3 = FINE_AMBER_GEM.quick_status.sellPrice.toFixed(2)
                const Ambert4 = FLAWLESS_AMBER_GEM.quick_status.sellPrice.toFixed(2)
                const Ambert5 = PERFECT_AMBER_GEM.quick_status.sellPrice.toFixed(2)
                const Ambert1b = ROUGH_AMBER_GEM.quick_status.buyPrice.toFixed(2)
                const Ambert2b = FLAWED_AMBER_GEM.quick_status.buyPrice.toFixed(2)
                const Ambert3b = FINE_AMBER_GEM.quick_status.buyPrice.toFixed(2)
                const Ambert4b = FLAWLESS_AMBER_GEM.quick_status.buyPrice.toFixed(2)
                const Ambert5b = PERFECT_AMBER_GEM.quick_status.buyPrice.toFixed(2)
                const embed = new MessageEmbed()
                embed.setTitle("<:Amber:908719658113335408> Amber Gemstone Data <:Amber:908719658113335408>")
                embed.setFooter("Made By oLeaf", "https://i.imgur.com/b1D8Ekx.gif")
                embed.setAuthor(`Ran By: ${interaction.user.username}`, interaction.user.displayAvatarURL)
                embed.addField("Rough Amber Gemstone:", `Buy Price: ${Ambert1b}, Sell Price: ${Ambert1}`)
                embed.addField("Flawed Amber Gemstone:", `Buy Price: ${Ambert2b}, Sell Price: ${Ambert2}`)
                embed.addField("Fine Amber Gemstone:", `Buy Price: ${Ambert3b}, Sell Price: ${Ambert3}`)
                embed.addField("Flawless Amber Gemstone:", `Buy Price: ${Ambert4b}, Sell Price: ${Ambert4}`)
                embed.addField("Perfect Amber Gemstone:", `Buy Price: ${Ambert5b}, Sell Price: ${Ambert5}`)
                embed.setColor("ORANGE")
                interaction.followUp({ embeds: [embed] })
                return;
            } 
            else {
                let msg = await interaction.followUp({ content: "Sorry, but the gemstone you typed in either doesnt exist or you misspelled. Please try again with: Amethyst, Jade, Topaz, Ruby, Sapphire, Amber, or Jasper." })
            }                    
        }
        getGemPrices()
    },
};
//<:Ruby:908719538231734302>  <:Amber:908719658113335408> <:Jade:908719954096951356> <:Jasper:908719954105335878> <:Topaz:908720229734043718> <:Sapphire:908719764472479795> <:Amethyst:908719954096967700>
