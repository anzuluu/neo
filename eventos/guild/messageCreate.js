const config = require(`${process.cwd()}/config/config.json`);
const Discord = require('discord.js');
const serverSchema = require(`${process.cwd()}/modelos/servidor.js`)
const { asegurar_todo } = require(`${process.cwd()}/utils/funciones.js`)
const secureSchema = require(`${process.cwd()}/modelos/antilinks.js`);
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = async (client, message) => {
    if (!message.guild || !message.channel || message.author.bot) return;
    await asegurar_todo(message.guild.id, message.author.id);
    let data = await serverSchema.findOne({guildID: message.guild.id});

    //si el bot es mencionado, devolvemos un mensaje de respuesta indicando el prefijo establecido en el servidor
    if(message.content.includes(client.user.id)) return message.reply({

        
        embeds: [
            new Discord.EmbedBuilder()
            .setTitle(`✅ **Para ver mis comandos usa \`${data.prefijo}help\`!**`)
            .setFooter({text: `© desarrollado por dewstouh#1088 | 2022`, iconURL: `https://cdn.discordapp.com/avatars/282942681980862474/7ff4f4ae92af5feb0d258a71cdb0b060.png`})
            .setColor(client.color)
            
        ]
    })

    //antiflood que eliminará los mensajes de un usuario si envía más de 5 mensajes en 10 segundos
const floodMap = new Map();
module.exports = client => {
    client.on("messageCreate", async message => {
        let limiteSegundos = 10 * 1000;
        let limiteMensajes = 5;


        let floodData = floodMap.get(`${message.guild.id}_${message.author.id}`);
        if (!floodData) {
            floodMap.set(`${message.guild.id}_${message.author.id}`, 1)
        } else {
            floodData = floodMap.get(`${message.guild.id}_${message.author.id}`);
            floodMap.set(`${message.guild.id}_${message.author.id}`, floodData+1);
            floodData = floodMap.get(`${message.guild.id}_${message.author.id}`);
        }

        if(floodData >= limiteMensajes){
            message.delete()
            .then(() => {
                message.channel.send('Deja de hacer flood')
            })
            .catch(() => {});
        }

        setTimeout(() => {
            floodMap.set(`${message.guild.id}_${message.author.id}`, floodData - 1)
        }, limiteSegundos);
    })
}

  let mencionado = message.mentions.members.first();
    if(!mencionado) return;
    if(db.has(`${mencionado.id}-afk`)) {
        let razon = await db.get(`${mencionado.id}-afk`);
        message.channel.send(`${mencionado.user.tag} está AFK por ${razon}`);
    }

     
   

  
    let secureData = await secureSchema.findOne({ GuildId: message.guild.id })

    if(secureData){
        if(message.content.match("https://")){
    
            if(message.channel.id === secureData.ChannelId) return;
    
          message.delete();
          message.channel.send("❌ | **No se puede enviar links!!**").then(m => setTimeout(() => {
            m.delete()
          }, 5000))
        }
      }




    if (!message.content.startsWith(data.prefijo)) return;
    const args = message.content.slice(data.prefijo.length).trim().split(" ");
    const cmd = args.shift()?.toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.includes(cmd));
    if (command) {
        if (command.owner) {
            if (!config.ownerIDS.includes(message.author.id)) return message.reply(`❌ **Solo los dueños de este bot pueden ejecutar este comando!**\n**Dueños del bot:** ${config.ownerIDS.map(ownerid => `<@${ownerid}>`)}`)
        }
        if(command.premium){
            if(data.premium){
                if(data.premium <= Date.now()) return message.reply("❌ **Tu suscripción premium ha expirado!**")
            } else {
                return message.reply("❌ **Este es un comando premium!**")
            }
        }

  

        if(command.permisos_bot){
            if(!message.guild.members.me.permissions.has(command.permisos_bot)) return message.reply(`❌ **No tengo suficientes permisos para ejecutar este comando!**\nNecesito los siguientes permisos ${command.permisos_bot.map(permiso => `\`${permiso}\``).join(", ")}`)
        }

        if(command.permisos){
            if(!message.member.permissions.has(command.permisos)) return message.reply(`❌ **No tienes suficientes permisos para ejecutar este comando!**\nNecesitas los siguientes permisos ${command.permisos.map(permiso => `\`${permiso}\``).join(", ")}`)
        }

        //ejecutar el comando
        command.run(client, message, args, data.prefijo, data.idioma);
    } 
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
