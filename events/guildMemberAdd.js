module.exports = async (client, member) =>{
	const Discord = require("discord.js");

	const embed = new Discord.MessageEmbed()
	.setTitle(member.user.username + " Bem vindo(a) ao servidor!")
	.setAuthor(client.user.username, client.user.displayAvatarURL())
	.setImage(member.user.avatarURL())
	.setColor('#ffv800')
	.setDescription('Leia as <#ID_DO_CANAL_DE_REGRAS> antes de postar!')
	.setTimestamp(new Date())

	member.guild.channels.cache.get('ID_DO_CANAL_PARA_MENSAGEM').send({embed});
}
