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
let status = `╭────⟮ *ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ* ⟯───┈⊷
│➫╭──────────────┈⊷
│➫│• ⏳ *ᴛᴇᴄʜsʏɴᴄ-ᴜᴘᴛɪᴍᴇ* :  *${runtime(process.uptime())}* 
│➫│• 📟 *ʀᴀᴍ-ᴜsᴀɢᴇ* : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${(os.totalmem() / 1024 / 1024).toFixed(2)}ᴍʙ*
│➫│• ⚙️ *ʜᴏsᴛ-ɴᴀᴍᴇ* : *${os.hostname()}*
│➫│• 👨‍💻 *ʙᴏᴛ-ᴏᴡɴᴇʀ : ᴋʜᴜʟᴇᴋᴀɴɪ ᴍᴠᴇʟᴀsᴇ*
│➫│• 🏷 *ᴛᴇᴄʜsʏɴᴄ-ᴠᴇʀsɪᴏɴ* : *4.7.0*
│➫__________________________
┗──────────────────┈⊷

> *ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ sʏsᴛᴇᴍ*`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
