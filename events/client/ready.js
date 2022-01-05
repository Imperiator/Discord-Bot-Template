module.exports = {
    name: "ready",
    once: true,
    execute: (client) => {
        console.log(`${client.user.username} is ready`);
        client.user.setActivity(`${client.users.cache.size} users`, { type: "WATCHING" });
    }
}