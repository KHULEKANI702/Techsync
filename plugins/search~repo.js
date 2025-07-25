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
const { cmd } = require("../command");

cmd({
  pattern: "srepo",
  desc: "Fetch information about a GitHub repository.",
  category: "other",
  react: "🍃",
  filename: __filename
}, async (conn, m, store, { from, args, reply }) => {
  try {
    const repoName = args.join(" ");
    if (!repoName) {
      return reply("❌ *`Please provide a GitHub repository in the format 📌 owner/repo`*.");
    }

    const apiUrl = `https://api.github.com/repos/${repoName}`;
    const { data } = await axios.get(apiUrl);

    let responseMsg = `📁 *GitHub Repository Info* 📁\n\n`;
    responseMsg += `📌 *Name*: *${data.name}*\n`;
    responseMsg += `🔗 *URL*: *${data.html_url}*\n`;
    responseMsg += `📝 *Description*: *${data.description* || "*No description*"}\n`;
    responseMsg += `⭐ *Stars*: *${data.stargazers_count}*\n`;
    responseMsg += `🍴 *Forks*: *${data.forks_count}*\n`;
    responseMsg += `👤 *Owner*: *${data.owner.login}*\n`;
    responseMsg += `📅 *Created At*: *${new Date(data.created_at).toLocaleDateString()}*\n`;
    responseMsg += `\n> *Powered by Mvelase Technology*`;

    await conn.sendMessage(from, { text: responseMsg }, { quoted: m });
  } catch (error) {
    console.error("*GitHub API Error:*", error);
    reply(`❌ *Error fetching repository data:* ${error.response?.data?.message || error.message}`);
  }
});