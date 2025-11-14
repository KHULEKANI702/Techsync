const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~zZl2HL5B#XOVHtH7Dihqj3gAG0-TylNf2NzQwidYjEPGWS5vCd-cbrguNUiwyYJEFS1Q6v4FA45ZP6GjwPQNPeFzj+gUGjm/pHOkQ3Uydy51zkuG0+mXLSfeVvTvRkcIXLWxafVsfeYG8RYoKrzGlyVCICixnqAojJ2/Chyadupe8hClczm8Iwzk2iNBriZxIsHxTBJ+HSLvVdpL0NH+YqrKWDF2uumbvpahvaG5rGvhgJupnx8s1y1rqhNiZidMGnOKtQ4iWoYph1b9Z9OUMev5hMfXf+tBiuia4v1dLPh4vWPiyiu3jVngp1WZ/qsf82cFzwVaSqUe06+bZbK6tFvHicBeFOYJtuwud25Xu6MIVXG+9r8IC85sr+/+gez53Hkq93h7zc3oiioeySqJmt3ePyio+a9Wk3Mdhy0R3Ilr4NPwktcS4NDaXIIr898Byjdrsdbkhclum+IXolCNlRllwz+4IPWUt+RLlOD0X8VJJ24x5Now7W++2U1LFfZHK0M8pVU6asCZ8QS3XuoCyk00rcjfWxI8bCGBVDMyCbOgyT9exkqJhyV6jJptnx+hzRHnVeAkb88wAQlGHKCGS4rs57Ij8AMDmsUUwQO8sLFONIZGR31sMambJXCd46OlrlxEPW2n9wh1zRxajySljSazAADaljRClKJpiymnQ+ohRmiILRb+eT6oMmqKwZmuIEjICgiKqqarygycJ7+u6YQ0Zh07yrEAMDkJK69BEYpbCgaADOXxiWZNmGKjiirji25mic4BqWrqq2I4quZPUQkDAc4wZWDIwA6GNKCKIUV5lfJ73gTdVLUV7gbnCJKINlA0a8qoicpOiK9jz4abyqxEmGpsmuYRmCammqIiqibBoWL6u69OvxmpojmQqvu5aiWa4jGK5rWLamcZaly+6vx+tYtqUJoiC4nCvbhiALvGIrimqpKi9xP4dXf/59ACp0Ype+01eLxosDkGJCWVS1TVHD5LUrfX4K47huK7buqtjqF4iAkfRlGzGGq4z2GrQVJHGOD8jqI36J8HOJIoISMGKkRZ/HjnUB34WL2UZfmaCn7w19o+JI/lbH4vKWyKmCwIkKp0iCoozk9/3+AFSwNwU+ffxz/+njH/Tvv3ptXph7FwliEBcUjIDliZuT74yd+ZzyWjYeG05mWJkBvsT42u0u3eTkuDkOLYZJ6uvjYivG+/ujbG8aTZaF4CralJGiZicpFM7d5N9GwAgsfEEjV7uZ3x499rDQ4k7iQqXO9xoVlSCgFtYyZbwM7hpzKmtTV6+U7TStcVbcPrpR80SH/ATvhEKFBnmqeXScH+Z2dt17S9ABx+hrZ/PHpKLWLX6sNTncsc2mW3naKRGOOTyNb9NAQqvpsGpvdtsrZ6g0tHXLW1H1Z9lieI+1aNs9NEfRuRF2GmVbqVy2po1y49KHz3OgeJm/+KVD4vNtitF5nL0cxPfO6cLbJxv3PPjq05e5+J3ZYsaheXe3X5G7R/EpCJuNLk7H2nLFw3SJkodh4e6KZSv5yEkIeO7TvikgS2tS9n8ZVULqs3NSt33yelVa/8CZZXqekWVeH3ABKTO+FMR/VZl6eSsgdTOBNO9jD/i7PO2zuzOaZs0gey0wYPSXh3nw/A8DYdsyPAoAAA==",
 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝒀𝑶𝑼𝑹 𝑺𝑻𝑨𝑻𝑼𝑺 𝑯𝑨𝑺 𝑩𝑬𝑬𝑵 𝑽𝑰𝑬𝑾𝑬𝑫 𝑩𝒀 𝑻𝑬𝑪𝑯𝑺𝒀𝑵𝑪-𝑴𝑫-𝑩𝑶𝑻*",
  
PREFIX: process.env.PREFIX || "!",
   
BOT_NAME: process.env.BOT_NAME || "ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ",

STICKER_NAME: process.env.STICKER_NAME || "ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ",
 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",

CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "☠️,⏳️,⚡️,🚀,🤖,🌏,🌟,💫,🎭,🗿,🔰,⚠️",

DELETE_LINKS: process.env.DELETE_LINKS || "true",

OWNER_NUMBER: process.env.OWNER_NUMBER || "263771912275",

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

AUTO_TYPING: process.env.AUTO_TYPING || "false",
   
READ_CMD: process.env.READ_CMD || "false",
 
DEV: process.env.DEV || "263771912275",
        
ANTI_VV: process.env.ANTI_VV || "true",
 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false" 

};
