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



const config = require('../config');


const {cmd , commands} = require('../command')
cmd({
    pattern: "intro",
    alias: ["devinfo"],
    react: "🧠",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `
*𝖶𝖾𝗅𝖾𝖼𝗈𝗆𝖾 𝗍𝗈 𝖳𝖾𝖼𝗁𝗌𝗒𝗇𝖼-𝖬𝖣*

*𝖧𝖾𝗅𝗅𝗈 𝗍𝗁𝖾𝗋𝖾, 𝗅 𝗀𝗈 𝖻𝗒 𝗍𝗁𝖾 𝗇𝖺𝗆𝖾 𝖪𝗁𝗎𝗅𝖾𝗄𝖺𝗇𝗂 𝖣𝗎𝖻𝖾, 𝖺 𝖽𝗋𝗂𝗏𝖾𝗇 𝖺𝗇𝖽 𝗉𝖺𝗌𝗌𝗂𝗈𝗇𝖺𝗍𝖾 𝖻𝗈𝗍 𝖽𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋 𝗐𝗂𝗍𝗁 𝗄𝖾𝖾𝗇 𝗂𝗇𝗍𝖾𝗋𝖾𝗌𝗍 𝗂𝗇 𝗁𝖺𝗋𝗇𝖾𝗌𝗌𝗂𝗇𝗀 𝗍𝗁𝖾 𝗉𝗈𝗐𝖾𝗋 𝗈𝖿 𝗍𝖾𝖼𝗁𝗇𝗈𝗅𝗈𝗀𝗒 𝗍𝗈 𝗌𝗂𝗆𝗉𝗅𝗂𝖿𝗒 𝗂𝗇𝗍𝖾𝗋𝖺𝖼𝗍𝗂𝗈𝗇𝗌 𝖺𝗇𝖽 𝖾𝗇𝗁𝖺𝗇𝖼𝖾 𝗎𝗌𝖾𝗋 𝖾𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾𝗌.*

*𝖶𝗂𝗍𝗁 𝖺 𝗌𝗈𝗅𝗂𝖽 𝖿𝗈𝗎𝗇𝖽𝖺𝗍𝗂𝗈𝗇 𝗂𝗇 𝖺𝗋𝗍𝗂𝖿𝗂𝖼𝗂𝖺𝗅 𝗂𝗇𝗍𝖾𝗅𝗅𝗂𝗀𝖾𝗇𝖼𝖾 𝖺𝗇𝖽 𝖼𝗈𝖽𝗂𝗇𝗀 𝖾𝗍𝖼, 𝗅'𝗏𝖾 𝗁𝖺𝖽 𝗍𝗁𝖾 𝗉𝗋𝗂𝗏𝗂𝗅𝖾𝗀𝖾 𝗈𝖿 𝖼𝗋𝖾𝖺𝗍𝗂𝗇𝗀 𝗆𝗒 𝗈𝗐𝗇 𝗂𝗇𝗇𝗈𝗏𝖺𝗍𝗂𝗏𝖾 𝗐𝗁𝖺𝗍𝗌𝖺𝗉𝗉 𝖻𝗈𝗍 (𝖳𝖾𝖼𝗁𝗌𝗒𝗇𝖼-𝖬𝖣), 𝖽𝖾𝗌𝗂𝗀𝗇𝖾𝖽 𝗍𝗈 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝖾𝗑𝖼𝖾𝗉𝗍𝗂𝗈𝗇𝖺𝗅 𝗎𝗌𝖾𝗋 𝖾𝗑𝗉𝗂𝗋𝗂𝖾𝗇𝖼𝖾𝗌 𝖺𝗇𝖽 𝗆𝖺𝗄𝖾 𝗅𝗂𝖿𝖾 𝖾𝖺𝗌𝗂𝖾𝗋 𝖿𝗈𝗋 𝖺𝗅𝗅 𝗐𝗁𝗈 𝗂𝗇𝗍𝖾𝗋𝖺𝖼𝗍 𝗐𝗂𝗍𝗁 𝗂𝗍.*

*𝖠𝗌 𝖺 𝖽𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋, 𝗅'𝗆 𝖼𝗈𝗇𝗌𝗍𝖺𝗇𝗍𝗅𝗒 𝗌𝖾𝖾𝗄𝗂𝗇𝗀 𝗐𝖺𝗒𝗌 𝗍𝗈 𝗂𝗆𝗉𝗋𝗈𝗏𝖾 𝖺𝗇𝖽 𝖾𝗑𝗉𝖺𝗇𝖽 𝗆𝗒 𝗌𝗄𝗂𝗅𝗅𝗌, 𝖾𝗇𝗌𝗎𝗋𝗂𝗇𝗀 𝗆𝗒 𝖼𝗋𝖾𝖺𝗍𝗂𝗈𝗇𝖽 𝗌𝗍𝖺𝗒 𝖺𝗁𝖾𝖺𝖽 𝗈𝖿 𝗍𝗁𝖾 𝖼𝗎𝗋𝗏𝖾 𝖺𝗇𝖽 𝗉𝗎𝗌𝗁 𝖻𝗈𝗎𝗇𝖽𝖺𝗋𝗂𝖾𝗌 𝗈𝖿 𝗐𝗁𝖺𝗍𝗌 𝗉𝗈𝗌𝗌𝗂𝖻𝗅𝖾. 𝖬𝗒 𝗉𝖺𝗌𝗌𝗂𝗈𝗇 𝖿𝗈𝗋 𝗍𝖾𝖼𝗁𝗇𝗈𝗅𝗈𝗀𝗒 𝗂𝗌 𝗆𝖺𝗍𝖼𝗁𝖾𝖽 𝗈𝗇𝗅𝗒 𝖻𝗒 𝗆𝗒 𝖾𝗇𝗍𝗁𝗎𝗌𝗂𝖺𝗌𝗆 𝖿𝗈𝗋 𝖼𝗈𝗇𝗇𝖾𝖼𝗍𝗂𝗇𝗀 𝗐𝗂𝗍𝗁 𝗅𝗂𝗄𝖾-𝗆𝗂𝗇𝖽𝖾𝖽 𝗂𝗇𝖽𝗂𝗏𝗂𝖽𝗎𝖺𝗅𝗌 𝖺𝗇𝖽 𝗅𝖾𝖺𝗋𝗂𝗇𝗀 𝖿𝗋𝗈𝗆 𝖾𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾𝗌.*

*𝖨𝖿 𝗒𝗈𝗎'𝗋𝖾 𝗂𝗇𝗍𝖾𝗋𝖾𝗌𝗍𝖾𝖽 𝗂𝗇 𝗅𝖾𝖺𝗋𝗇𝗂𝗇𝗀 𝗆𝗈𝗋𝖾 𝖺𝖻𝗈𝗎𝗍 𝗆𝗒 𝗐𝗈𝗋𝗄, 𝖾𝗑𝗉𝗅𝗈𝗋𝗂𝗇𝗀 𝗍𝗁𝖾 𝗉𝗈𝗌𝗌𝗂𝖻𝗂𝗅𝗂𝗍𝗂𝖾𝗌 𝗈𝖿 𝖠𝖨 𝗈𝗋 𝗃𝗎𝗌𝗍 𝗐𝖺𝗇𝗍 𝗍𝗈 𝖼𝗁𝖺𝗍 𝖺𝖻𝗈𝗎𝗍 𝖺𝖻𝗈𝗎𝗍 𝗍𝖾𝖼𝗁, 𝗅'𝖽 𝗅𝗈𝗏𝖾 𝗍𝗈 𝗁𝖾𝖺𝗋 𝖿𝗋𝗈𝗆 𝗒𝗈𝗎. 💬*

> *𝖦𝖾𝗍 𝗂𝗇 𝗍𝗈𝗎𝖼𝗁 𝗐𝗂𝗍𝗁 𝗆𝖾 𝖽𝗂𝗋𝖾𝖼𝗍𝗅𝗒 𝗈𝗇 𝗐𝗁𝖺𝗍𝗌𝖺𝗉𝗉: (wa.me/26371777643).*

> *𝗍𝗁𝖺𝗇𝗄 𝗒𝗈𝗎.*
`

await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync Menu.png` },
                caption: madeMenu,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '🪀『 Techsync~MD Intro 』🪀 ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://raw.githubusercontent.com/mvelase-ofc/Techsync/refs/heads/main/data-base/Techsync-autovoice/owner.m4a
        await conn.sendMessage(from, { //https://raw.githubusercontent.com/mvelase-ofc/Techsync/refs/heads/main/data-base/Techsync-autovoice/owner.m4a
            audio: { url: 'https://raw.githubusercontent.com/mvelase-ofc/Techsync/refs/heads/main/techsync/Techsync-autovoice/Techsync-menu.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

