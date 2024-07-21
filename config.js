//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "916260273863";
global.owner = process.env.OWNER_NUMBER || "916260273863";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01rUTlsTmdGQjJNVEd3THl2SnVWTDd1SDV0RXJLR3Z4T2g2eUVRNTFucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTJQUSsyOWtuVUpsZFhrcmw4WENUbjRNMjI3RCtGWktWNmp4Q0hmdWNqTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwS0c4WWFNVGNYSjNsOVNNSWVUcHFJVHM1azVLb1Y0d0QwdWFTbzBHeEhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIaDZVWUNIbmFkbVFRRTZESmpraFh3R2lzSXZLOFF4NXk5TEhVQzlRTUJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVMamc1Qk5peGJsb2NpWTFlNUhva0grQjhhbTdhWXJDdm9XU3JPbTNQbTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkydmxWcUNuSVgrY2p4QWpMSVZnbFR0aXVHMmI2V25CWk93cWtvSVZQbVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUlmb2x3VnA0S2tBN3dzS3U3bjEvdElpMWM2OVNXSHNMQ1VaRGxLMm4wOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1hYazNwN1h0YmdFSlFOekdWalVzY0xJN3JyaVdUZlJ4bDg5c1ZSS0lDVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhZSEpJRnkvT0xLN25SNndWQjdLTHBFSWNmd3F6cXlQdFNscXQ1cndVcC82akdzM2QzZmtuMzlFVmdndXdQN3M0RGFZb3gycjV3UU42bnh6T1A2amlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6Ik16ZDBTMGU4UitPK2NqY3JhWHB1K2NJSlA0UENVcVVxSitmUHFvb1RoT3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZUVVlGY09WU1FpSWZPRWJPeGhNTlEiLCJwaG9uZUlkIjoiOWNjZTM5NjUtMGMzMi00MTFhLTg0MzEtZmFhZjgxZWNiMjdiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdYS3czMjM3WjYwSGgxRjdCUnJOcFF4TU5LVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpU0xWWk0yYk1lM1RzWGEvenZmUHR2MXlhNms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiREYzVEVNTkIiLCJtZSI6eyJpZCI6IjkxNjI2MDI3Mzg2Mzo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Imt1bWFydWlrZXNodWJoYW0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00vUGhNNEdFSm5hOUxRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imo3bmg0RkRGbUJYOUptUW1DaHlJeHpnL0VNWWlaSWFiR1BQUEZDbTEyUlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVZV01laVVoUjVLTEJ5dFp2Wk1MbERjMzBNakU4SVhVbXNPVFludzhmNlJGUko5dTZSdWU5QTBPek5PZzd1RmNrTmhyc0NRNXBHdHdkRE5EZGN4bUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoM0VHMllNVE9qMGxtdnU1OGhtYjFKZk1jNFNZZmhENkRWZk1ocDlTTTgyWEVEMWxLRnpQaDNXc3ZKMWhZWW1MZ1owbDhQN1Nmd1J3SWp2bFV5UW5qZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNjI2MDI3Mzg2Mzo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlkrNTRlQlF4WmdWL1Naa0pnb2NpTWM0UHhER0ltU0dteGp6enhRcHRka1YifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE1NzY3NDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXdHIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "SHUBHAM-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "SHUBHAM-KUMAR",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
