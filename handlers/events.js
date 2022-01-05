const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table");
const { Events } = require("../utils/eventNames");
const discord = require("discord.js")

module.exports = async (client) => {
  const table = new Ascii("Event Loaded");
  (await PG(`${process.cwd()}/events/*/*.js`)).map(async (file) => {
    const event = require(file);
    if (!Events.includes(event.name) || !event.name) {
      const L = file.split("/");
      await table.addRow(
        `${event.name || "Missing"}`,
        `❌ Event name is invalid: ${L[6] + `/` + L[7]}`
      );
      return;
      }
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client));
    } else {
      client.on(event.name, (...args) => event.execute(...args, client));
    };
    await table.addRow(`${event.name}`, `✔ loaded `);
  });
  console.log(table.toString());
}
