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
let status = `🌟 *𝖳𝖾𝖼𝗁𝗌𝗒𝗇𝖼-𝖬𝖣 𝖲𝖳𝖠𝖳𝖴𝖲* 🌟

*𝖧𝖤𝖫𝖫𝖮* *${pushname}*

🕒 *𝖳𝖨𝖬𝖤*: *${currentTime}*
📅 *𝖣𝖠𝖳𝖤*: *${currentDate}*
⏳ *𝖴𝖯𝖳𝖨𝖬𝖤*: *${runtimeHours} 𝖧𝖮𝖴𝖱𝖲, ${runtimeMinutes} minutes, ${runtimeSeconds} 𝖲𝖤𝖢𝖮𝖭𝖣𝖲*

> 🤖 *𝖳𝖾𝖼𝗁𝗌𝗒𝗇𝖼~𝖬𝖣 𝗂𝗌 𝖺𝗅𝗂𝗏𝖾 𝗇𝗈𝗐 𝖺𝗇𝖽 𝗋𝖾𝖺𝖽𝗒 𝖿𝗈𝗋 𝗎𝗌𝖾*

> 🎉 *𝖤𝗇𝗃𝗈𝗒 𝗍𝗁𝖾 𝗌𝖾𝗋𝗏𝗂𝖼𝖾!*

> *Techsync~MD 𝖲𝗒𝗌𝗍𝖾𝗆*`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
