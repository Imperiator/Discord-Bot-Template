const {Client, Collection} = require('discord.js');
const mongoose = require('mongoose');
require('dotenv').config();

const client = new Client({intents: 32767});

client.commands = new Collection()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err));


require("./handlers/events")(client);
require("./handlers/commands")(client);



client.login(process.env.BOT_TOKEN);