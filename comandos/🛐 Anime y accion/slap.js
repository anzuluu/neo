const Discord = require('discord.js')
const NekoClient = require("nekos.life")
const neko = new NekoClient()


module.exports = {
   name: "slap",
   alias: ["bofetar"],
   premiun: false,

   async run(client, message, args){

    const user = await message.mentions.users.first()

    if(!user) return message.channel.send("Debes nombrar a quien Bofetar.")

    if (user.id == message.author.id) return message.channel.send("No puedes hacer eso")

    if (user.bot) return message.channel.send("No puedes bofetar a un bot, por nuv 😏")



        neko.slap().then(neko => {
        const embed = new Discord.EmbedBuilder()
        .setTitle("Bofetar!")
        .setDescription(`**${message.author.username} Le a dado un Bofeton a **${user}****`)
        .setImage(neko.url)
        .setColor("Random")

        message.channel.send({ embeds: [embed] })
    })

       function newFunction() {
           return neko.sfw.slap
       }
   }
}
 
