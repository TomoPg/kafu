const { Client, Intents } = require('discord.js')
const client = new Client({ intents: Object.keys(Intents.FLAGS) })

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})

client.on('messageCreate', async msg => {
    if (msg.content === '!勉強開始') {
      setTimeout( function() {
          msg.reply('さんが勉強を開始しました！頑張って下さい！')
        }, 1500 );
    }
})

client.on('messageCreate', async msg => {
    if (msg.content === '!休憩') {
      setTimeout( function() {
          msg.reply('さんが休憩に入りました！ゆっくり休んでね！')
        }, 1500 );
    }
})

client.on('messageCreate', async msg => {
    if (msg.content === '!休憩5') {
      setTimeout( function() {
          msg.reply('さんが5分間休憩に入りました！ゆっくり休んでね！')
        }, 1500 );
    }
})

client.on('messageCreate', async msg => {
    if (msg.content === '!休憩10') {
      setTimeout( function() {
          msg.reply('さんが10分間休憩に入りました！ゆっくり休んでね！')
        }, 1500 );
    }
})

client.on('messageCreate', async msg => {
    if (msg.content === '!勉強終了') {
      setTimeout( function() {
          msg.reply('さんが勉強を終えました！お疲れ様！ゆっくり休んでね！')
        }, 1500 );
    }
})

client.login("")