/*
       𓋜  ＢＯＴ ＮＡＭＥ ⇩
         
        Ｔｅｃｈｓｙｎｃ
         
       𓋜 ＢＯＴ ＯＷＮＥＲ ⇩
         
         Ｋｈｕｌｅｋａｎｉ Ｍｖｅｌａｓｅ
         
       𓋜 ＤＥＶＥＬＯＰＥＲ ⇩
         
         Ｍｖｅｌａｓｅ Ｔｅｃｈｎｏｌｏｇｙ
         
       𓋜 ＤＥＶ ＬＯＣＡＴＩＯＮ ⇩
         
         Ｚｉｍｂａｂｗｅ,Ｂｕｌａｗａｙｏ
         
       𓋜 ＴＥＡＭ ＮＡＭＥ ⇩
         
         Ｔｅｃｈｇｕｙｓ
         
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
*welcome 2 mvelase tech hub.*

*Hello there, I go by the name Khulekani, lm a driven and passionate bot developer 🤖 with a keen interest in harnessing the power of technology to simplify interactions and enhance user experiences. 💻*

*With a solid foundation in artificial intelligence 🤓 and machine learning, I've had the privilege of creating my own innovative bot 🎉, designed to provide exceptional user experiences and make life easier for all who interact with it. 💬*

*As a developer, I'm constantly seeking ways to improve and expand my skills 📚, ensuring my creations stay ahead of the curve and push the boundaries of what's possible. 🚀 My passion for technology is matched only by my enthusiasm for connecting with like-minded individuals 🤝 and learning from their experiences.*

*If you're interested in learning more about my work 📊, exploring the possibilities of AI and machine learning 🤖, or just want to chat about the latest tech trends 📱, I'd love to hear from you! 💬*

> ~*Get in touch with me directly on whatsapp: (wa.me/263711337094) 📲*~

> *thank you*

`

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sdv3qh.png` },
                caption: madeMenu,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '🪀『 ᴍᴠᴇʟᴀsᴇ ᴛᴇᴄʜ ʜᴜʙ. 』🪀 ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://raw.githubusercontent.com/mvelase-ofc/Techsync/refs/heads/main/data-base/Techsync-autovoice/owner.m4a
        await conn.sendMessage(from, { //https://raw.githubusercontent.com/mvelase-ofc/Techsync/refs/heads/main/data-base/Techsync-autovoice/owner.m4a
            audio: { url: 'https://raw.githubusercontent.com/mvelase-ofc/Techsync/refs/heads/main/data-base/Techsync-autovoice/owner.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

