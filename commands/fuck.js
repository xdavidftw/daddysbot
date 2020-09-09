module.exports = {
    name: 'fuck',
    description: "This is fuck command!",
    execute(message, args){
        message.channel.send('YOU!');
    }
}