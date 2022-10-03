const Discord = require('discord.js');

module.exports = {
    name: "create-role",
    alias: ["createrole"],

async run (client, message, args){

  if(!message.member.permissions.has("MANAGE_ROLES"))return message.reply("No tienes los permisos suficientes! 😔\nPermisos faltantes : `MANAGE_ROLES`")
  if(!message.guild.me.permissions.has("MANAGE_ROLES"))return message.reply("No tengo los permisos suficientes! 😢\nPermisos faltantes : `MANAGE_ROLES`")

    let amongus = args.join(' ')
    if(!amongus) return message.reply('Debes ingresar el nombre del rol!')

    let auRole = await message.guild.roles.create({
        name: `${amongus}`,
    })

    const embed = new Discord.MessageEmbed()
    .setTitle('Rol creado!')
    .setDescription(`**El rol <@&${auRole.id}> ha sido creado correctamente**`)
    .setColor('GREEN')

    message.channel.send({ embeds: [embed] })
    
  }
    
} 