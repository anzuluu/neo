const Discord = require('discord.js')
module.exports = {
    name: "clear",
    aliases: ["eliminar"],
    desc: "sirve para eliminar los mensajes del chat",
    permisos: ["MANAGE_MESSAGES"],
    permisos_bot: ["MANAGE_MESSAGES"],
    run: async (client, message, args, prefix) => {

        try {
            const cantidad = args[0];
            if (!cantidad) return message.reply('Debes especificar la cantidad de mensajes a eliminar');
            if (isNaN(cantidad)) return message.reply('Debes especificar la cantidad de mensajes a eliminar');
            if (cantidad > 100) return message.reply('No puedes eliminar mas de 100 mensajes a la vez');
            message.delete().then(() => {
                message.channel.bulkDelete(cantidad);
                message.channel.send({ embeds: [new Discord.EmbedBuilder()
                    .setTitle('CLEAR')
                    .setDescription(`${message.author}, Elimino ${cantidad}`)
                    .setFooter({ text: `Pedido por: ${message.member.displayName}` })
                    .setColor(client.color)
                    .setTimestamp(),
                ] }).then(msg => {
                    setTimeout(() => msg.delete(), 8000);
                });
            });
        }
        catch (err) {
            console.log(err);
        }
    },

};