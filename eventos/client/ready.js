const mongoose = require('mongoose');
const config = require('../../config/config.json');
const { ActivityType } = require("discord.js")
const ms = require("ms")

module.exports = client => {
    //Nos conectamos a la base de datos

    let palo = 53;

    const moment = require('moment');
const osu = require('node-os-utils');
const os = require('os');
const query = require('samp-query');
require('moment-duration-format');

 // Information bot login.
let cpuUsado;
const cpu = osu.cpu
var mem = osu.mem;
let freeRAM, usedRAM;

mem.info().then(info => {
  freeRAM = info['freeMemMb']
  usedRAM = info['totalMemMb'] - freeRAM
});

// Medidor de ping
let values = {
  high: 200,
  medium: 100,
  low: 50
}
let ping = client.ws.ping
let status;
if(ping > values.high){ status = 'Inestable' }
else if (ping > values.medium){ status = 'Estable' }
else { status = 'Excelente' }

console.log(`INFORMATION BASIC BOT\nPerformance:\n  — RAM: ${(usedRAM, freeRAM)} [${Math.round((100 * usedRAM / (usedRAM + freeRAM)))}%]`)
console.log(`System: Intel ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`)
console.log(`Operative System: ${os.type} ${os.release} ${os.arch}`);
console.log(`Activitys:\n   — Host: ${moment.duration(os.uptime * 1000).format(`D [Días], H [Horas], m [Minutos], s [Segundos]`)}\n   — Bot: ${moment.duration(client.uptime).format(`D [Días], H [Horas], m [Minutos], s [Segundos]`)}`)
console.log(`Last Login: ${moment(client.readyAt).format("DD [de] MMM YYYY HH:mm")}`);
console.log(`Pings:\n   — API: ${status} | ${ping}ms`);


    let statusarray = [
        {
            name: `En Matenimiento!`,
            type: ActivityType.Playing,
            status: `dnd`
        },
        {
            name: `By: Mako <3#5907`,
            type: ActivityType.Custom,
            status: `online`
        },
  
    ]
    try {
  
    setInterval(() => {
  
        const option = Math.floor(Math.random() * statusarray.length)
        
        client.user.setPresence({
            activities: 
                [{
                    name: statusarray[option].name,
                    type: statusarray[option].type,
                    url: statusarray[option].url
                }],
            
            status: statusarray[option].status
        })
    }, ms("1m"));
    
    } catch (error) {
        
    console.log("Ocurrio un error al cambiar los estados") // esto lo puedes cambiar a error para ver donde se genera el error en caso que no se cambien los estados.
  }


    mongoose.connect(config.mongodb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`
╔═════════════════════════════════════════════════════╗
║                                                     ║
║       Conectado a la base de datos de MONGODB!      ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`.blue)
    }).catch((err) => {
        console.log(`☁ ERROR AL CONECTAR A LA BASE DE DATOS DE MONGODB`.red);
        console.log(err)
    })

    console.log(`╔═════════════════════════════════════════════════════╗`.green)
    console.log(`║ `.green + " ".repeat(-1 + palo - 1) + " ║".green)
    console.log(`║ `.green + `      Conectado como ${client.user.tag}`.green + " ".repeat(-1 + palo - 1 - `      Conectado como ${client.user.tag}`.length) + " ║".green)
    console.log(`║ `.green + " ".repeat(-1 + palo - 1) + " ║".green)
    console.log(`╚═════════════════════════════════════════════════════╝`.green)
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
