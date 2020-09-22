exports.run = async (client, message) => {

let respostas = [
  'Sim.',
  'Pergunte mais tarde.',
  'Melhor você não saber.',
  'Não.'
]

const BallNum = Math.floor(Math.random() * respostas.length); 
const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec)); 

msg = await message.channel.send('Pergunta difícil, vamos ver ...');
await delay(3000); 
msg.edit(respostas[BallNum]);

}
