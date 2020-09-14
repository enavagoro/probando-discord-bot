const Discord = require("discord.js");
const client = new Discord.Client;
const config = {
  "token":"NzU0OTQ0MzQ0NjE1ODEzMTMz.X18GtQ.X7_P8veM50lklHPAFPPbhrK8TFs",
  "prefix":"&"
}
;

var prefix = config.prefix;

client.on("ready", () => {
  console.log(`${client.user.username} está preparado para salir al espectaculo`);
  client.user.setActivity("sospechosa la wea ");
});

client.on("message", async message =>{
  const args = message.content.slice(prefix.lenght).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;

    if(comando=="&hola"){
      message.reply(" Muy buenas noches viña del mar");
    }

    if(comando=="&chiste"){
      let x = getRandomInt(3);
      if(x==0){
        message.reply("¿Por qué las focas del circo miran siempre hacia arriba?.. Porque es donde están los focos.");
      }

      if(x==1){
        message.reply("¡Camarero! Este filete tiene muchos nervios. Normal, es la primera vez que se lo comen.");
      }

      if(x==2){
        message.reply("¿Que le dice un techo a otro?... Techo de menos ");
      }
    }

    if(comando=="&nose"){
      conectar(comando,message);
    }

    if(comando=="&plo"){
      conectar(comando,message);
    }

    if(comando=="&plo1"){
      conectar(comando,message);
    }

/*
    switch (comando) {
      case "hola":
        message.reply("Muy buenas noches viña del mar");
        break;
      case "adios":
        message.channel.send("Muchas gracias viña");
        break;
    };
*/
});

client.login(config.token);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

async function conectar(comando,message){
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      console.log(',estoy dentro',comando);
      if(comando=="&nose"){
        connection.play('./nose');
      }

      if(comando=="&plo"){
        connection.play('./plo');
      }

      if(comando=="&plo1"){
        connection.play('./plo1.mp3');
      }
    } else {
      message.reply('You need to join a voice channel first!');
    }

}
