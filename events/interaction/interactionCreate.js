const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  once: false,

  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */

  async execute(interaction, client) {
    if (interaction.isCommand() || interaction.isContextMenu()) {
      const command = client.commands.get(interaction.commandName);
      if (!command) return interaction.reply({
            embeds: [
              new MessageEmbed()
              .setColor("RED")
              .setTitle("Command not found")
            ]}) && client.commands.delete(interaction.commandName);
        

      command.execute(interaction, client)
    }
  }
}
