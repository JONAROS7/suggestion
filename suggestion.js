client.on("messageCreate", async message =>{
    if(message.channel.type === "dm")
    if(!message.guild) return;
    if(message.channel.id === ""){ //suggestion channel id
    message.react("👍")
    message.react("👎")
    }
    });
