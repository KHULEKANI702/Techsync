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






const {cmd , commands} = require('../command');

cmd({
    pattern: "hack",
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: "fun",
    react: "🔖",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const steps = [
            '⏳️ *𝑻𝑬𝑪𝑯𝑺𝒀𝑵𝑪~𝑴𝑫 𝑯𝑨𝑪𝑲𝑰𝑵𝑮 𝑯𝑨𝑺 𝑺𝑻𝑨𝑹𝑻𝑬𝑫...* 🚬',
            '',
            '*𝒊𝒏𝒊𝒕𝒊𝒂𝒍𝒊𝒛𝒊𝒏𝒈 𝒉𝒂𝒄𝒌𝒊𝒏𝒈 𝒕𝒐𝒐𝒍𝒔...* 🛠️',
            '*𝒄𝒐𝒏𝒏𝒆𝒄𝒕𝒊𝒏𝒈 𝒕𝒐 𝒓𝒆𝒎𝒐𝒕𝒆 𝒔𝒆𝒓𝒗𝒆𝒓𝒔...* 🌐',
            '',
            '```[██████████] 10%``` ⏳'                                            ,
            '```[████████████████████] 20%``` ⏳'                                   ,
            '```[██████████████████████████████] 30%``` ⏳'                               ,
            '```[████████████████████████████████████████] 40%``` ⏳'                            ,
            '```[██████████████████████████████████████████████████] 50%``` ⏳'                       ,
            '```[████████████████████████████████████████████████████████████] 60%``` ⏳'                 ,
            '```[██████████████████████████████████████████████████████████████████████] 70%``` ⏳'            ,
            '```[████████████████████████████████████████████████████████████████████████████████] 80%``` ⏳'        ,
            '```[██████████████████████████████████████████████████████████████████████████████████████████] 90%``` ⏳'    ,
            '```[████████████████████████████████████████████████████████████████████████████████████████████████████] 100%``` ✅',
            '',
            '🔒 *𝒔𝒚𝒔𝒕𝒆𝒎 𝒃𝒓𝒆𝒂𝒄𝒉: 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍!* 🔓',
            '🚀 *𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒆𝒙𝒆𝒄𝒖𝒕𝒊𝒐𝒏: 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒆𝒅!* 🎯',
            '',
            '*📡 𝒕𝒓𝒂𝒏𝒔𝒎𝒊𝒕𝒊𝒏𝒈 𝒅𝒂𝒕𝒂...* 📤',
            '*🕵️‍𝒆𝒏𝒔𝒖𝒓𝒊𝒏𝒈 𝒔𝒕𝒆𝒂𝒍𝒕𝒉...* 🤫',
            '*🔧 𝒇𝒊𝒏𝒂𝒍𝒊𝒛𝒊𝒏𝒈 𝒐𝒑𝒆𝒓𝒂𝒕𝒊𝒐𝒏𝒔...* 🏁',
            '*🔧 𝒔𝒊𝒍𝒆𝒏𝒕 𝒈𝒆𝒕 𝒚𝒐𝒖𝒓 𝒂𝒍𝒍 𝒅𝒂𝒕𝒂...* 🎁',
            '',
            '⚠️ *𝑵𝑶𝑻𝑬:* 𝒂𝒍𝒍 𝒂𝒄𝒕𝒊𝒐𝒏𝒔 𝒂𝒓𝒆 𝒇𝒐𝒓 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒖𝒓𝒑𝒐𝒔𝒆𝒔 𝒐𝒏𝒍𝒚.',
            '⚠️ *𝑹𝑬𝑴𝑰𝑵𝑫𝑬𝑹:* 𝒆𝒕𝒉𝒊𝒄𝒂𝒍 𝒉𝒂𝒄𝒌𝒊𝒏𝒈 𝒊𝒔 𝒐𝒏𝒍𝒚 𝒕𝒉𝒆 𝒐𝒏𝒍𝒚 𝒘𝒂𝒚 𝒕𝒐 𝒆𝒏𝒔𝒖𝒓𝒆 𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚.',
            '⚠️ *𝑹𝑬𝑴𝑰𝑵𝑫𝑬𝑹:* 𝒔𝒕𝒓𝒐𝒏𝒈 𝒉𝒂𝒄𝒌𝒊𝒏𝒉 𝒊𝒔 𝒕𝒉𝒆 𝒐𝒏𝒍𝒚 𝒘𝒂𝒚 𝒕𝒐 𝒆𝒏𝒔𝒖𝒓𝒆 𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚.',
            '',
            ' *🗿 𝑻𝑬𝑪𝑯𝑺𝒀𝑵𝑪~𝑴𝑫 𝑯𝑨𝑪𝑲𝑬𝑫 𝒀𝑶𝑼𝑹 𝑫𝑨𝑻𝑨 𝑺𝑼𝑪𝑪𝑬𝑺𝑺𝑭𝑼𝑳𝑳𝒀 🗿*'
        ];

        for (const line of steps) {
            await conn.sendMessage(from, { text: line }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});
