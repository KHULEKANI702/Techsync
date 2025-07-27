const { cmd } = require('../command');
const moment = require('moment-timezone');

cmd({
  pattern: "uptime2",
  alias: ["up"],
  desc: "Check how long the bot has been online.",
  category: "system",
  filename: __filename,
}, async (Void, m, text) => {
  const runtime = () => {
    let seconds = process.uptime();
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = Math.floor(seconds % 60);
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const fakeContact = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      contactMessage: {
        displayName: "Techsync~MD",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Techsync~MD\nORG:Techsync~MD;\nTEL;type=CELL;type=VOICE;waid=263717777643\nEND:VCARD`,
        jpegThumbnail: Buffer.alloc(0)
      }
    }
  };

  const uptimeText = `*🤖 Techsync~MD Bot Uptime:*\n🕒 ${runtime()}\n\n💡 *The bot has been running without interruption.*`;

  await Void.sendMessage(m.chat, {
    text: uptimeText,
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363411325763461@newsletter",
        newsletterName: "Techsync~MD"
      },
      externalAdReply: {
        title: "Techsync~MD",
        body: "Uptime Monitor by Techsync~MD",
        thumbnailUrl: "https://files.catbox.moe/jt3qb1.png",
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true,
        sourceUrl: "https://github.com/mejjar00254"
      }
    }
  }, { quoted: fakeContact });
});
