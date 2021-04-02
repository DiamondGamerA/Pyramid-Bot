console.log('hello world')
import dotenv from 'dotenv'
import Discord from 'discord.js'
dotenv.config()
const client = new Discord.Client()
client.login(process.env.TOKEN)
client.on('ready', () => {
  console.log('Ready!')
})
client.on('https://media1.giphy.com/media/rWAF3CyEQEzvhrNtmy/giphy.gif', (msg) => {
  const channel = msg.channel as Discord.TextChannel
  channel.send('Hi there!')
})
