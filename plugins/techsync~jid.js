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





const { cmd } = require('../command');

cmd({
    pattern: "jid1",
    desc: "Get the JID of the user or group.",
    react: "📍",
    category: "group",
    filename: __filename,
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Check if the user has the necessary permissions (Owner or Admin)
        if (!isGroup && !isOwner) {
            return reply("⚠️ *`Only the bot owner or group admins can use this command.`*");
        }

        // If it's a group, reply with the group JID
        if (isGroup) {
            return reply(`*Group JID:* *${from}@g.us*`);
        }

        // If it's a personal chat, reply with the user's JID
        if (!isGroup) {
            return reply(`*User JID:* *${sender}@s.whatsapp.net*`);
        }

    } catch (e) {
        console.error("Error:", e);
        reply(`❌ *An error occurred: ${e.message}*`);
    }
});


// jid2

cmd({
    pattern: "jid2",
    desc: "Get the JID of the user or group.",
    react: "📍",
    category: "group",
    filename: __filename,
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Ensure the command is being used in a group or personal chat and the user has necessary permissions
        if (!isGroup && !isOwner) {
            return reply("⚠️ *Only the bot owner or group admins can use this command.*");
        }

        // If the message is from a group
        if (isGroup) {
            // Respond with the group JID
            return reply(`*Group JID:* *${from}@g.us*`);
        }

        // If it's a personal chat, respond with the user's JID
        if (!isGroup) {
            return reply(`*User JID:* *${sender}@s.whatsapp.net*`);
        }

    } catch (e) {
        console.error("*Error:*", e);
        reply(`❌ *An error occurred: ${e.message}*`);
    }
});
