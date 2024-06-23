import fetch from "node-fetch"
import yts from "yt-search"
import ytdl from 'ytdl-core'
import axios from 'axios'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) throw `ادخل عنوان للبحث*\n\n*—◉ مثال:*\n*${usedPrefix + command} انمي ناروتو*`
try {
const yt_play = await search(args.join(" "))
let additionalText = ''
if (command === 'y') {
additionalText = 'الصوت 🔊'
} else if (command === 'y2') {
additionalText = 'الفيديو 🎥'}
let texto1 = `*ꔹ━ꔹ❰🔊 تحميل يوتيوب 🔊❱ꔹ━ꔹ*\n
❏ 📌 *العنوان:* ${yt_play[0].title}
❏ 📆 *وقت النشر:* ${yt_play[0].ago}
❏ ⌚ *المده:* ${secondString(yt_play[0].duration.seconds)}
❏ 👀 *المشاهدات:* ${`${MilesNumber(yt_play[0].views)}`}
❏ 👤 *المؤلف:* ${yt_play[0].author.name}
❏ ⏯️ *القناه:* ${yt_play[0].author.url}
❏ 🆔 *ايدي:* ${yt_play[0].videoId}
❏ 🪬 *النوع:* ${yt_play[0].type}
❏ 🔗 *الرابط:* ${yt_play[0].url}\n
❏ *_جاري تحميل ${additionalText}, لحظات وبرسله لك．．．_*`.trim()
conn.sendMessage(m.chat, { image: { url: yt_play[0].thumbnail }, caption: texto1 }, { quoted: m })
if (command == 'y') {
try {
let q = '128kbps'
let v = yt_play[0].url
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'ايرور🙂!'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
} catch {   
try {
let searchh = await yts(yt_play[0].url)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })  
} catch {
await conn.reply(m.chat, 'حدث خطأ اثناء تحميل الصوت*', m)}}}
}  
if (command == 'y2') {
try {
let qu = '360'
let q = qu + 'p'
let v = yt_play[0].url
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `▢ العنوان: ${ttl}\n▢ حجم الفيديو: ${size}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {   
try {  
let mediaa = await ytMp4(yt_play[0].url)
await conn.sendMessage(m.chat, { video: { url: mediaa.result }, fileName: `error.mp4`, caption: `_𝐵𝑌:𝑺𝐻𝐴𝐷𝑂𝑊&𝐸𝐿𝐺𝐴𝑍𝐴𝑅_`, thumbnail: mediaa.thumb, mimetype: 'video/mp4' }, { quoted: m })     
} catch {  
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'ايرور🙂!'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `▢ العنوان: ${n}\n▢ حجم الفيديو: ${n3}`, thumbnail: await fetch(n4) }, { quoted: m })
} catch {
await conn.reply(m.chat, 'حدث خطأ اثناء تحميل الفيديو', m)}}}    
}} catch {
throw "*السيرفر مات ادعيلو*"}
}
handler.help = ['play'].map((v) => v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^شغل$/i;

handler.exp = 0;
handler.diamond = false;

export default handler;
