
const { Client } = require("discord.js");
const { promisify } = require("util");
const { glob } = require("glob");
const Ascii = require("ascii-table");
const PG = promisify(glob);

/**
 * @param {Client} client
 */

module.exports = async (client) => {
  const table = new Ascii("Commands Loaded");
  CommandsArray = [];
  (await PG(`${process.cwd()}/commands/*/*.js`)).map(async (file) => {
    const command = require(file);
    if (!command?.name)
      return table.addRow(file.split("/")[7], "🚨 Failed", "No Name");
    //if(!command.description) return table.addRow(command.name,"🚨 Failed", "No Description");

    client.commands.set(command.name, command);
    CommandsArray.push(command);

    await table.addRow(command.name, "✔ Success");
  });
  console.log(table.toString());

  client.once("ready", async () => {
    await client.application.commands
      .set(CommandsArray)
      .then(() => {
        console.log("Commands Loaded");
      })
      .catch((err) => {
        console.log(`Failled to load commands: ${err}`);
      });
  });
};
