const {CommandInteraction, Interaction, Message} = require("discord.js");

module.exports = {
    name: "ping",
    description: "Ping",
    


    /**
     * @param {CommandInteraction} interaction
     */

    execute(interaction) {
        interaction.reply({content: "Pong!"});
    }
}