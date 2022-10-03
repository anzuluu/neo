const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: "ping",
    
    aliases: ["latencia", "ms"],
    desc: "Sirve para ver la latencia del Bot",
    run: async (client, message, args, prefix) => {
        message.reply(`Pong! El ping del Bot es de \`${client.ws.ping}ms\``)

        client.on('interactionCreate', async interaction => {
            if (!interaction.isChatInputCommand()) return;
        
            if (interaction.commandName === 'ping') {
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('primary')
                            .setLabel('Primary')
                            .setStyle(ButtonStyle.Primary),
                    );
        
                await interaction.reply({ content: 'Pong!', components: [row] });
            }
        });
        

        
    }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
