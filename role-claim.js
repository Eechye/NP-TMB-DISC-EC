const { Discord } = require('discord.js')
const firstMessage = require('./firstmessage')


module.exports = client => {
    const channelId = '783054979812163604' 

    const getEmoji = emojiName => client.emojis.cache.find(emoji => emoji.name === emojiName)

    const emojis = {
        SG: 'Guild Members',
        Snowager: 'Snowager Alerts',
        Turmaculus: 'Turmaculus Alerts',
        Tarla: 'Tarla Alert',
        Stock: 'Stock Marketer',
        FC: 'Food Clubber',
        POGO: 'Pokemon GO Players',
        Genshin: 'Genshin Players',
        AC: 'Animal Crossing Players'
}
     

const reactions = []

let emojiText = 
                'Edwina Will **Automatically grant you access** based on roles that you have reacted \n\n' +
                'To Add/Remove roles and grant access, Simply React by **clicking on the coresponding icon** that you wish/remove access \n\n' +
                'Reacts to Singapore Flag to get access to the Guild Discord! \n\n' + 
                'Reacts to Ping Alert to gain access to Member Pings when Events goes off \n\n'  + 
                'Reacts to Other Games Alert to access their respective game channels \n\n'

for (const key in emojis){
    const emoji = getEmoji(key)
    reactions.push(emoji)

    const role = emojis[key]
    emojiText += `${emoji} = ${role}\n`
}


firstMessage(client, channelId, emojiText, reactions)

const handleReaction = (reaction, user, add) => {
    if (user.id === '782558268819374081') {
        return
    }

    const emoji = reaction._emoji.name
    const {guild} = reaction.message

    const roleName = emojis[emoji]
    if (!roleName)
    {
        return
    }

    const role = guild.roles.cache.find(role => role.name === roleName)
    const member = guild.members.cache.find(member => member.id === user.id)

    if(add) {
        member.roles.add(role)
    }
    else
    {
        member.roles.remove(role)
    }
}

client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.message.channel.id === channelId) {
        handleReaction(reaction, user, true)
    }
})

client.on('messageReactionRemove', (reaction, user) => {
    if(reaction.message.channel.id === channelId) {
        handleReaction(reaction, user, false)
    }
})
}