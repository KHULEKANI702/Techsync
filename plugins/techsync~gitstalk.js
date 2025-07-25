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





const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "githubstalk",
    desc: "Fetch detailed GitHub user profile including profile picture.",
    category: "menu",
    react: "🖥️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const username = args[0];
        if (!username) {
            return reply("*Please provide a GitHub username.*");
        }
        const apiUrl = `https://api.github.com/users/${username}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        let userInfo = `👤 *ᴜsᴇʀɴᴀᴍᴇ* : *${data.name || data.login}*
🔗 *ɢɪᴛʜᴜʙ ᴜʀʟ* : *(${data.html_url})*
📝 *ʙɪᴏ* : *${data.bio || 'Not available'}*
🏙️ *ʟᴏᴄᴀᴛɪᴏɴ* : *${data.location || 'Unknown'}*
📊 *ᴘᴜʙʟɪᴄ ʀᴇᴘᴏs* : *${data.public_repos}*
👥 *ƒᴏʟʟᴏᴡᴇʀs*: *${data.followers} | Following: ${data.following}*
📅 *ᴄʀᴇᴀᴛᴇᴅ ᴀᴛ* : *${new Date(data.created_at).toDateString()}*
🔭 *ᴘᴜʙʟɪᴄ ɢɪsᴛs* : *${data.public_gists}*

> *ᴍᴠᴇʟᴀsᴇ ᴛᴇᴄʜɴᴏʟᴏɢʏ*`;
          const sentMsg = await conn.sendMessage(from,{image:{url: data.avatar_url },caption: userInfo },{quoted:mek })
    } catch (e) {
        console.log(e);
        reply(`error: ${e.response ? e.response.data.message : e.message}`);
    }
});

// coded by mvelase technology 
 
