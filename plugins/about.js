/*
created by HASSAN RAJPOOT
contact me 923286813475 ♻️
© Copy coder alert ⚠
*/


const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*

*[ • 𝐇𝐀𝐒𝐒𝐀𝐍-𝐌𝐃 - 𝐎𝐖𝐍𝐄𝐑 • ]*

*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛx ʜᴀssᴀɴ-ᴍᴅ-ʙᴏᴛ*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ ʜᴀssᴀɴ...*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ ʜᴀssᴀɴ-ʀᴀᴊᴘᴏᴏᴛ*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ ʜᴀsɴᴇᴇ*
*│  ◦* *ᴀɢᴇ➠ ᴋᴜɴ ʙᴀᴛᴀᴏ*
*│  ◦* *ᴄɪᴛʏ➠ ᴘᴇʀsɴᴏʟ ʜᴀɪ*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʜᴀssᴀɴ ʀᴀᴊᴘᴏᴏᴛ²⁴³
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
