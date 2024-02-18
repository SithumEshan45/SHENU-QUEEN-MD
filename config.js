const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("94763406787,")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://allytshrts:BMOeqmRgUzicL9YL@clusterhhh.nsyzc7z.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.blockJids = process.env.BLOCK_JID ||'120363165030810524@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363165030810524@g.us' ;
global.github = 'https://github.com/SithumEshan45/SHENU-QUEEN-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94763406787'
global.devs = '96710109956';
global.INBOX_BLOCK = 'false'
global.TIMEZONE = 'Asia/Colombo' 
global.website = 'https://github.com/SithumEshan45' //wa.me/+94763406787
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/daa9647f2139e462e4316.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '*SHENU-QUEEN-MD* 🧚' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? ' ⃞🌷𝗠𝗥.𝗦𝗜𝗧𝗛𝗨𝗠 𝗘𝗦𝗛𝗔𝗡💙⃝' : process.env.OWNER_NAME,
  ownernumber: process.env.OWNER_NUMBER === undefined ? '94763406787' : process.env.OWNER_NUMBER,
  sessionName:  process.env.SESSION_ID === undefined ? '𝑺𝒉𝒆𝒏𝒖_𝑸𝒖𝒆𝒆𝒏_𝑴𝒅;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY05Jd3RPaWNDWlVtZ0pMaDhrRGIzckhEVTRneksyOHJaZE8xbVI0Mittcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTJLUWtITkpudGdqZHZvbitMUkk1Z3JUNXE5UDZDTUhKdGVJQW1OYlREQT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSXB0WTUyTjdpM3RJNmp6dWk1MUQyejZ4dkFXTTkrSDJhWXhOY1ZuLzNFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3VjJScFRPUU4wQnRBa2lOT2JkZ0w0OU9yQlNxdDR6VmJNRFQxY1NhZzNjPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFNcTVhYUdTaUFya29kKzFERGpQdFVIU3BLS0hEdDZubDJPVU13UVBuRjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdyemtKTllzVHBDdnJrdlVCYm5zOGJiajRGNWVUdU53Y1VUS096SGV4aXM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsZk5RNnJxUHM5NDNKTUZPcEdPZzI0cy9pb3pRa3JmdXhhNUdGZXhuUWpyTWVaUEpYK25Bd2JkNHByMStGVnZ6b0I5YWVBbndJbVlZSTNsZ1pyWHpoZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjExMiwiYWR2U2VjcmV0S2V5IjoidjJ4bmoyUi9nZGVHemJZZVQzR280YWRPaDBZOGVQZ3BNL1JJS085NVVvND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaUo5LWc1YmJRMWFjdlhMWmlEcGN6QSIsInBob25lSWQiOiIwNmYyZTc2ZS0xOWViLTQ3ODMtYTI3MS0wOWM1OTZlZWMyYWUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3QveVNVUC9ucVNVSE5wZ2EwbHVwc3ZyTnd3PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzOGplWDdDNUtoVjBER0o0dGFFU2ZpSDdidjA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLaXNxK3dFRU5QVXhxNEdHQkVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOQzFVbWJNR2U3cmQ0Zy9mWkhyQm5oS1UwZDZYRE9VQm1TQko1dUQxUTNjPSIsImFjY291bnRTaWduYXR1cmUiOiJ2UEk0bnY0YWYxRFc4VlJEOGVzbmZ2a3RNS3kxaE1UeVE1K0JWUjlEcXNkQlhkODlKbVNROTcvc0ZWV3dzQTNabGR1QjRMY3RsZEZHYVlsdG1UeWdCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaG9Mbnk3NzhnUGZOT3ozZHh4RVBGQkRITy8vOUkvMy9rMThvTEhIZXQxeXBqdnhRUFdqTWRSZGVxRHUrVjBHeTdkUm54OHNqOCsxMU5CcHFsSHJFZ1E9PSJ9LCJtZSI6eyJpZCI6Ijk0NzYzNDA2Nzg3OjY1QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYzNDA2Nzg3OjY1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRRdFZKbXpCbnU2M2VJUDMyUjZ3WjRTbE5IZWx3emxBWmtnU2ViZzlVTjMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDgyMzk0NDZ9' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? '🚨🧚‍♀️𝘚𝘏𝘌𝘕𝘜 𝘘𝘜𝘌𝘌𝘕: ⃞🌷𝗠𝗥.𝗦𝗜𝗧𝗛𝗨𝗠 𝗘𝗦𝗛𝗔𝗡💙⃝' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? '𝗦𝗛𝗘𝗡𝗨 𝗤𝗨𝗘𝗘𝗡 𝗠𝗗' : process.env.PACK_INFO.split(";")[1],	
  dl_limit: process.env.DL_SIZE || '350',
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,xxx,sex,fucked,Brazzers,pronhub,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  HANDLERS:  process.env.PREFIX === undefined ? ['#','!','.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main',
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '```HI Iam Alive Now```' : process.env.ALIVE_MESSAGE,
  caption :process.env.CAPTION || "  \t🧚 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ  ⃞🌷𝗠𝗥.𝗦𝗜𝗧𝗛𝗨𝗠 𝗘𝗦𝗛𝗔𝗡💙⃝*",
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? true : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '603b2ce8-d613-4f9f-98e2-b7a1c30f0db3' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
