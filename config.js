const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("923346690239")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Naveed Dar' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? true : process.env.SESSION_ID,KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBPcGMwdDBmSUI5N1ZaeFl1Z0VLdEdUbU1tRXdzRlVxR1dvVDFLVjltST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGZkWkZBZ1JRdHFRdC8vdFJEYmsxa0Y0eDJHVW42NzUwWGVaQmh3eGlTdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSzFHa3pEUFlmNk5LenVpN3Fzd0tyc0pXYkIxUjY5NndkR2RTb2ZTZEZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWcUMra1BsV3BMZEw1ZnN1cE5mcVJOMWxEVStpWjlGVllPOVdxN0hwTDJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVHSFNZQmtVNGg0WndkSXI1bVZZNHJyd1o1ZDk5UjBQallaNFBHUzdIVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IiszZk02SUpHTE1Ybnp0a3NxcjhxSDd2Z0VLWm56ZW93anMva2ZFZ3ZWRTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0o1OVBzd0dFZFI0MmxmNjJqdlA4dmJZREZ5NFFpbkVINGpVWGRRYWRrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVm91disxQ29XS0RpQ0E3S29tdFV5WnBQbDFZSTlaanV1Tjg0aXhvVjcxVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI3SXE0NC9DMUt2T3hQU2lsQzBKOCtxZS9nK1VZR2JjSi9HeU5mQlhUUFo2d1A4c3dabFRCanZoRm50REZJUEtEK3ZqMTBsaEVwT3d3S3U1M3R4NUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6InRXTnoxdnY4VGNyOHMxSVpORGhPVWpURXZYMDhod1NGcndsMWo4dzFvUms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InloSkxqWlZOUzNTUXMzTkJWQnlZZUEiLCJwaG9uZUlkIjoiNTE3MWQ3ZmItYTI3Yy00OTc4LWIxZjEtMDZkN2NmN2Y4NGRlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPYUR3U0lOVW9YVEg5YTY0Ump3SkhGcStyUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvcEVyc3lBNk5pQ3NnVlBueG9WMlhkczZZMmM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRENaUkVUS0wiLCJtZSI6eyJpZCI6IjkyMzM0NjY5MDIzOTo3NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNdXNrYW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pHL3FaSUNFUHpCdTdRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilh5ZUNmTXpDNi9IWU1WQ05ocFZyT0FiZ2JRVnBRVW1URGJydmZhRnE2VUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJDaTQ0bU8vUnM3dnN0bThscUVUbHZmS2k4Z2I4V2NzU2VySWtVWm5vbVcyUmdwNU9sbWx0MzlrWnh6SG9DcEdmMkEreWVBTllhWVMyUGV5V2FMUERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwczAzb3o4bEFoOU41MFBQdURSRkZOb1B3SGVEZ1l6MnhpcDVlSDVuNXowdzYrTHY1dSttb093TlR4MURHcFBWejFHemRKdmRlSG5OZXd1VWlYMC9DQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM0NjY5MDIzOTo3NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWOG5nbnpNd3V2eDJERlFqWWFWYXpnRzRHMEZhVUZKa3cyNjczMmhhdWxBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNjM5NzUyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUh3NCJ9
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
