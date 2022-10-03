const Discord = require('discord.js')
const NekoClient = require("nekos.life")
const neko = new NekoClient()


module.exports = {
   name: "kiss",
   alias: ["bofetar"],
   premiun: false,

   async run(client, message, args){

    const user = await message.mentions.users.first()

    if(!user) return message.channel.send("Debes nombrar a quien Besar.")

    if (user.id == message.author.id) return message.channel.send("No puedes hacer eso")

    if (user.bot) return message.channel.send("No puedes besar a un bot, por nuv 😏")



        neko.kiss().then(neko => {
        const embed = new Discord.EmbedBuilder()
        .setTitle(`${message.author.username} Le ha dado un beso a ${user} :O`)
        .setDescription(`**${message.author.username} Le a dado un Beso a **${user}**** <3`)
        .setImage(neko.url)
        .setColor("Random")

        message.channel.send({ embeds: [embed] })
    })

       function newFunction() {
           return neko.sfw.kiss
       }
   }
}
 
