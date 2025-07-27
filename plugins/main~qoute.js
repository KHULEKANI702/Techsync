const { cmd } = require('../command');
const axios = require('axios');
const config = require('../config');

cmd({
  pattern: "quote2",
  desc: "Get a random inspirational quote with image",
  category: "fun",
  react: "💬",
  filename: __filename
}, async (conn, mek, m, { from, reply }) => {
  try {
    const quotedContact = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        contactMessage: {
          displayName: "PK-XMD",
          vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Techsync~MD\nORG:Techsync~MD;\nTEL;type=CELL;type=VOICE;waid=263717777643\nEND:VCARD`
        }
      }
    };

    const contextInfo = {
      forwardingScore: 999,
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363411325763461@newsletter",
        newsletterName: "Techsync~MD"
      },
      externalAdReply: {
        title: "Quote by Techsync~MD",
        body: config.botname,
        thumbnailUrl: config.LOGO,
        renderLargerThumbnail: false,
        mediaType: 1,
        sourceUrl: config.channel
      }
    };

    const { data } = await axios.get("https://zenquotes.io/api/random");
    const quote = data[0];

    const quoteText = `💭 *"${quote.q}"*\n\n— _${quote.a}_`;

    await conn.sendMessage(
      from,
      {
        image: { url: "https://files.catbox.moe/jt3qb1.png" },
        caption: quoteText,
        contextInfo
      },
      { quoted: quotedContact }
    );

  } catch (e) {
    console.error(e);
    reply("❌ Error fetching quote.");
  }
});
        
