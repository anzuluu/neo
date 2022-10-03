const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const {  token } = require(`${process.cwd()}/config/config.json`);

const slash = [];

const clientId = '1025113307264327740';

const slashFolders = fs.readdirSync('./slash');
for (const folder of slashFolders) {
const slashFiles = fs.readdirSync(`./slash/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of slashFiles) {
		const command = require(`./slash/${folder}/${file}`);
  slash.push(command.data.toJSON())
}
}


const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		console.log(`Started refreshing ${slash.length} application (/) commands.`);

    await rest.put(
	Routes.applicationCommands(clientId),
	{ body: slash },
);
		console.log(`Successfully reloaded ${slash.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();