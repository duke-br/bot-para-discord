module.exports = async (client, member) => {
	
	const embed = {
	  "color": 8311585,
	  "timestamp": new Date(),
	  "footer": {
		"icon_url": client.user.avatarURL,
		"text": "Data de entrada"
	  },
	  "author": {
		"name": member.user.username,
		"icon_url": member.user.avatarURL
	  },
	  "fields": [
		{
		  "name": "Bem vindo(a)",
		  "value": "Leia as <#464522380849709056> para não tomar KICK/BAN e mantenha um bom relacionamento com o pessoal :sunglasses: "
		}
	  ]
	};
	member.guild.channels.get("464520117770780678").send({embed});
}