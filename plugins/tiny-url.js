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
const { cmd, commands } = require('../command');
const axios = require("axios");


/*
cmd({
  pattern: "tinyurl",
  alias: ["shorten", "shorturl"],
  desc: "Shorten a long URL using TinyURL.",
  category: "utility",
  use: ".tinyurl <long_url>",
  filename: __filename,
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const longUrl = args[0];
    if (!longUrl) {
      return reply("❌ Please provide a valid URL. Example: `.tinyurl https://example.com/very-long-url`");
    }

    // Validate the URL
    if (!longUrl.startsWith("http://") && !longUrl.startsWith("https://")) {
      return reply("❌ Invalid URL. Please include 'http://' or 'https://'.");
    }

    // Shorten the URL using TinyURL API
    const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
    const shortUrl = response.data;

    // Send the shortened URL
    reply(`🔗 *Shortened URL*:\n\n${shortUrl}`);
  } catch (error) {
    console.error("Error shortening URL:", error);
    reply("❌ Unable to shorten the URL. Please check the URL and try again.");
  }
});
*/


cmd({
  pattern: "tinyurl",
  alias: ["shorten", "shorturl", "tiny"],
  desc: "Shorten a long URL using TinyURL with an optional custom alias.",
  category: "utility",
  use: ".tinyurl <long_url>|<alias>",
  filename: __filename,
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const input = args.join(" ");
    const [longUrl, alias] = input.split("|");

    if (!longUrl) {
      return reply("❌ Ppease provide a valid URL. Example: `.tinyurl https://example.com/very-long-url`");
    }

    // Validate the URL
    if (!longUrl.startsWith("http://") && !longUrl.startsWith("https://")) {
      return reply("❌ Invalid URL. Please include 'http://' or 'https://'.");
    }

    let shortUrl;

    if (alias) {
      // Check if the alias is already taken
      const aliasCheckUrl = `https://tinyurl.com/${alias}`;
      try {
        const aliasCheckResponse = await axios.head(aliasCheckUrl);
        if (aliasCheckResponse.status === 200) {
          return reply(`❌ The alias '${alias}' is already taken. Please choose another alias.`);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Alias is available, create the custom URL
          shortUrl = `https://tinyurl.com/${alias}`;
        } else {
          throw error;
        }
      }
    } else {
      // Shorten the URL using TinyURL API
      const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
      shortUrl = response.data;
    }

    // Create the caption for the status message
    const caption = `*ᴛᴇᴄʜsʏɴᴄ ᴜʀʟ sʜᴏʀᴛᴇʀ*
    
 *ᴏʀɪɢɪɴᴀʟ ʟɪɴᴋ :* ${longUrl}\n\n
 *sʜᴏʀᴛᴇɴᴇᴅ ʟɪɴᴋ :* ${shortUrl}\n\n
 
> ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ
 
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴠᴇʟᴀsᴇ ᴛᴇᴄʜ ʜᴜʙ.`;

    // Send the status message with an image
    await conn.sendMessage(from, {
      image: { url: `https://files.catbox.moe/sdv3qh.png` }, // Image URL
      caption: caption,
      contextInfo: {
        mentionedJid: [mek.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363411325763461@newsletter',
          newsletterName: 'ᴛᴇᴄʜsʏɴᴄ ᴜʀʟ sʜᴏʀᴛᴇʀ',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

  } catch (error) {
    console.error("Error shortening URL:", error);
    reply(`❌ An error occurred: ${error.message}`);
  }
});
