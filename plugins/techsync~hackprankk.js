const { cmd } = require('../command');
const config = require('../config');

cmd({
  pattern: "techsynchack",
  desc: "Fake hack someone just for fun",
  category: "fun",
  use: "<@user | number | name>",
  react: "👨‍💻",
  filename: __filename
}, async (conn, mek, m, { from, args, reply, participants }) => {
  const target = args.join(" ") || m.quoted?.sender || "";
  if (!target) return reply("👤 *`Tag or enter a target name/number to hack.`*\n*`Example: .hack @username`*");

  const contextInfo = {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363411325763461@newsletter',
      newsletterName: 'Techsync~MD',
      serverMessageId: 143
    }
  };

  const fakeHackSteps = [
    `🧠 *𝑪𝒐𝒏𝒏𝒆𝒄𝒕𝒊𝒏𝒈 𝒕𝒐 𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑 𝒔𝒆𝒓𝒗𝒆𝒓𝒔*...`,
    `💻 *𝑻𝒂𝒓𝒈𝒆𝒕 𝒇𝒐𝒖𝒏𝒅: ${target}*`,
    `🔍 *𝑹𝒆𝒕𝒓𝒊𝒆𝒗𝒊𝒏𝒈 𝒊𝒑 𝒂𝒅𝒅𝒓𝒆𝒔𝒔*...`,
    `📲 *𝑨𝒄𝒄𝒆𝒔𝒔𝒊𝒏𝒈 𝒄𝒉𝒂𝒕𝒔*...`,
    `📂 *𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅𝒊𝒏𝒈 𝒎𝒆𝒅𝒊𝒂 𝒇𝒊𝒍𝒆𝒔*...`,
    `🔓 *𝑪𝒓𝒂𝒄𝒌𝒊𝒏𝒈 𝒑𝒂𝒔𝒔𝒘𝒐𝒓𝒅...*`,
    `📡 *𝑰𝒏𝒋𝒆𝒄𝒕𝒊𝒏𝒈 𝒎𝒂𝒍𝒘𝒂𝒓𝒆*...`,
    `💥 *𝑻𝒂𝒓𝒈𝒆𝒕 ${target} 𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒉𝒂𝒄𝒌𝒆𝒅 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚!*`
  ];

  for (let step of fakeHackSteps) {
    await conn.sendMessage(from, { text: step, contextInfo }, { quoted: mek });
    await new Promise(r => setTimeout(r, 1000));
  }

  const fakeData = `
🛠️ *𝑻𝒂𝒓𝒈𝒆𝒕 𝒊𝒏𝒇𝒐:*
👤 *𝑼𝒔𝒆𝒓: ${target}*
📱 *𝑷𝒉𝒐𝒏𝒆:* +2637${Math.floor(Math.random() * 10000000).toString().padStart(7, '0')}
🔑 *𝑷𝒂𝒔𝒔𝒘𝒐𝒓𝒅:* *27𝒉𝒂𝒄𝒌𝒆𝒅77*
💌 *𝑳𝒂𝒔𝒕 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 : 𝒑𝒍𝒆𝒂𝒔𝒆 𝒅𝒐𝒏𝒕 𝒉𝒂𝒄𝒌 𝒎𝒆 😭"*

😂 *𝑱𝒖𝒔𝒕 𝒌𝒊𝒅𝒊𝒏𝒈 𝒚𝒐𝒖'𝒗𝒆 𝒑𝒓𝒂𝒏𝒌𝒆𝒅 𝒃𝒚 𝑻𝒆𝒄𝒉𝒔𝒚𝒏𝒄~𝑴𝑫*
  `;

  await conn.sendMessage(from, { text: fakeData, contextInfo }, { quoted: mek });
});
