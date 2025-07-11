const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9qRjkvRWR6NHNYa3RLcG9TM0RyeTdlNkZBVmdYUkVTTC94MjA0QmlYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFBIbkxzU0ZvTlk4MGZJbStaelNKU1pjRE01NDhPUEtlV2I0MGx1bjd5ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QUc2UVFsNUNJQis2eEViVE96K3M2ekg3aG1zTzRwZjBGSVNxQnZVeW53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSQVRaVTBjUGhPa0wxdzVxQ0VLSDdOZjJ2WjRxRHhJOWVxS0llaU9jQ3hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HK1l3SzdJakRoOW1TMGJibE9hcHY0dVZINFRjTXQ3OFk0VGxlL2NUVWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im43YWlkNi9UMGlkWjJVUXBrTHFlTzlXMkZ0dVhNN29PanlrU0VkUENKa1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lOS212YVh6dllLbXYyOC8yUHVhdlFObWlFZndWVWlabXhERlBKV1Qxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWxxeHIza2hvVGlCQXQzcTZDeEJqdTY3MGxEM0h0Tk42dG9IZ056L1FBcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii80RGV6NDJ6RCtCUXgwUlZvdzRORC8vOUFBaWF1Z0YzNTBOUWZzcm1wb3RHdEJUaFNxOTZtaUhtNjgydlVVcVJON3Jsb0tBbzF3VnFVRlhVcnllTml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiIycy8wT0o1R20yV1lpMC9vckhQakdBb2lONEpIbEFyK3dOT0ZGUTM4TTRBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc3MTkxMjI3NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwQjIzMDhDODVFQzdDRTc2OTQwRkFDMDYxNzE1MUYyNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUyMzUwMjgwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3NzE5MTIyNzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0MxQ0FEREUyOEE2NTFFODIwQjM2MTE2ODNERTUyRjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MjM1MDI4MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzcxOTEyMjc1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlBRjVCRDk4MTcyNEQzMDk0NTUzNUFEMjI4Q0RBOTJEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTIzNTAyODN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkRJT2paQWpQU1RXYjB4RmZ3cFVQb1EiLCJwaG9uZUlkIjoiNjRhMDE3ODUtZjQ3OS00NGEwLWI3ZTMtMmVmNTI2ZDYwYWFlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis4V1FwZU1tMXdFc1RyQWxqTVB1Z2Vsa1JhRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6bDcrekM1b2QzY3JOQzJ5VXl3RHh2SWJlY1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQUJDRDEyMzQiLCJtZSI6eyJpZCI6IjI2Mzc3MTkxMjI3NToxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLvvK7vvKvvvK/vvLPvvKkg77yk77y177yi77ylIiwibGlkIjoiMTM0MzYwMDk5NDk2MDkyOjEwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkNadVAwQ0VMajh5c01HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUFlhWlZmaUpmR01pUUR3MjcwSUM1SGpNOVpHZ0thYUtlSVJqNmd4RzVXZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoia0RNcmpjVFdsVm0rTWdzcE5USTJGSmFRRTVZNWpMejhGeDdEOUZGVFVZMnFJR3JsVDRpZkZ3eHVvdUdibTFXTEh6YXUwblhGRHFlSnEwck9BR1J4Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkwzKzQxVCtyRU83QXJyWXd6UFBFNEIzZEptS0JCdTRHdDhXMjlDVlhqejlKb01wcTcxNGZQbFQyTlByVUMxYVozRS96WG1naXhHS2Y2V2Q1eEZTY2dBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzcxOTEyMjc1OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQyR21WWDRpWHhqSWtBOE51OUNBdVI0elBXUm9DbW1pbmlFWStvTVJ1Vm8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MjM1MDI3OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHR2kifQ==",
 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝒀𝑶𝑼𝑹 𝑺𝑻𝑨𝑻𝑼𝑺 𝑯𝑨𝑺 𝑩𝑬𝑬𝑵 𝑽𝑰𝑬𝑾𝑬𝑫 𝑱𝑼𝑺𝑻 𝑵𝑶𝑾 𝑩𝒀 𝑻𝑬𝑪𝑯𝑺𝒀𝑵𝑪-𝑴𝑫-𝑩𝑶𝑻*",
  
PREFIX: process.env.PREFIX || "!",
   
BOT_NAME: process.env.BOT_NAME || "ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ",

STICKER_NAME: process.env.STICKER_NAME || "ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ",
 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",

CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "☠️,⏳️,⚡️,🚀,🤖,🌏,🌟,💫,🎭,🗿,🔰,⚠️",

DELETE_LINKS: process.env.DELETE_LINKS || "true",

OWNER_NUMBER: process.env.OWNER_NUMBER || "263771912275",

OWNER_NAME: process.env.OWNER_NAME || "ᴋʜᴜʟᴇᴋᴀɴɪ ᴍᴠᴇʟᴀsᴇ",

DESCRIPTION: process.env.DESCRIPTION || "⃞ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ-ʙᴏᴛ",
    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/sdv3qh.png",

LIVE_MSG: process.env.LIVE_MSG || "𝑻𝑬𝑪𝑯𝑺𝒀𝑵𝑪-𝑴𝑫 𝑰𝑺 𝑨𝑳𝑰𝑽𝑬 𝑵𝑶𝑾 𝑨𝑵𝑫 𝑭𝑶𝑹𝑬𝑽𝑬𝑹.⚡",
 
READ_MESSAGE: process.env.READ_MESSAGE || "false",

AUTO_REACT: process.env.AUTO_REACT || "false",

ANTI_BAD: process.env.ANTI_BAD || "true",
  
MODE: process.env.MODE || "public",
 
ANTI_LINK: process.env.ANTI_LINK || "true",
 
AUTO_VOICE: process.env.AUTO_VOICE || "false",

AUTO_STICKER: process.env.AUTO_STICKER || "false",
 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",

AUTO_TYPING: process.env.AUTO_TYPING || "false",
   
READ_CMD: process.env.READ_CMD || "false",
 
DEV: process.env.DEV || "263771912275",
        
ANTI_VV: process.env.ANTI_VV || "true",
 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false" 

};
