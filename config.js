const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "malvin~Yu9jGSRS#uEGefVfYq8DWMru6t-Ok7sBw9VjhWTsvmY0ae1C1iPA",
 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "𝒀𝑶𝑼𝑹 𝑺𝑻𝑨𝑻𝑼𝑺 𝑯𝑨𝑺 𝑩𝑬𝑬𝑵 𝑽𝑰𝑬𝑾𝑬𝑫 𝑩𝒀 𝑻𝑬𝑪𝑯𝑺𝒀𝑵𝑪-𝑴𝑫-𝑩𝑶𝑻",
  
PREFIX: process.env.PREFIX || "#",
   
BOT_NAME: process.env.BOT_NAME || "ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ",

STICKER_NAME: process.env.STICKER_NAME || "ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ",
 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",

CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "☠️,⏳️,⚡️,🚀,🤖,🌏,🌟,💫,🎭,🗿,🔰,⚠️",

DELETE_LINKS: process.env.DELETE_LINKS || "true",

ONER_NUMBER: process.env.OWNER_NUMBER || "263717777643",

OWNER_NAME: process.env.OWNER_NAME || "𝑲𝒉𝒖𝒍𝒆𝒌𝒂𝒏𝒊 𝑫𝒖𝒃𝒆",

DESCRIPTION: process.env.DESCRIPTION || "⃞ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ-ʙᴏᴛ",
    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/jt3qb1.png",

LIVE_MSG: process.env.LIVE_MSG || "𝑻𝑬𝑪𝑯𝑺𝒀𝑵𝑪-𝑴𝑫 𝑰𝑺 𝑨𝑳𝑰𝑽𝑬 𝑵𝑶𝑾 𝑨𝑵𝑫 𝑭𝑶𝑹𝑬𝑽𝑬𝑹.⚡",
 
READ_MESSAGE: process.env.READ_MESSAGE || "false",

AUTO_REACT: process.env.AUTO_REACT || "false",

ANTI_BAD: process.env.ANTI_BAD || "true",
  
MODE: process.env.MODE || "private",
 
ANTI_LINK: process.env.ANTI_LINK || "true",
 
AUTO_VOICE: process.env.AUTO_VOICE || "false",

AUTO_STICKER: process.env.AUTO_STICKER || "false",
 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",

AUTO_TYPING: process.env.AUTO_TYPING || "true",
   
READ_CMD: process.env.READ_CMD || "false",
 
DEV: process.env.DEV || "263717777643",
        
ANTI_VV: process.env.ANTI_VV || "true",
 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false" 

};
