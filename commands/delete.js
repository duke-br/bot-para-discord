exports.run = async (client, message, args) => {
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) 
      return message.reply("⚠️ Comando apenas para admins!"); 
  
    let totalDelMsg = parseInt(args[0]) + 1;
    let apagadas = totalDelMsg - 1;
  
    async function clear() {
        try {
        message.delete();
        const fetched = await message.channel.fetchMessages({limit: totalDelMsg});
        message.channel.bulkDelete(fetched);
        message.reply(`✔️  ${apagadas} Mensagens apagadas.`);
        } catch(e) {
            return message.reply("🤔 Algo de errado não está certo!");
        }
    }
    clear();
}
//O bot apaga apenas mensagens de até 2 semanas (pode ser contornado com um código mais completo).