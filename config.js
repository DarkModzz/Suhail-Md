const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94768387659";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_07_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDksXG4gICAgICAgIDc4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDYzLFxuICAgICAgICA1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDMzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICA3OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI5LFxuICAgICAgICA3NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODksXG4gICAgICAgIDM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MixcbiAgICAgICAgODIsXG4gICAgICAgIDI4LFxuICAgICAgICA5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjM0SUM4RXowT3QyUVM4TnoxTW1pTUxuNHNDcTVlY1QxaHFReVJEdVVoams9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkV1M2hGUXVEUlJXdXcyUEtlcVY5R2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTY5MDFlNzMtMzIzMi00YzkzLWIyZjAtMjY2ODllYjczNGY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgNDEsXG4gICAgICAxODEsXG4gICAgICAxMjEsXG4gICAgICAxNTAsXG4gICAgICAyNTIsXG4gICAgICAxNTcsXG4gICAgICA5NyxcbiAgICAgIDE2MSxcbiAgICAgIDE0MCxcbiAgICAgIDI1LFxuICAgICAgMTM3LFxuICAgICAgNzgsXG4gICAgICAzNCxcbiAgICAgIDEzOCxcbiAgICAgIDE4MCxcbiAgICAgIDkyLFxuICAgICAgOTYsXG4gICAgICA4OCxcbiAgICAgIDI0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAxNDMsXG4gICAgICAxNDksXG4gICAgICAyOCxcbiAgICAgIDEyMSxcbiAgICAgIDEsXG4gICAgICA5MixcbiAgICAgIDU0LFxuICAgICAgMTQ5LFxuICAgICAgNjksXG4gICAgICAxNTAsXG4gICAgICAyNDIsXG4gICAgICA4LFxuICAgICAgNDUsXG4gICAgICAxMDAsXG4gICAgICAyLFxuICAgICAgOTUsXG4gICAgICAxNzksXG4gICAgICAyMjUsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlYzSktaNVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzY4Mzg3NjU5OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4bSF4bSAyoDhtIsg4bSb4bSc4bSF4bScXCIsXG4gICAgXCJsaWRcIjogXCI0NTEwNjE5OTUzOTc4MToyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPZW92KzBHRU5XMG43VUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJkTC9HMUJoMU91RGlKR3lGMmw0VFE3Q05xVEhQRjRrYmtCczFoN0ljUTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSk55VmlKODFUUDFmbmhSa2RvRUlzRzBjWlBYdjNyOEduSEJ5VUd1UENVcitzdkdnZUcra2hUWlF4ZW9YRC9BbjRmSms2KzVGRzl1eUltcS9wWGowQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDhoR0VQRis0UVpwcEJuTHc0bkkzVVJFSyswd3JWMlZiZkR2TXZxdVdzT09WVmRRalQyeTdMMFdVanJRYjhmMUxlaEZMTEcwSWFiLzU0Y3ZCY0Q2Z3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjgzODc2NTk6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI3NjQ0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUkvc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSS9zLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SANKALPA-MD",
  ownername:process.env.OWNER_NAME|| "SANKALPA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
