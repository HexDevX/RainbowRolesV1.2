// invite = https://discordapp.com/api/oauth2/authorize?client_id=ID BOT&scope=bot&permissions=8

const Discord = require("discord.js");
const client = new Discord.Client();

// DATA SETTINGS
const settings = require("./settings.json");

function setColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    for (let index = 0; index < settings.Servers.length; ++index) {
        client.guilds.get(settings.Servers[index]).roles.find("name", settings.roleName).setColor("#" + randomColor)
            .catch(console.error);

        console.log(`Changement de couleur ${"#" + randomColor} sur le discord: ${settings.Servers[index]}`)
    }
}

client.on("ready", () => {
    client.user.setActivity("Over the Rainbow !");
    setInterval(setColor, 200);
});

client.login(settings.Token)
