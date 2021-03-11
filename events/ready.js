module.exports = async client => {
	console.log('Bot logado com ' + client.users.cache.size + ' usuários, em ' + client.channels.cache.size + ' canais de ' + client.guilds.cache.size + ' servidores.');

	let contador = 0;

	setInterval(function(){
		client.user.setPresence({
			status: "online",
			activity: {
				name: "Contando " + contador,
				type: "PLAYING"
			}
		})
		console.log('Contando ' + contador);
		contador++;

	}, 1 * 60 * 1000)
}
