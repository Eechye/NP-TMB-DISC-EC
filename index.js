///This code is produce by Eechye and strictly to be used for Timber Discord Server

const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const command = require('./command')
const firstMessage = require('./firstmessage')
const roleClaim = require('./role-claim')
//const welcome = require('./welcome')



client.on('ready', () => {
    console.log('Bot is ready to run!!!')
    //welcome(client)
    roleClaim(client)
})
    
client.on('guildMemberAdd', (member) => {
    let channelID = '782425635296903209';
    const targetChannelID = '782425224686862376';
    if(member.guild.id != '782365799364689930') return;
    let embeded = new Discord.MessageEmbed()
    .setTitle(`Member Joined!!`)
    .setDescription(`Welcome ${member} to the Neopets Timbre Discord Server, You have been placed on the **restricted roles**. \n\n Please read the ${member.guild.channels.cache.get(targetChannelID).toString()} to gain access to the guild discord channels`)
    .setColor("ORANGE")
    .setTimestamp()
    client.channels.cache.get(channelID).send(embeded)
})

client.on('guildMemberRemove', (member) => {
    let channelID = '783104741521227777';
    if(member.guild.id != '782365799364689930') return;
    let embeded = new Discord.MessageEmbed()
    .setTitle(`Member Left!!`)
    .setDescription(`${member} has left this server!`)
    .setColor("ORANGE")
    .setTimestamp()
    client.channels.cache.get(channelID).send(embeded)
})



//Help Commands for all bots
command(client, 'help', (message) => {
    console.log(message.author)
    const embed = new Discord.MessageEmbed()
    .setTitle(`The following bots commands are supported in this server. Please use responsibilies and in approppriate channels`)
    .setAuthor(message.author.username)
    .addFields({
        name: `!help`,
        value: `Display the commands menu for both Edwina & NeopetsBot`,

    },
    {
        name: `!ah [itemname]`,
        value: `Links to the Auction House search for an item. If no item is passed, sends only the Auction House URL`,

    },
    {
        name: `!ahu [Username]`,
        value: `Links to the Auction House search for a user`,

    },
    {
        name: `!tp [itemname]`,
        value: `Links to the TP search for an item. If no item is passed, sends only the Trading Post url.`,

    },
    {
        name: `!tpu [username]`,
        value: `Links to the TP search for a user`,

    },
    {
        name: `!gallery [username]`,
        value: `Links to the Gallery for a user`,

    },
    {
        name: `!sdb [itemname]`,
        value: `Links to SDB search for an item. If no item is passed, sends only the SDB url.`,

    },
    {
        name: `!sw [itemname]`,
        value: `Links to SW search for an item. If no item is passed, sends only the Shop Wizard url.`,
    },
    {
        name: `!color [species] [color]`,
        value: `Shows image of the pet with color you want! Allows you to choose pet size, and emotion using reactions!`,

    },
    {
        name: `!color uc [color or species] [species or color]`,
        value: `Shows UC pet image, if it exists`,

    },
    {
        name: `!naked <species> [color]`,
        value: `Shows image of the pet with color you want, BUT... NAKED!`,

    },
    {
        name: `!interest [desired]`,
        value: `Shows how much NP you need in your bank to get to your desired daily interest.`,

    },
    {
        name: `!daily`,
        value: `Shows all the Links to Neopets Daily`,

    },
    {
        name: `!donate`,
        value: `Donate to the Timber Guild Shop for future Guild Auction!`,

    },
    {
        name: `!gboard`,
        value: `Links to the Guild Message Board`,

    },
    {
        name: `!gfboard`,
        value: `Links to the Guild Forum Board, Do Help Bump :)`,

    },
    {
        name: `!wheels`,
        value: `Links to all the Wheels in Neopia`,

    },
    {
        name: `!scratchcards`,
        value: `Links to all the Scratchcard in Neopia`,

    },
    {
        name: `!bd`,
        value: `Link to Battledome`,

    },
    {
        name: `!bank`,
        value: `Link to Bank`,

    },
    {
        name: `!play [Youtube Link] or !play [Copy Spotify Playlist Link]`,
        value: `Add the current Youtube Link/Spotify Playlist Link into the Groovy Music Bot playlist`,
    },
    )
    
    message.channel.send(embed)
})

