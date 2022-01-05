const {Client, MessageEmbed, CommandInteraction} = require('discord.js');
const {connection} = require("mongoose");
require("../../events/client/ready");

module.exports = {
    name: "status",
    description: "Get the status of the bot",
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     * */

    async execute(interaction, client) {
        const res = new MessageEmbed()
        .setColor("#0099ff")
        .setDescription(`**Client**: \`🟢 Online\` - \`${client.ws.ping}ms\`\n **Uptime**: <t:${parseInt(client.readyTimestamp / 1000)}:R>\n
        **Database Connection**: \`${switchTo(connection.readyState)}\``)

        interaction.reply({embeds: [res]});
    }
}

function switchTo(val){
    var status = " ";
    switch(val){
        case 0: status = "🔴 Disconnected"; break;
        case 1: status = "🟢 Connected"; break;
        case 2: status = "connecting"; break;
        case 3: status = "disconnecting"; break;
    }
    return status;
}