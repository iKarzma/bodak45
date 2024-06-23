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
 conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, footer: author }, { quoted: m });


  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Get the path to the system's temporary directory
  const tmpDir = os.tmpdir();

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);

  let doc = {
    audio: {
      url: `${tmpDir}/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: url,
        title: title,
        body: wm,
        sourceUrl: url,
        thumbnail: await (await conn.getFile(thumbnail)).data
      }
    }
  };

  await conn.sendMessage(m.chat, doc, { quoted: m });

  // Delete the audio file
  fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    }
  });
};

handler.help = ['play'].map((v) => v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^شغل$/i;

handler.exp = 0;
handler.diamond = false;

export default handler;
