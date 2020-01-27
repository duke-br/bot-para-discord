module.exports = (client, guild) => {
    client.logger.cmd(`[GUILD JOIN] ${guild.name} (${guild.id}) adicinou o bot. Owner: ${guild.owner.user.tag} (${guild.owner.user.id})`);
  };