const axios = require('axios');
const os = require('os');
const fs = require('fs');
const path = require('path');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');

cmd({
  pattern: 'version',
  alias: ["changelog", "cupdate", "checkupdate"],
  react: '🚀',
  desc: "Check bot's version, system stats, and update info.",
  category: 'info',
  filename: __filename
}, async (conn, mek, m, {
  from, sender, pushname, reply
}) => {
  try {
    // Read local version data
    const localVersionPath = path.join(__dirname, '../data/Techsync-version.json');
    let localVersion = 'Unknown';
    let changelog = 'No changelog available.';
    if (fs.existsSync(localVersionPath)) {
      const localData = JSON.parse(fs.readFileSync(localVersionPath));
      localVersion = localData.version;
      changelog = localData.changelog;
    }

    // Fetch latest version data from GitHub
    const rawVersionUrl = 'https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/data/Techsync-version.json';
    let latestVersion = 'Unknown';
    let latestChangelog = 'No changelog available.';
    try {
      const { data } = await axios.get(rawVersionUrl);
      latestVersion = data.version;
      latestChangelog = data.changelog;
    } catch (error) {
      console.error('Failed to fetch latest version:', error);
    }

    // Count total plugins
    const pluginPath = path.join(__dirname, '../plugins');
    const pluginCount = fs.readdirSync(pluginPath).filter(file => file.endsWith('.js')).length;

    // Count total registered commands
    const totalCommands = commands.length;

    // System info
    const uptime = runtime(process.uptime());
    const ramUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const totalRam = (os.totalmem() / 1024 / 1024).toFixed(2);
    const hostName = os.hostname();
    const lastUpdate = fs.statSync(localVersionPath).mtime.toLocaleString();

    // GitHub stats
    const githubRepo = 'https://github.com/mvelase-ofc/Techsync';

    // Check update status
    let updateMessage = `✅ 𝐓𝐄𝐂𝐇𝐒𝐘𝐍𝐂-𝐌𝐃 𝐈𝐒 𝐔𝐏 𝐓𝐎 𝐃𝐀𝐓𝐄`;
    if (localVersion !== latestVersion) {
      updateMessage = `🚀 𝐓𝐄𝐂𝐇𝐒𝐘𝐍𝐂-𝐌𝐃 𝐈𝐒 𝐎𝐔𝐓-𝐃𝐀𝐓𝐄𝐃!
🔸 𝐂𝐔𝐑𝐑𝐄𝐍𝐓 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : ${localVersion}
🔹 𝐋𝐀𝐓𝐄𝐒𝐓 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : ${latestVersion}

𝐔𝐒𝐄 !𝐔𝐏𝐃𝐀𝐓𝐄 𝐓𝐎 𝐔𝐏𝐃𝐀𝐓𝐄 𝐓𝐄𝐂𝐇𝐒𝐘𝐍𝐂-𝐌𝐃`;
    }

    const statusMessage = `🌟 *𝐆𝐎𝐎𝐃${new Date().getHours() < 12 ? '𝐌𝐎𝐑𝐍𝐈𝐍𝐆' : '𝐍𝐈𝐆𝐇𝐓'}, ${pushname}!* 🌟\n\n` +
      `📌 *𝐁𝐎𝐓-𝐍𝐀𝐌𝐄 : 𝐓𝐄𝐂𝐇𝐒𝐘𝐍𝐂-𝐌𝐃\n🔖 𝐂𝐔𝐑𝐑𝐄𝐍𝐓 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 :${localVersion}\n📢 𝐋𝐀𝐓𝐄𝐒𝐓 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : ${latestVersion}\n📂 𝐓𝐎𝐓𝐀𝐋 𝐏𝐋𝐔𝐆𝐈𝐍𝐒 : ${pluginCount}\n🔢 𝐓𝐎𝐓𝐀𝐋 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 : ${totalCommands}\n\n` +
      `💾 *System Info:*\n⏳ 𝐔𝐏𝐓𝐈𝐌𝐄 : ${uptime}\n📟 𝐑𝐀𝐌-𝐔𝐒𝐀𝐆𝐄 :${ramUsage}𝐌𝐁 / ${totalRam}𝐌𝐁\n⚙️ 𝐇𝐎𝐒𝐓-𝐍𝐀𝐌𝐄 : ${hostName}\n📅 𝐋𝐀𝐒𝐓 𝐔𝐏𝐃𝐀𝐓𝐄 : ${lastUpdate}\n\n` +
      `📝 𝐂𝐇𝐀𝐍𝐆𝐄𝐋𝐎𝐆 : \n${latestChangelog}\n\n` +
      `⭐ 𝐆𝐈𝐓𝐇𝐔𝐁 𝐑𝐄𝐏𝐎 : wa.me/263717777643\n\n${updateMessage}\n\n🚀 𝐇𝐄𝐋𝐋𝐎 𝐃𝐎𝐍'𝐓 𝐅𝐎𝐑𝐆𝐄𝐓 𝐓𝐎 𝐒𝐓𝐀𝐑 & 𝐅𝐎𝐑𝐊 𝐌𝐘 𝐑𝐄𝐏𝐎`;

    // Send the status message with an image
    await conn.sendMessage(from, {
      image: { url: 'https://files.catbox.moe/sdv3qh.png' },
      caption: statusMessage,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363411325763461@newsletter',
          newsletterName: 'ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ᴠᴇʀsɪᴏɴ',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });
  } catch (error) {
    console.error('Error fetching version info:', error);
    reply('❌ An error occurred while checking the bot version.');
  }
});
