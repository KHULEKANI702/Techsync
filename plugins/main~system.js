/*
        𓋜  ＢＯＴ ＮＡＭＥ ⇩
         
          𝗍𝖾𝖼𝗁𝗌𝗒𝗇𝖼
         
       𓋜 ＢＯＴ ＯＷＮＥＲ ⇩
         
         𝗄𝗁𝗎𝗅𝖾𝗄𝖺𝗇𝗂 𝖽𝗎𝖻𝖾
         
       𓋜 ＤＥＶＥＬＯＰＥＲ ⇩
         
         𝗄𝗁𝗎𝗅𝖾𝗄𝖺𝗇𝗂 𝖽𝗎𝖻𝖾
         
       𓋜 ＤＥＶ ＬＯＣＡＴＩＯＮ ⇩
         
         𝗓𝗂𝗆𝖻𝖺𝖻𝗐𝖾,𝖻𝗎𝗅𝖺𝗐𝖺𝗒𝗈
         
       𓋜 ＴＥＡＭ ＮＡＭＥ ⇩
         
         𝗍𝖾𝖼𝗁𝗀𝗎𝗒𝗌
         
*/






const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "🌙",
    alias: ["uptime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `╭────⟮  *ɢʀᴇᴇᴛɪɴɢs* ⟯──┈⊷
│• ✨ *𝐇𝐄𝐋𝐋𝐎!*
│• 🏷️ *𝐁𝐎𝐓-𝐔𝐒𝐄𝐑* : ${m.pushName || '*No Name*'}
┗─┬────⊷
╭─┴──⟮ *ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ᴅᴇᴛᴀɪʟs* ⟯──┈⊷
│□
│• □ *𝐁𝐎𝐓-𝐍𝐀𝐌𝐄* : *${config.BOT_NAME}*
│• □ *𝐀𝐔𝐓𝐇𝐎𝐑 : ᴋʜᴜʟᴇᴋᴀɴɪ ᴍᴠᴇʟᴀsᴇ*
│• □ *𝐂𝐎𝐍𝐓𝐀𝐂𝐓-𝐌𝐄 : wa.me/263717777643*
│□
┗─┬────⊷ 
╭─┴──⟮ *ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ sʏsᴛᴇᴍ* ⟯──┈⊷
│□
│• □ *𝐔𝐏𝐓𝐈𝐌𝐄* : *${runtime(process.uptime())}*
│• □ *𝐑𝐀𝐌-𝐔𝐒𝐀𝐆𝐄* : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*
│• □ *𝐇𝐎𝐒𝐓-𝐍𝐀𝐌𝐄* : *${os.hostname()}*
│□
┗──────────────┈⊷

> *ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ sʏsᴛᴇᴍ*`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
