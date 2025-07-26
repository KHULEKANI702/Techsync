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
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🍁",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭───⟮ *${config.BOT_NAME}* ⟯──┈⊷
│• *ʜᴇʟʟᴏ* 👋 *${m.pushName}*
┗─┬─⊷   
╭─┴─⊷
│⚙ *𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎. ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ʙᴏᴛ*
┗─────────────────┈⊷
┏────────━━───────┈⊷
│• *📜ᴘʀᴇｆɪx : .*
│• *🔊ᴍᴏᴅᴇ : ᴘᴜʙʟɪᴄ*
│• *🏀ʙᴀɪʟᴇʏs : ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴅᴇ*
│• *📝ᴘʟᴀᴛᴇfᴏʀᴍ : ʟɪɴᴜx*
│• *⏳️ᴛʏᴘᴇ : ɴᴏᴅᴇᴊs*
│• *🏷ʙᴏᴛ-ᴏᴡɴᴇʀ* : *${config.OWNER_NAME}*
│• *📼ʀᴀᴍ-ᴜsᴀɢᴇ* : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*
│• *🍁ʀᴜɴᴛɪᴍᴇ-ᴜᴘᴛɪᴍᴇ* :  *${runtime(process.uptime())}*
│• *📚ᴛᴇᴄʜsʏɴᴄ-ᴠᴇʀsɪᴏɴ : 4.7.0*
┗────────━━───────┈⊷
          
┏────❲ *ᴍᴇɴᴜ-ʟɪsᴛ* ❳───┈⊷
│✧┏─────────────┈⊷
│✧│ *ᴍᴀɪᴍᴇɴᴜ*
│✧│ *ɢʀᴏᴜᴘᴍᴇɴᴜ*
│✧│ *ᴀɪᴍᴇɴᴜ*
│✧│ *ᴀʟʟᴍᴇɴᴜ*
│✧│ *ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ*
│✧│ *ᴀɴɪᴍᴇᴍᴇɴᴜ*
│✧│ *ᴏᴛʜᴇʀᴍᴇɴᴜ*
│✧│ *ʟɪsᴛᴄᴍᴅ*
│✧│ *ᴘʀᴀʏᴇʀᴛɪᴍᴇ*
│✧│ *fᴜɴᴍᴇɴᴜ*
│✧│ *ᴅʟᴍᴇɴᴜ*
│✧│ *ᴏᴡɴᴇʀᴍᴇɴᴜ*
│✧│ *ʟᴏɢᴏ ⟮ᴛᴇxᴛ⟯*
│✧│ *ʀᴇᴘᴏ*
│✧┗─────────────┈⊷
┗────────────────┈⊷