//Battledome and Battleground
command(client, ['bd'], (message) => {
    console.log(message.author)
    const embed = new Discord.MessageEmbed()
    .setTitle(`Battledome and Battleground`)
    .setAuthor(message.author.username)
    .addFields(
        {
            name: `Battledome`,
            value: `http://www.neopets.com/dome/fight.phtml`,    
        },
        {
            name: `Battleground of the Obelisk`,
            value: `http://www.neopets.com/prehistoric/battleground/`,    
        },
        )
        message.channel.send(embed)
       }
)

//Battledome and Battleground
command(client, ['bank'], (message) => {
    console.log(message.author)
    const embed = new Discord.MessageEmbed()
    .setTitle(`The National Neopian Bank`)
    .setAuthor(message.author.username)
    .addFields(
        {
            name: `The National Neopian Bank`,
            value: `http://www.neopets.com/bank.phtml`,    
        },
        )
        message.channel.send(embed)
       }
)


//Guild Function
command(client, ['donate', 'gboard', 'gfboard', 'guild'], (message) => {
    console.log(message.author)
    const embed = new Discord.MessageEmbed()
    .setTitle(`Guild Function`)
    .setAuthor(message.author.username)
    .addFields(
        {
            name: `Timbre Donation Shop`,
            value: `http://www.neopets.com/browseshop.phtml?owner=timbre_sg`,    
        },
        {
            name: `Guild Board`,
            value: `http://www.neopets.com/guilds/guild_board.phtml?id=4174998`,    
        },
        {
            name: `Guild Neo Board`,
            value: `http://www.neopets.com/neoboards/topic.phtml?topic=160441387`,    
        }
        )
        message.channel.send(embed)
       }
)
 
//Wheels
command(client, ['wheels'], (message) => {
    console.log(message.author)
    const embed = new Discord.MessageEmbed()
    .setTitle(`Wheels of Neopia`)
    .setAuthor(message.author.username)
    .addFields(
        {
            name: `Wheel of Mediocrity`,
            value: `http://www.neopets.com/prehistoric/mediocrity.phtml`,    
        },
        {
            name: `Wheel of Excitement`,
            value: `http://www.neopets.com/faerieland/wheel.phtml`,    
        },
        {
            name: `Wheel of Misfortune`,
            value: `http://www.neopets.com/halloween/wheel/index.phtml`,    
        },
        {
            name: `Wheel of Knowledge`,
            value: `http://www.neopets.com/medieval/knowledge.phtml`,    
        },
        {
            name: `Wheel of Monotony`,
            value: `http://www.neopets.com/prehistoric/monotony/monotony.phtml`,    
        },
        {
            name: `Wheel of Extravagance`,
            value: `http://www.neopets.com/desert/extravagance.phtml`,    
        },
        {
            name: `NC Archives Wheel`,
            value: `http://www.neopets.com/mall/wheel/`,    
        },
        )
        message.channel.send(embed)
       }
)

 
//Scratchcard
command(client, ['scratchcards'], (message) => {
    console.log(message.author)
    const embed = new Discord.MessageEmbed()
    .setTitle(`Scratchcard of Neopia`)
    .setAuthor(message.author.username)
    .addFields(
        {
            name: `Winter Scratchcard`,
            value: `http://www.neopets.com/winter/kiosk.phtml`,    
        },
        {
            name: `Spooky Scratchcard`,
            value: `http://www.neopets.com/halloween/scratch.phtml`,    
        },
        {
            name: `Desert Scratchcard`,
            value: `http://www.neopets.com/desert/sc/kiosk.phtml`,    
        },
        )
        message.channel.send(embed)
       }
)



