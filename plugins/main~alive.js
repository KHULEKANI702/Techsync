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




const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭────⟮ *ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ* ⟯───┈⊷
│➫╭──────────────┈⊷
│➫│• ⏳ *ᴛᴇᴄʜsʏɴᴄ-ᴜᴘᴛɪᴍᴇ* :  *${runtime(process.uptime())}* 
│➫│• 📟 *ʀᴀᴍ-ᴜsᴀɢᴇ* : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${(os.totalmem() / 1024 / 1024).toFixed(2)}ᴍʙ*
│➫│• ⚙️ *ʜᴏsᴛ-ɴᴀᴍᴇ* : *${os.hostname()}*
│➫│• 👨‍💻 *ʙᴏᴛ-ᴏᴡɴᴇʀ : ᴋʜᴜʟᴇᴋᴀɴɪ ᴍᴠᴇʟᴀsᴇ*
│➫│• 🏷 *ᴛᴇᴄʜsʏɴᴄ-ᴠᴇʀsɪᴏɴ* : *2.5.0*
│➫┗──────────────┈⊷
┗──────────────────┈⊷

> *ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ɪs ᴀʟɪᴠᴇ ɴᴏᴡ ᴀɴᴅ ʀᴇᴀᴅʏ fᴏʀ ᴜsᴇ* .

> *ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ-ʙᴏᴛ*`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/jt3qb1.png` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363411325763461@newsletter',
                    newsletterName: '𝖳𝖾𝖼𝗁𝗌𝗒𝗇𝖼~𝖬𝖣 𝖠𝗅𝗂𝗏𝖾',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
