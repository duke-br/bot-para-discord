exports.run = async (client, message) => {
  const Discord = require("discord.js");

  const embed = new Discord.RichEmbed()
  .setColor('#ff0000') // cor da barra
	.setTitle('Titulo da mensagem') // Titulo
	.setURL('https://link-do-titulo.com') // Link do titulo
	.setAuthor('Autor da mensagem', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org') // Autor / Imagem do autor / Link do autor
	.setDescription('Descrição') // Descrição da mensagem
	.setThumbnail('https://i.imgur.com/wSTFkRM.png') // Miniatura a direita (thumb)
	.addField('Titulo', 'texto') // Titulo e texto simples
	.addBlankField() // Linha em branco
	.addField('Coluna 1', 'Texto 1', true) //Titulo e texto em coluna
	.addField('Coluna 2', 'Texto 2', true) //Titulo e texto em coluna
	.addField('Coluna 3', 'Texto 3', true) //Titulo e texto em coluna
	.setImage('https://i.imgur.com/wSTFkRM.png') // Imagem
	.setTimestamp() // Hora
	.setFooter('dbr', 'https://i.imgur.com/wSTFkRM.png'); //Texto do rodapé e imagem

message.reply({embed});
}