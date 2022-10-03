const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');
const { collection } = require(`${process.cwd()}/modelos/antilinks.js`)
const secureSchema = require(`${process.cwd()}/modelos/antilinks.js`);
const Discord = require('discord.js')

module.exports = {
  name: "setup-antilink",
  alias: ["set-antilink", "setup-antilink", "set-antilinks", "setup-antilinks", "antilinks"],

async run (client, message, args) {

  const row = new ActionRowBuilder()
  .addComponents(
      new SelectMenuBuilder()
      .setPlaceholder(`Hola, Selecciona una opcion porfavor!`)
      .setCustomId("mhelp")
      .setOptions([
          {
              value: "setup",
              label: "Crea el antilinks",
              description: "Eliminar los links",
              emoji: "✅" 
          },
          {
             value: "link",
             label: "Permitir Canal",
             description: "Permite un canal para poder enviar links",
             emoji: "📣"
          },
          {
             value: "delete",
             label: "Borrar el antilinks",
             description: "Haz que todos puedan enviar links",
             emoji: "🚫"
          },
          {
              value: "cans",
              label: "Cancelar el setup",
              description: "Cancela el setup",
              emoji: "❌" 
          }



      ])

      
  )

// Embeds

const inicio = new EmbedBuilder()
.setTitle("🤖 | Setup antilinks")
.setDescription("Usa los menus de abajo para configurar el antilinks")
.setColor("Blue")

const iic = new EmbedBuilder()
.setTitle("✅ | Todo configurado!")
.setDescription("El antilinks se a configurado correctamente")
.setColor("Blue")

const ic = new EmbedBuilder()
.setTitle("✅ | Todos los datos eliminados")
.setDescription("El antilinks se a desconfigurado correctamente")
.setColor("Blue")

const c = new EmbedBuilder()
.setTitle("❌ | No tienes datos")
.setDescription("No tienes datos para eliminar")
.setColor("Blue")

const i = new EmbedBuilder()
.setTitle("✅ | Todo listo!")
.setDescription("Se a returnado todo correctamente!")
.setColor("Blue")

  const m = await message.channel.send({ embeds: [inicio], components: [row]})

  const ifilter = i => i.user.id === message.author.id;

  const collector = m.createMessageComponentCollector({ filter: ifilter}) 

  collector.on("collect", async suge=> {
      if(suge.values[0] === "delete"){
        await suge.deferUpdate()
          secureSchema.findOne({ GuildId: message.guild.id }, async (err, data) => {
              if(!data) {
                return suge.editReply({ embeds: [c] })
              } else {
                console.log(`Asegurado: anti-links des-habilitado en: ${message.guild.id}`.green)
                 data.delete();
              }
            }),
          suge.editReply({ embeds: [ic], components: [] })
      }
    })

    collector.on("collect", async suge=> {
      if(suge.values[0] === "link"){
          await suge.deferUpdate()
          const data = secureSchema.findOneAndDelete({ GuildId: message.guild.id})
          if(!data) return message.reply("❌ | **Primero debes tener datos de antilinks para usar este comando!**")
     var tempmsg = await message.reply({embeds: [new Discord.EmbedBuilder()
      .setTitle("Envia un canal")
      .setColor("Blue")
      .setDescription("Simplemente envia un canal para enviar links")]
    })
    await tempmsg.channel.awaitMessages({filter: m => m.author.id == message.author.id, 
        max: 1,
        time: 90000,
        errors: ["time"]
      })
      .then(async collected => {
        var message = collected.first();
        if(!message) return message.reply("NO MESSAGE SENT");
        let channel = message.mentions.channels.filter(ch=>ch.guild.id==message.guild.id).first() || message.guild.channels.cache.get(message.content.trim().split(" ")[0]);
        if(channel){
          await secureSchema.findOneAndUpdate({ GuildId: message.guild.id }, {
            ChannelId: channel.id
          })
          return message.reply({embeds: [new Discord.EmbedBuilder()
            .setTitle("Se a configurado el canal corectamente")
            .setColor("Blue")
            .setDescription(`Ahora se pueden enviar links en: <#${channel.id}>`.substring(0, 2048))
          ]});
        }
        else{
          return message.reply( "No mencionaste un canal");
        }
      })
      }
    })

    collector.on("collect", async suge=> {
      if(suge.values[0] === "setup"){
          secureSchema.findOne({ GuildId: message.guild.id }, async (err, data) => {
              if(data) {
                data.GuildId = message.guild.id;
              data.save();
              } else {
                console.log(`Asegurado: anti-links ${message.guild.id}`.green)
                new secureSchema({
                  GuildId: message.guild.id,
                }).save();
              }
            }),
            await suge.deferUpdate()
          suge.editReply({ embeds: [iic], components: [] })
      }
    })


    collector.on("collect", async suge=> {
      if(suge.values[0] === "cans"){
          await suge.deferUpdate()
     return suge.editReply({ embeds: [i], components: [] })
      }
    })
    
  }

}