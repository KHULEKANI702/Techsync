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




const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { cmd } = require("../command");

cmd({
  pattern: "tourl",
  alias: ["imgtourl", "img2url", "url"],
  react: "🖇",
  desc: "Convert an image to a URL using ImgBB.",
  category: "utility",
  use: ".tourl (Reply to an image)",
  filename: __filename
}, async (conn, m, store, { from, quoted, reply, sender }) => {
  try {
    const targetMsg = quoted ? quoted : m;
    const mimeType = (targetMsg.msg || targetMsg).mimetype || "";

    if (!mimeType || !mimeType.startsWith("image")) {
      return reply("❌ *`Please reply to an image.`*");
    }

    reply("🔄 Uploading image...");

    const imageBuffer = await targetMsg.download();
    const tempFilePath = path.join(os.tmpdir(), "temp_image.jpg");
    fs.writeFileSync(tempFilePath, imageBuffer);

    const formData = new FormData();
    formData.append("image", fs.createReadStream(tempFilePath));

    const { data } = await axios.post("https://api.imgbb.com/1/upload?key=e909ac2cc8d50250c08f176afef0e333", formData, {
      headers: formData.getHeaders(),
    });

    fs.unlinkSync(tempFilePath); // Delete temp file

    if (!data || !data.data || !data.data.url) {
      throw "❌ *Failed to upload the image.*";
    }

    const imageUrl = data.data.url;
    const msgContext = {
      mentionedJid: [sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363411325763461@newsletter",
        newsletterName: 'Techsync~MD',
        serverMessageId: 143
      }
    };

    await conn.sendMessage(from, {
      text: `✅ *Image Uploaded Successfully 📸*\n📏 *Size:* ${imageBuffer.length} *Bytes*\n🔗 *URL:* ${imageUrl}\n\n> ⚖️ *Uploaded via Techsync*`,
      contextInfo: msgContext
    });

  } catch (error) {
    reply("❌ Error: " + error.message);
    console.error("Upload Error:", error);
  }
});