//Dailies
command(client, 'daily', (message) => {
    console.log(message.author)
    const embed = new Discord.MessageEmbed()
    .setTitle(`Neopets Daily`)
    .setAuthor(message.author.username)
    .addFields(
        {
            name: `Advent Calendar`,
            value: `http://www.neopets.com/winter/adventcalendar.phtml`,
    
        },
        {
            name: `Anchor Management`,
            value: `http://www.neopets.com/pirates/anchormanagement.phtml`,
        },
        {
            name: `Apple Bobbing`,
            value: `http://www.neopets.com/halloween/applebobbing.phtml`,
        },
        {
            name: `Bank Interest`,
            value: `http://www.neopets.com/bank.phtml`,
        },
        {
            name: `Coltzan's Shrine`,
            value: `http://www.neopets.com/desert/shrine.phtml`,
        },
        {
            name: `Council Chamber`,
            value: `http://www.neopets.com/altador/council.phtml`,
        },
        {
            name: `Deadly Dice`,
            value: `http://www.neopets.com/worlds/deadlydice.phtml`,
        },
        {
            name: `Deserted Tomb`,
            value: `http://www.neopets.com/worlds/geraptiku/tomb.phtml`,
        },
        {
            name: `Forgotten Shore`,
            value: `http://www.neopets.com/pirates/forgottenshore.phtml`,
        },
        {
            name: `Fruit Machine`,
            value: `http://www.neopets.com/desert/fruitmachine.phtml`,
        },
        {
            name: `Giant Jelly`,
            value: `http://www.neopets.com/jelly/jelly.phtml`,
        },
        {
            name: `Giant Omelette`,
            value: `http://www.neopets.com/prehistoric/omelette.phtml`,
        },
        {
            name: `Grave Danger`,
            value: `http://www.neopets.com/halloween/gravedanger/`,
        },
        {
            name: `Grumpy Old King`,
            value: `http://www.neopets.com/medieval/grumpyking.phtml`,
        },
        {
            name: `Kiko Pop`,
            value: `http://www.neopets.com/worlds/kiko/kpop/`,
        },
        {
            name: `Lunar Temple`,
            value: `http://www.neopets.com/shenkuu/lunar/`,
        },  
        {
            name: `Obsidian Quarry`,
            value: `http://www.neopets.com/magma/quarry.phtml`,
        },
        {
            name: `Monthly Freebies`,
            value: `http://www.neopets.com/freebies/`,
        },
        {
            name: `Qasalan Expellibox`,
            value: `http://ncmall.neopets.com/mall/shop.phtml?page=giveaway`,
        },
        {
            name: `Mysterious Symol Hole`,
            value: `http://www.neopets.com/medieval/symolhole.phtml`,
        },
        {
            name: `The Discarded Magical Blue Grundo Plushie of Prosperity`,
            value: `http://www.neopets.com/faerieland/tdmbgpop.phtml`,
        },
        {
            name: `Tiki Tack Tombola`,
            value: `http://www.neopets.com/island/tombola.phtml`,
        },
        {
            name: `Trundy's Suprise`,
            value: `http://www.neopets.com/trudys_surprise.phtml`,
        },
        {
            name: `Wise Old King`,
            value: `http://www.neopets.com/medieval/wiseking.phtml`,
        },
        {
            name: `Ye Olde Fishing Vortex`,
            value: `http://www.neopets.com/water/fishing.phtml`,
        },

    )
    message.channel.send(embed)
})

            
//Server Information
command(client, 'server', (message) => {
        const {guild} = message
        const {name, region, memberCount, owner} = guild
        const icon = guild.iconURL()
        const embed = new Discord.MessageEmbed()
        .setTitle(`Server info for "${name}"`)
        .setThumbnail(icon)
        .addFields(
            {
                name: 'Region',
                value: region,
            },
            {
                name: 'Members',
                value: memberCount,
            },
            {
                name: 'Owner',
                value: owner.user.tag,
            },
            )

        message.channel.send(embed)

    })

//Clear Discord Message - Only Administrator has it
command(client, ['cc', 'clearchannel'], message => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
        message.channel.messages.fetch().then((results) => {
            message.channel.bulkDelete(results)
            })
        }
    })

    command(client, 'status', message => {
        const content = message.content.replace('!status', '')
    
        client.user.setPresence({
            activity: {
                name: content,
                type: 0,
            },
        })
    })

client.login(config.token)

//New Version