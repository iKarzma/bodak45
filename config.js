import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
  ['201559987114', '❄️ Karzma 🧿', true],
];

global.xaxa = 'kaneki'
global.suittag = ['201559987114'];
global.prems = ['201559987114'];


(function(_0x44283f,_0x13d0d2){var _0x46a3b5=_0x44283f();while(!![]){try{var _0x35673b=-parseInt(_0x21bf(0x5))/0x1*(-parseInt(_0x21bf(0x14))/0x2)+parseInt(_0x21bf(0x17))/0x3*(parseInt(_0x21bf(0x9))/0x4)+-parseInt(_0x21bf(0x12))/0x5+-parseInt(_0x21bf(0xd))/0x6*(-parseInt(_0x21bf(0x1a))/0x7)+-parseInt(_0x21bf(0xc))/0x8+-parseInt(_0x21bf(0x4))/0x9*(-parseInt(_0x21bf(0x1e))/0xa)+-parseInt(_0x21bf(0x8))/0xb*(parseInt(_0x21bf(0x11))/0xc);if(_0x35673b===_0x13d0d2){break;}else{_0x46a3b5['push'](_0x46a3b5['shift']());}}catch(_0x3d4a9f){_0x46a3b5['push'](_0x46a3b5['shift']());}}}(_0x428a,0x81dc4));function _0x21bf(_0x4536d9,_0x178b79){var _0x1c5a51=_0x428a();_0x21bf=function(_0x48cddb,_0x117664){_0x48cddb=_0x48cddb-0x0;var _0x428aa0=_0x1c5a51[_0x48cddb];return _0x428aa0;};return _0x21bf(_0x4536d9,_0x178b79);}var _0x48cddb=(function(){var _0x5ee028=!![];return function(_0x471b61,_0x2b4492){var _0x42076a=_0x5ee028?function(){if(_0x2b4492){var _0x1eea67=_0x2b4492[_0x21bf(0x2)](_0x471b61,arguments);_0x2b4492=null;return _0x1eea67;}}:function(){};_0x5ee028=![];return _0x42076a;};}());var _0x1c5a51=_0x48cddb(this,function(){var _0x1126db;try{var _0x14614b=Function(_0x21bf(0x6)+'\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x20\x29'+'\x29\x3b');_0x1126db=_0x14614b();}catch(_0x351ffa){_0x1126db=window;}var _0x215617=_0x1126db[_0x21bf(0x10)]=_0x1126db[_0x21bf(0x10)]||{};var _0x43cecc=[_0x21bf(0x19),'\x77\x61\x72\x6e',_0x21bf(0xe),'\x65\x72\x72\x6f\x72',_0x21bf(0x20),_0x21bf(0x7),_0x21bf(0x18)];for(var _0x5bd2dc=0x0;_0x5bd2dc<_0x43cecc[_0x21bf(0xa)];_0x5bd2dc++){var _0x26be7d=_0x48cddb[_0x21bf(0x1)][_0x21bf(0x3)][_0x21bf(0x16)](_0x48cddb);var _0x1347e8=_0x43cecc[_0x5bd2dc];var _0x1b8503=_0x215617[_0x1347e8]||_0x26be7d;_0x26be7d['\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f']=_0x48cddb[_0x21bf(0x16)](_0x48cddb);_0x26be7d[_0x21bf(0x13)]=_0x1b8503[_0x21bf(0x13)][_0x21bf(0x16)](_0x1b8503);_0x215617[_0x1347e8]=_0x26be7d;}});_0x1c5a51();global[_0x21bf(0x0)]='\u2744\ufe0f\x20\ud835\ude51\ud835\ude40\ud835\ude49\ud835\ude4a\ud835\ude48\x20\ud83e\uddff\x0a\uaa01\x20\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x61\x2e\x6d\x65\x2f\x2b\x32\x30\x31\x35\x35\x34\x35\x38\x32\x38\x35\x31\x20\uaa01\x0a\ud83d\udd25\x20\ud835\ude4e\ud835\ude4a\ud835\ude46\ud835\ude50\ud835\ude49\ud835\ude3c\x20\ud83e\uddff\x0a\uaa01\x20\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x61\x2e\x6d\x65\x2f\x2b\x32\x30\x31\x30\x33\x33\x30\x32\x34\x31\x33\x35\x20\uaa01';global[_0x21bf(0x1b)]='\ud835\udc7a\ud835\udee9\ud835\udc3e\ud835\udc48\ud835\udc41\ud835\udc34\x20\x2d\x20\ud835\udc49\ud835\udc38\ud835\udc41\ud835\udee9\ud835\udc40\x20';global[_0x21bf(0x1c)]=_0x21bf(0xb);global['\x77\x6d']=_0x21bf(0xf);global['\x74\x69\x74\x75\x6c\x6f\x77\x6d']=_0x21bf(0x1f);function _0x428a(){var _0x53da88=['\x62\x69\x6e\x64','\x36\x64\x70\x72\x4b\x69\x6a','\x74\x72\x61\x63\x65','\x6c\x6f\x67','\x35\x36\x73\x5a\x51\x43\x43\x59','\x70\x61\x63\x6b\x6e\x61\x6d\x65','\x61\x75\x74\x68\x6f\x72','\u2605\ud835\udc7a\ud835\udee9\ud835\udc3e\ud835\udc48\ud835\udc41\ud835\udc34\x26\ud835\udc49\ud835\udc38\ud835\udc41\ud835\udee9\ud835\udc40\x20\ud835\udc35\ud835\udee9\ud835\udc47\u2605','\x33\x32\x30\x41\x54\x6a\x43\x56\x57','\ud83e\udd16\x20\ud835\udc7a\ud835\udee9\ud835\udc3e\ud835\udc48\ud835\udc41\ud835\udc34\x20\x2d\x20\ud835\udc49\ud835\udc38\ud835\udc41\ud835\udee9\ud835\udc40\x20\ud835\udc35\ud835\udee9\ud835\udc47\x20\ud83e\udd16','\x65\x78\x63\x65\x70\x74\x69\x6f\x6e','\x76\x65\x6e\x6f\x6d\x58\x6f\x76','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x61\x70\x70\x6c\x79','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x32\x38\x34\x32\x32\x73\x54\x45\x70\x51\x57','\x31\x30\x31\x35\x31\x36\x37\x6d\x55\x7a\x43\x6a\x56','\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x74\x61\x62\x6c\x65','\x33\x33\x61\x53\x4b\x44\x76\x51','\x31\x39\x37\x36\x33\x36\x38\x67\x59\x6b\x55\x74\x55','\x6c\x65\x6e\x67\x74\x68','\u2605\ud835\udc7a\ud835\udee9\ud835\udc3e\ud835\udc48\ud835\udc41\ud835\udc34\x20\x2d\x20\ud835\udc49\ud835\udc38\ud835\udc41\ud835\udee9\ud835\udc40\x20\ud835\udc35\ud835\udee9\ud835\udc47\u2605','\x36\x33\x39\x37\x39\x38\x34\x49\x6d\x44\x47\x48\x75','\x31\x31\x39\x35\x35\x30\x4f\x69\x76\x44\x78\x44','\x69\x6e\x66\x6f','\u2605\ud835\udc7a\ud835\udee9\ud835\udc3e\ud835\udc48\ud835\udc41\ud835\udc34\x2d\ud835\udc49\ud835\udc38\ud835\udc41\ud835\udee9\ud835\udc40\x20\ud835\udc35\ud835\udee9\ud835\udc47\u2605','\x63\x6f\x6e\x73\x6f\x6c\x65','\x33\x32\x36\x38\x38\x38\x34\x71\x50\x42\x6b\x6b\x65','\x35\x37\x34\x36\x35\x30\x41\x43\x77\x69\x58\x57','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x32\x43\x6d\x71\x79\x69\x6f','\x74\x69\x74\x75\x6c\x6f\x77\x6d\x32'];_0x428a=function(){return _0x53da88;};return _0x428a();}global[_0x21bf(0x15)]='\u4e42\x20\ud835\udc7a\ud835\udee9\ud835\udc3e\ud835\udc48\ud835\udc41\ud835\udc34\x20\x2d\x20\ud835\udc49\ud835\udc38\ud835\udc41\ud835\udee9\ud835\udc40\x20\ud835\udc35\ud835\udee9\ud835\udc47\x20\u4e42';global['\x69\x67\x66\x67']=_0x21bf(0x1d);
global.wait = '*⌛ _جاري التحميل..._*\n\n*▰▰▰▱▱▱▱▱*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen3 = fs.readFileSync('./Menu3.png');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'ar';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('ar', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('ar', {month: 'long'});
global.año = d.toLocaleDateString('ar', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝`;
global.gt = '★Karzma - Bot★';
global.mysticbot = '★Karzma - Bot★';
global.md = 'https://chat.whatsapp.com/JAi6fK0lClQDJASSxoXQTx';
global.mysticbot = 'https://chat.whatsapp.com/JAi6fK0lClQDJASSxoXQTx';
global.waitt = '*⌛ _جاري التحميل..._*\n\n*▰▰▰▱▱▱▱▱*';
global.waittt = '*⌛ _جاري التحميل..._*\n\n*▰▰▰▰▰▱▱▱*';
global.waitttt = '*⌛ _جاري التحميل..._*\n\n*▰▰▰▰▰▰▱▱*';
global.nomorown = '201559987114';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;// America/Los_Angeles
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
