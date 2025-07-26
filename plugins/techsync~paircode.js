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




//const fetch = require("node-fetch");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson} = require('../lib/functions')
const { cmd } = require("../command");

// get pair 2

cmd({
    pattern: "pair",
    alias: ["getpair", "clonebot"],
    react: "✅",
    desc: "Pairing code",
    category: "download",
    use: "*!pair +263717777643*",
    filename: __filename
}, 
async (conn, mek, m, { from, prefix, quoted, q, reply }) => {
    try {
        // Helper function for delay
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        // Validate input
        if (!q) {
            return await reply("*`𝐄𝐱𝐚𝐦𝐩𝐥𝐞 .𝐩𝐚𝐢𝐫 +263717777643`*");
        }

        // Fetch pairing code
        //const fetch = require("node-fetch");
        const response = await fetch(`https://techsync-pair9.onrender.com/pair?phone=${q}`);
        const pair = await response.json();

        // Check for errors in response
        if (!pair || !pair.code) {
            return await reply("*`Failed to retrieve pairing code. Please check the phone number and try again.`*");
        }

        // Success response
        const pairingCode = pair.code;
        const doneMessage = "> *𝐓𝐄𝐂𝐇𝐒𝐘𝐍𝐂-𝐌𝐃-𝐁𝐎𝐓 𝐏𝐀𝐈𝐑 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐄𝐃*";

        // Send first message
        await reply(`${doneMessage}\n\n*уσυя ραιяιηg ¢σ∂є ιѕ:* ${pairingCode}`);

        // Add a delay of 2 seconds before sending the second message
        await sleep(2000);

        // Send second message with just the pairing code
        await reply(`*Code:* ${pairingCode}`);
    } catch (error) {
        console.error(error);
        await reply("*`An error occurred. Please try again later.`*");
    }
});
