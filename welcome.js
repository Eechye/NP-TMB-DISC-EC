module.exports = client => {
const channelId = '782425635296903209' //Welcome Channel
const targetChannelId = '782425224686862376' // Rules and Info
    
client.on('guildMemberAdd', (member) => {
console.log(member)

        const message = `Please Welcome <@${member.id}> to the server!` 
        
        //Please check out ${member.guild.channels.cache.get(targetChannelId.toString()}`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}