> *${config.DESCRIPTION}*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync Menu.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'Techsync~MD 𝖬𝖾𝗇𝗎',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://raw.githubusercontent.com/mvelase-ofc/Techsync/refs/heads/main/techsync/Techsync-autovoice/Techsync-menu.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏────❲ *ᴅᴏᴡɴʟᴏᴀᴅ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ *fᴀᴄᴇʙᴏᴏᴋ*
│➪│ *ᴛɪᴋᴛᴏᴋ*
│➪│ *ᴛᴡɪᴛᴛᴇʀ*
│➪│ *ɪɴsᴛᴀ*
│➪│ *ᴀᴘᴋ*
│➪│ *ᴘʟᴀʏᴘʀᴏ*
│➪│ *ɪᴍɢ*
│➪│ *ᴛᴛʀ*
│➪│ *ᴘɪɴs*
│➪│ *ᴀᴘᴋ2*
│➪│ *ᴍᴇᴅɪᴀfɪʀᴇ*
│➪│ *fʙ*
│➪│ *ᴘɪɴᴛᴇʀᴇsᴛ*
│➪│ *sᴘᴏᴛɪfʏ*
│➪│ *ᴘʟᴀʏ*
│➪│ *ᴀᴜᴅɪᴏ*
│➪│ *ᴠɪᴅᴇᴏ*
│➪│ *ᴘʟᴀʏᴘʀᴏ*
│➪│ *sᴏɴɢ*
│➪│ *ᴅᴏɢ*
│➪│ *ᴄᴀᴛ*
│➪│ *ᴅᴀʀᴀᴍᴀ*
│➪│ *ɢᴅʀɪᴠᴇ*
│➪│ *ssᴡᴇʙ*
│➪│ *ᴛɪᴋs*
│➪┗─────────────┈⊷
┗────────────────┈⊷
> *${config.DESCRIPTION}*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync Menu.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '𝖳𝖾𝖼𝗁𝗌𝗒𝗇𝖼~𝖬𝖣 𝖽𝗅𝗆𝖾𝗇𝗎',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `┏────❲ *ɢʀᴏᴜᴘ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ *ɢʀᴏᴜᴘʟɪɴᴋ*
│➪│ *ᴋɪᴄᴋᴀʟʟ*
│➪│ *ᴋɪᴄᴋᴀʟʟ2*
│➪│ *ᴋɪᴄᴋᴀʟʟ3*
│➪│ *ᴀᴅᴅ*
│➪│ *ʀᴇᴍᴏᴠᴇ*
│➪│ *ᴋɪᴄᴋ*
│➪│ *ᴘʀᴏᴍᴏᴛᴇ*
│➪│ *ᴏᴘᴇɴᴛɪᴍᴇ*
│➪│ *ᴄʟᴏsᴇᴛɪᴍᴇ*
│➪│ *ᴅᴇᴍᴏᴛᴇ*
│➪│ *ᴅɪsᴍɪss*
│➪│ *ʀᴇᴠᴏᴋᴇ*
│➪│ *sᴇᴛɢᴏᴏᴅʙʏᴇ*
│➪│ *sᴇᴛᴡᴇʟʟᴄᴏᴍᴇ*
│➪│ *ᴅᴇʟᴇᴛᴇ*
│➪│ *ɢᴇᴛᴘɪᴄ*
│➪│ *ɢɪɴfᴏ*
│➪│ *ᴅᴇʟᴇᴛᴇ* 
│➪│ *ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
│➪│ *ᴅɪsᴀᴘᴘᴇᴀʀ ᴏff*
│➪│ *ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ,24ʜ*
│➪│ *ᴀʟʟʀᴇϙ*
│➪│ *ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
│➪│ *ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴋ*
│➪│ *ᴊᴏɪɴʀᴇϙᴜᴇsᴛs*
│➪│ *sᴇɴᴅᴅᴍ*
│➪│ *ɴɪᴋᴀʟ*
│➪│ *ᴍᴜᴛᴇ*
│➪│ *ᴜɴᴍᴜᴛᴇ*
│➪│ *ʟᴏᴄᴋɢᴄ*
│➪│ *ᴜɴʟᴏᴄᴋɢᴄ*
│➪│ *ɪɴᴠɪᴛᴇ*
│➪│ *ᴛᴀɢ*
│➪│ *ʜɪᴅᴇᴛᴀɢ*
│➪│ *ᴛᴀɢᴀʟʟ*
│➪│ *ᴛᴀɢᴀᴅᴍɪɴs*
│➪┗─────────────┈⊷
┗────────────────┈⊷
> *${config.DESCRIPTION}*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync Menu.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'Techsync~MD 𝗀𝗋𝗈𝗎𝗉𝗆𝖾𝗇𝗎',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `┏────❲ *fᴜɴ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ *sʜᴀᴘᴀʀ*
│➪│ *ʀᴀᴛᴇ*
│➪│ *ɪɴsᴜʟᴛ*
│➪│ *ʜᴀᴄᴋ*
│➪│ *sʜɪᴘ*
│➪│ *ᴄʜᴀʀᴀᴄᴛᴇʀ*
│➪│ *ᴘɪᴄᴋᴜᴘ*
│➪│ *ᴊᴏᴋᴇ*
│➪│ *ʜʀᴛ*
│➪│ *ʜʏᴘ*
│➪│ *sʏᴅ*
│➪│ *ᴀɴɢᴇʀ*
│➪│ *sʜʏ*
│➪│ *ᴋɪss*
│➪│ *ᴍᴏɴ*
│➪│ *ᴄᴏɴfᴜɴᴄᴇᴅ*
│➪│ *sᴇᴛᴘᴘ*
│➪│ *ʜᴀɴᴅ*
│➪│ *ɴɪᴋᴀʟ*
│➪│ *ʜᴏʟf*
│➪│ *ʜᴜɢ*
│➪│ *ʜɪfɪ*
│➪│ *ᴘᴏᴋᴇ*
│➪┗─────────────┈⊷
┗────────────────┈⊷
> *${config.DESCRIPTION}*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync Menu.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'Techsync~MD 𝖿𝗎𝗇𝗆𝖾𝗇𝗎',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏────❲ *ᴏᴛʜᴇʀ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ *ᴛɪᴍᴇɴᴏᴡ*
│➪│ *ᴅᴀᴛʀ*
│➪│ *ᴄᴏᴜɴᴛ*
│➪│ *ᴄᴀʟᴄᴜʟᴀᴛᴏʀ*
│➪│ *ᴄᴏᴜɴᴛx*
│➪│ *fʟɪᴘ*
│➪│ *ᴄᴏɪɴfʟɪᴘ*
│➪│ *ʀᴄᴏʟᴏᴜʀ*
│➪│ *ʀᴏʟʟ*
│➪│ *fᴀᴄᴛ*
│➪│ *ᴄᴘᴘ*
│➪│ *ʀᴡ*
│➪│ *ᴘᴀɪʀ*
│➪│ *fᴀɴᴄʏ*
│➪│ *ʟᴏɢᴏ ⟮ᴛᴇxᴛ⟯*
│➪│ *ᴅᴇfɪɴᴇ*
│➪│ *ɴᴇᴡs*
│➪│ *ᴍᴏᴠɪᴇ*
│➪│ *ᴡᴇᴀᴛʜᴇʀ*
│➪│ *sʀᴇᴘᴏ*
│➪│ *ɪɴsᴜʟᴛ*
│➪│ *sᴀᴠᴇ*
│➪│ *ᴡɪᴋɪᴘᴇᴅɪᴀ*
│➪│ *ɢᴘᴀss*
│➪│ *ɢɪᴛʜᴜɴsᴛᴀʟᴋ*
│➪│ *ʏᴛs*
│➪│ *ʏᴛᴠ*
│➪┗─────────────┈⊷
┗────────────────┈⊷
> *${config.DESCRIPTION}*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync Menu.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '*Techsync~MD 𝗈𝗍𝗁𝖾𝗋𝗆𝖾𝗇𝗎*',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏────❲ *ᴍᴀɪɴ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ *ᴘɪɴɢ*
│➪│ *ᴘɪɴɢ2*
│➪│ *sᴘᴇᴇᴅ
│➪│ *ʟɪᴠᴇ*
│➪│ *ᴀʟɪᴠᴇ*
│➪│ *ᴀʟɪᴠᴇ2*
│➪│ *ᴀʟɪᴠᴇ3*
│➪│ *ʀᴜɴᴛɪᴍᴇ*
│➪│ *ʟɪsᴛᴘʟᴜɢɪɴs*
│➪│ *ᴘʟᴜɢɪɴ*
│➪│ *ᴠᴇʀsɪᴏɴ*
│➪│ *ᴠᴇʀsɪᴏɴ2*
│➪│ *ᴜᴘᴅᴀᴛᴇ*
│➪│ *ᴄʜᴇᴄᴋ*
│➪│ *ᴜᴘᴛɪᴍᴇ*
│➪│ *ʀᴇᴘᴏ*
│➪│ *ᴏᴡɴᴇʀ*
│➪│ *ᴍᴇɴᴜ*
│➪│ *ᴍᴇɴᴜ2*
│➪│ *ᴍᴠᴇʟᴀsᴇ*
│➪│ *ʀᴇsᴛᴀʀᴛ*
│➪│ *sʏsᴛᴇᴍ*
│➪┗─────────────┈⊷
┗────────────────┈⊷
> *${config.DESCRIPTION}*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync Menu.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'Techsync~MD 𝗆𝖺𝗂𝗇𝗆𝖾𝗇𝗎',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏────❲ *ᴏᴡɴᴇʀ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ *ᴏᴡɴᴇʀ*
│➪│ *ᴍᴇɴᴜ*
│➪│ *ᴍᴇɴᴜ2*
│➪│ *ᴠᴠ*
│➪│ *ᴄᴍᴅᴜᴘᴅᴀᴛᴇ*
│➪│ *ʟɪsᴛᴄᴍᴅ*
│➪│ *ᴀʟʟᴍᴇɴᴜ*
│➪│ *ʀᴇᴘᴏ*
│➪│ *ʙʟᴏᴄᴋ*
│➪│ *ᴜɴʙʟᴏᴄᴋ*
│➪│ *fᴜʟʟᴘᴘ*
│➪│ *ᴍᴠᴇʟᴀsᴇ*
│➪│ *ɢɪᴛᴄʟᴏɴᴇ*
│➪│ *ᴄᴏᴜɴᴛʀʏɪɴfᴏ*
│➪│ *sᴇᴛᴘᴘ*
│➪│ *ʀᴇsᴛᴀʀᴛ*
│➪│ *sʜᴜᴛᴅᴏᴡɴ*
│➪│ *ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
│➪│ *ᴠᴇʀsɪᴏɴ*
│➪│ *ᴠᴇʀsɪᴏɴ2*
│➪│ *ᴜᴘᴅᴀᴛᴇ*
│➪│ *ʟɪsᴛᴘʟᴜɢɪɴs*
│➪│ *ᴘʟᴜɢɪɴ*
│➪│ *ᴀʟɪᴠᴇ*
│➪│ *ᴀʟɪᴠᴇ2*
│➪│ *ᴀʟɪᴠᴇ3*
│➪│ *ᴘɪɴɢ*
│➪│ *ᴘɪɴɢ2*
│➪│ *ɢᴊɪᴅ*
│➪│ *ᴊɪᴅ*
│➪┗─────────────┈⊷
┗────────────────┈⊷
> *${config.DESCRIPTION}*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync Menu.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'Techsync~MD 𝗈𝗐𝗇𝖾𝗋𝗆𝖾𝗇𝗎',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏────❲ *ᴄᴏɴᴠᴇʀᴛ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ *sᴛɪᴄᴋᴇʀ*
│➪│ *sᴛɪᴄᴋᴇʀ 2*
│➪│ *ᴇᴍᴏᴊɪᴍɪᴄ*
│➪│ *ᴛᴀᴋᴇ*
│➪│ *ᴛᴏᴍᴘ3*
│➪│ *ᴛᴛs*
│➪│ *ᴛᴛʀ*
│➪│ *ʙᴀsᴇ64*
│➪│ *ᴜɴʙᴀsᴇ64*
│➪│ *ʙɪɴᴀʀʏ*
│➪│ *ᴅʙɪɴᴀʀʏ*
│➪│ *ᴛɪɴʏᴜʀʟ*
│➪│ *ᴜʀʟ*
│➪│ *ʀᴇᴘᴇᴀᴛ*
│➪│ *ᴀsᴋ*
│➪│ *ʀᴇᴀᴅᴍᴏʀᴇ*
│➪│ *ᴄᴏɴᴠᴇʀᴛᴍᴏɴᴇʏ*
│➪┗─────────────┈⊷
┗────────────────┈⊷
> *${config.DESCRIPTION}*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync Menu.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'Techsync~MD 𝖼𝗈𝗇𝗏𝖾𝗋𝗍𝗆𝖾𝗇𝗎',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `┏────❲ *ᴀɴɪᴍᴇ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ *fᴀᴄᴋ*
│➪│ *ᴛʀᴜᴛʜ*
│➪│ *ᴅᴀʀᴇ*
│➪│ *ᴅᴏɢ*
│➪│ *ᴀᴡᴏᴏ*
│➪│ *ɢᴀʀʟ*
│➪│ *ɴᴇᴋᴏ*
│➪│ *ᴍᴇɢɴᴜᴍɪɴ*
│➪│ *ɴᴇᴋᴏ*
│➪│ *ᴍᴀɪᴅ*
│➪│ *ʟᴏʟɪ*
│➪│ *ᴀɴɪᴍᴇɢɪʀʟ*
│➪│ *ᴀɴɪᴍᴇɢɪʀʟ1*
│➪│ *ᴀɴɪᴍᴇɢɪʀʟ2*
│➪│ *ᴀɴɪᴍᴇɢɪʀʟ3*
│➪│ *ᴀɴɪᴍᴇɢɪʀʟ4*
│➪│ ᴀɴɪᴍᴇɢɪʀʟ5*
│➪│ *ᴀɴɪᴍᴇ1*
│➪│ *ᴀɴɪᴍᴇ2*
│➪│ *ᴀɴɪᴍᴇ3*
│➪│ *ᴀɴɪᴍᴇ4*
│➪│ *ᴀɴɪᴍᴇ5*
│➪│ *ᴀɴɪᴍᴇɴᴇᴡs*
│➪│ *ƒᴏxɢɪᴛʟ*
│➪│ *ɴᴀʀᴜᴛᴏ*
│➪┗─────────────┈⊷
┗────────────────┈⊷
> *${config.DESCRIPTION}*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync Menu.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'Techsync~MD 𝖺𝗇𝗂𝗆𝖾𝗆𝖾𝗇𝗎',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏─────❲ *ᴀɪ-ᴍᴇɴᴜ* ❳────┈⊷
│➪┏─────────────┈⊷
│➪│ *ᴀɪ*
│➪│ *ɢᴘᴛ1*
│➪│ *ɢᴘᴛ2*
│➪│ *ɢᴘᴛɢᴇᴍɪɴɪ*
│➪│ *ɢᴘᴛ*
│➪│ *ᴍᴇᴛᴀ*
│➪│ *ʙʟᴀᴄᴋʙᴏx*
│➪│ *ʟᴜᴍᴀ*
│➪│ *ᴅᴊ*
│➪│ *ɢᴘᴛ4*
│➪│ *ʙɪɴɢ*
│➪│ *ɪᴍᴀɢɪɴᴇ*
│➪│ *ɪᴍᴀɢɪɴᴇ2*
│➪│ *ᴄᴏᴘɪʟᴏᴛ*
│➪┗─────────────┈⊷
┗────────────────┈⊷
> *${config.DESCRIPTION}*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync Menu.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'Techsync~MD 𝖺𝗂𝗆𝖾𝗇𝗎',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
