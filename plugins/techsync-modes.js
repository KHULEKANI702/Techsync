const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")


cmd({
    pattern: "modes",
    alias: ["modes"],
    desc: "change modes of the bot",
    react: "⚙",
    category: "owner"

},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `
        
╭──━◊⚡⚙  ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ sᴇᴛᴛɪɴɢs ⚙⚡
│
│──────────━
│────────────────────━
│
│💼 ᴡᴏʀᴋ ᴍᴏᴅᴇ : ᴘᴜʙʟɪᴄ🌎-ᴘʀɪᴠᴀᴛᴇ.ɴᴏ ɪɴʙᴏx ʜᴇʀᴇ.
│🔊 ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ : ♻ ᴏɴ/ᴏƒƒ
│📝 ᴀᴜᴛᴏ sᴛᴀᴛᴜs : ♻ ᴏɴ/ᴏƒƒ
│📋 ᴀᴜᴛᴏ ʙɪᴏ : ♻ ᴏɴ/ᴏƒƒ
│⌨ ᴀᴜᴛᴏ ᴛʏᴘɪɴɢ : ♻ ᴏɴ/ᴏƒƒ
│🛠 ᴀᴜᴛᴏ ʀᴇᴀᴅ ᴄᴏᴍᴍᴀɴᴅ : ♻ ᴏɴ/ᴏƒƒ
┗────────────────────━◊

   🔗  *ᴄᴜsᴛᴏᴍɪᴢᴇ ʏᴏᴜʀ sᴇᴛᴛɪɴɢs* ⤵
   
⸕⸕⟝⟝ ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ sᴇʟᴇᴄᴛ

    🔧 ᴏᴘᴛɪᴏɴs ᴍᴇɴᴜ 🔧

┣━ ᴡᴏʀᴋ ᴍᴏᴅᴇ ⤵
┃   ┣ 1.1 🔹 ᴘᴜʙʟɪᴄ ᴍᴏᴅᴇ
┃   ┣ 1.2 🔹 ᴘʀɪᴠᴀᴛᴇ ᴍᴏᴅᴇ
┃   ┣ 1.3 🔹 ɢʀᴏᴜᴘ ᴏɴʟʏ
┃   ┗ 1.4 🔹 ɪɴʙᴏx ᴏɴʟʏ

┣━ ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ ⤵
┃   ┣ 2.1 🔊 ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ ᴏɴ
┃   ┗ 2.2 🔕 ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ ᴏƒƒ

┣━ ᴀᴜᴛᴏ sᴛᴀᴛᴜs sᴇᴇɴ ⤵
┃   ┣ 3.1 👁‍🗨 ᴀᴜᴛᴏ ʀᴇᴀᴅ sᴛᴀᴛᴜs ᴏɴ
┃   ┗ 3.2 👁 ᴀᴜᴛᴏ ʀᴇᴀᴅ sᴛᴀᴛᴜs ᴏƒƒ

┣━ ᴀᴜᴛᴏ ʙᴏɪ ⤵
┃   ┣ 4.1 ✍ ᴀᴜᴛᴏ ʙɪᴏ ᴏɴ
┃   ┗ 4.2 ✍ ᴀᴜᴛᴏ ʙɪᴏ ᴏƒƒ

┣━ ᴀᴜᴛᴏ ᴛʏᴘɪɴɢ ⤵
┃   ┣ 6.1 📝 ᴀᴄᴛɪᴠᴀᴛᴇ ᴀᴜᴛᴏ ᴛʏᴘɪɴɢ
┃   ┗ 6.2 📝 ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇ ᴀᴜᴛᴏ ᴛʏᴘɪɴɢ

┣━ ᴀᴜᴛᴏ ᴄᴏᴍᴍᴀɴᴅ ʀᴇᴀᴅ ⤵
┃   ┣ 7.1 🖊 ᴀᴄᴛɪᴠᴀᴛᴇ ᴀᴜᴛᴏ ᴄᴏᴍᴍᴀɴᴅ ʀᴇᴀᴅ
┃   ┗ 7.2 🖊 ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇ ᴀᴜᴛᴏ ᴄᴏᴍᴍᴀɴᴅ ʀᴇᴀᴅ
┗────────────────────━◊

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴠᴇʟᴀsᴇ ᴛᴇᴄʜ ʜᴜʙ*`;

        const vv = await conn.sendMessage(from, { image: { url:config.MENU_IMG}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply(".update MODE:public" );
                        reply(".restart");
                        break;
                    case '1.2':               
                        reply(".update MODE:private");
                        reply(".restart");
                        break;
                    case '1.3':               
                          reply(".update MODE:group");
                        reply(".restart");
                      break;
                    case '1.4':     
                        reply(".update MODE:inbox");
                        reply(".restart");
                      break;
                    case '2.1':     
                        reply(".update AUTO_VOICE:true");
                        reply(".restart");
                        break;
                    case '2.2':     
                        reply(".update AUTO_VOICE:false");
                        reply(".restart");
                    break;
                    case '3.1':    
                        reply(".update AUTO_READ_STATUS:true");
                        reply(".restart");
                    break;
                    case '3.2':    
                        reply(".update AUTO_READ_STATUS:false");
                        reply(".restart");
                    break;
                    case '4.1': 
                    reply(".update AUTO_BIO:true");
                    reply(".restart");
                    break;
                    case '4.2': 
                    reply(".update AUTO_BIO:false");
                    reply(".restart");
                    break;
                    case '5.1':      
                        reply(".update AUTO_TYPING:true");
                        reply(".restart");
                        break;
                    case '5.2':   
                        reply(".update AUTO_TYPING:false");
                        reply(".restart");
                    break;
                    case '6.1': 
                        reply(".update AUTO_READ_CMD:true");
                        reply(".restart");
                    break;
                    case '6.2':   
                        reply(".update AUTO_READ_CMD:false");
                        reply(".restart");
                    
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
