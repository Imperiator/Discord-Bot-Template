const {CommandInteraction, Client} = require("discord.js");

module.exports = {
    name: "emitt",
    description: "event emitter",
    options: [
        {
            name: "event",
            description: "type of event",
            type: "STRING",
            required: true,
            choices: [
                {
                    name: "guildMemberAdd",
                    value: "guildMemberAdd"
                },
                {
                    name: "guildMemberAdd",
                    value: "guildMemberAdd"
                },
                {
                    name: "guildMemberRemove",
                    value: "guildMemberRemove"
                },
                {
                    name: "guildCreate",
                    value: "guildCreate"
                },
                
            ]
        }
    ],

    /**
     * @param {Client} client
     */

    execute(interaction, client){
        const choices = interaction.options.getString("event");
        client.emit(choices, interaction.member);
        interaction.reply({content: "Event emitted", ephemeral: true});
    }
}