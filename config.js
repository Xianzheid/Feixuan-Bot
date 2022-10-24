// S C R I P T  O R I  B Y  Bochilgaming And KANNACHAN 🔭
// Ditulis Ulang Oleh WH MODS DEV
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -
// • Allah SWT
// • Nurutomo
// • Bochilgaming
// • Rominaru
// • Kannachann
// • FahriAdison
// • The.Sad.Boy01
// • Rlxfly
// • Rasel comel
// • ImYanXiao
// • WH MODS DEV
// • Xtreshe
// • Dll

//[!] Jangan Lupa Ganti Ownernya

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v

global.sig = 'https://instagram.com/xianzhe_xx' // ig
global.sgh = 'https://github.com/xianzheid/' // github
global.sgc = 'https://chat.whatsapp.com/HP5Pbp9MT0eIaC5lfJgw9A' // group whatsapp
global.sdc = 'https://www.discord.com'//discord
global.snh = 'https://youtube.com/channel/UCZr8qo58_6ZNhvt5pYVox9Al' // my youtube channel
global.sfb = 'https://www.facebook.com/' // facebook
global.syt = 'https://youtube.com/channel/UCZr8qo58_6ZNhvt5pYVox9Al'' // my youtube channel "kalau ada yt ke 2 tarok link nya disini"

/*============== PAYMENT ==============*/
global.pdana = '+62 853-2678-1097' //dana
global.povo = '+62 853-2678-1097' //ovo
global.pgopay = '+62 853-2678-1097' //gopay
global.plinkaja = '-' //link aja
global.ppulsa = '+62 853-2678-1097' //telkomsel
global.ppulsa2 = '+62 853-5880-5324' // kalau ada kartu lain isi aja
global.psaweria = 'https://saweria.com/xianzhe'

/*============== NOMOR ==============*/
global.nomorbot = '6285358805324'
global.nomorown = '6285326781097'
global.namebot = 'Xia Feixuan-V4'
global.nameown = 'Xianzhe ID'

/*============== Github Thanks To ==============*/
global.namagithub = 'XianzheID' // nama github lu
global.linkgithub = 'https://github.com/xianzhe-id' // tarok link github lu

// klau kgk ada github kasih tanda '-' aja biar kgk error

/*============== APIKEY SIMPEL ==============*/
global.zenzkey = 'b8040941f7'
global.lolkey = 'e54205a4ca2caa368cc067bb' // PUNYA WAHID  8e66d0934cf741bfd2182c16


/*============== STAFF ==============*/
global.owner = [
  ['6285326781097', 'Xianzhe ID', true],
  ['6285358805324', 'Xia Feixuan', true],
  ['-', 'ISI KALAU ADA', true],
  ['-', 'ISI KALAU ADA', true],
  ['-', 'ISI KALAU ADA', true]
    //Ganti jd nomormu sama Namamu
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/', 
  violetics : 'https://violetics.pw',
  ziy : 'https://ziy.herokuapp.com',
  males : 'https://malesin.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'ebb6251cc00f9c63',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'e54205a4ca2caa368cc067bb',// 8e66d0934cf741bfd2182c16
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'melcantik',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Apikeymu',
  'https://hardianto.xyz': 'hardianto',
  'https://violetics.pw': 'beta',
  'https://ziy.herokuapp.com' : 'xZiyy'
}
// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/
global.wm = '「 Xia Feixuan-V4 」' //Main Watermark
global.wm2 =  ' '
global.wm3 = '/nhttps://instagram.com/xianzhe_xx/n'
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.titlebot = `⫹⫺ WhatsApp Bot | By Xianzhe ID`
global.packname = '☂︎ ᴄʀᴇᴀᴛᴇᴅ ʙʏ'
global.author = '©Xianzhe ID'

/*Fake*/
global.fsizedoc = '1'.repeat(10)
global.fpagedoc = '1'.repeat(10)
global.thumbdoc = 'https://telegra.ph/file/5b0e97331a147f2036888.jpg'


/*============== LOGO ==============*/
global.thumb = 'https://telegra.ph/file/5b0e97331a147f2036888.jpg' //Main Thumbnail
global.imagebot = 'https://telegra.ph/file/5b0e97331a147f2036888.jpg'
global.giflogo = 'https://telegra.ph/file/5aed3d54ea66124f69a5e.mp4'
global.thumbs = ['https://telegra.ph/file/5b0e97331a147f2036888.jpg']
global.fla = 'https://telegra.ph/file/7c31849e2d4c33bb45462.mp4'
global.thumbnailUrl = [
'https://telegra.ph/file/2cd3626c740ba091c98ff.jpg', 'https://telegra.ph/file/f8e9f27ae13fc71e1fde7.jpg', 'https://telegra.ph/file/590f94b0907c9cafb7494.jpg', 'https://telegra.ph/file/2cd3626c740ba091c98ff.jpg', 'https://telegra.ph/file/f8e9f27ae13fc71e1fde7.jpg', 'https://telegra.ph/file/590f94b0907c9cafb7494.jpg', 'https://telegra.ph/file/ddda3405b847c58198684.jpg']

global.flaaa2 = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']
global.hwaifu2 = ['https://telegra.ph/file/2cd3626c740ba091c98ff.jpg', 'https://telegra.ph/file/f8e9f27ae13fc71e1fde7.jpg', 'https://telegra.ph/file/590f94b0907c9cafb7494.jpg', 'https://telegra.ph/file/2cd3626c740ba091c98ff.jpg', 'https://telegra.ph/file/f8e9f27ae13fc71e1fde7.jpg', 'https://telegra.ph/file/590f94b0907c9cafb7494.jpg', 'https://telegra.ph/file/ddda3405b847c58198684.jpg']

/*============== HENTAI ==============*/ 
//OPTIONS
global.optsnsfw = true // Untuk mematikan Dan Menyalakan Nsfw
global.premnsfw = true // Nsfw Mode Premium?


//Ini cuma simpenan owner kok :v
global.hoppai = ['https://telegra.ph/file/f34d76df4a2065af1a5ba.jpg','https://telegra.ph/file/05c1b22ee83bcd7723b4d.jpg','https://telegra.ph/file/1d886f66a44871205335f.jpg','https://telegra.ph/file/54d19a9094dc509370bf9.jpg','https://telegra.ph/file/e649475bcde78a9977ee5.jpg','https://telegra.ph/file/32ba20b6139b129c559c8.jpg','https://telegra.ph/file/948434cda49e4af5d9f11.jpg','https://telegra.ph/file/6f353c68533283fe79871.jpg','https://telegra.ph/file/de268ca9b01101acf2b8a.jpg','https://telegra.ph/file/fc6c5b2ae9a20c4256e7f.jpg', 'https://telegra.ph/file/efb70bb0988640f841742.jpg', 'https://telegra.ph/file/77d03fff530a2bcff3bf7.jpg','https://telegra.ph/file/6e4623464a659dd8d902b.jpg','https://telegra.ph/file/685aa39f0cb0f2c4fd85b.jpg','https://telegra.ph/file/10454b9ad693e1eefea58.jpg','https://telegra.ph/file/7de8ce5c290c3d8be0856.jpg','https://telegra.ph/file/8d7c4eadb7a4722747074.jpg','https://telegra.ph/file/ccc5f8eaac0f30919ef6c.jpg','https://telegra.ph/file/95f4b43439d7888f15ea5.jpg','https://telegra.ph/file/9c2a750db555bd2fad1f3.jpg', 'https://telegra.ph/file/efc5f7e637744fd6bfec2.jpg','https://telegra.ph/file/3a5231aade245665633bd.jpg','https://telegra.ph/file/2ecfc76feb26ec1eab99b.jpg','https://telegra.ph/file/dabb70983b4e833d98344.jpg','https://telegra.ph/file/75193a893e38fc580afe6.jpg','https://telegra.ph/file/217aa0f4ec76273808aa4.jpg','https://telegra.ph/file/8a35d3446b97ae22c7b23.jpg','https://telegra.ph/file/092df720701575a7ceaaa.jpg','https://telegra.ph/file/a65184a676cd648de34c3.jpg',
'https://telegra.ph/file/180e28807e78419d45537.jpg','https://telegra.ph/file/140eff27be983e0cd6781.jpg','https://telegra.ph/file/1581b791e16d0029e16b5.jpg','https://telegra.ph/file/6a4b36372b4f265bae3bc.jpg','https://telegra.ph/file/093caff422f194f00bc6c.jpg','https://telegra.ph/file/2294b7ab49eca8a8046b2.jpg','https://telegra.ph/file/869224d1c417e8b5c8ff1.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg','https://telegra.ph/file/1889878933264d16c58bf.jpg','https://telegra.ph/file/735aeb47d9c4aa87aaaf3.jpg','https://telegra.ph/file/fcf861516db09dda164e0.jpg','https://telegra.ph/file/355d96d7e06d109435f67.jpg']
global.hwaifu = ['https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg',
'https://i.pinimg.com/originals/85/4d/bb/854dbbd30304cd69f305352f0183fad0.jpg',
'https://i.pinimg.com/originals/32/2c/a4/322ca456fa2cdec4b717895a65adfa8d.jpg',
'https://i.pinimg.com/originals/f2/dd/cc/f2ddccd5a1b89d2302cf75c6520c58dd.png',
'https://i.pinimg.com/originals/aa/6b/df/aa6bdf98cbc9e1fc741c36682fa3e838.jpg',
'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
'https://i.pinimg.com/originals/46/ad/05/46ad0505d33a2c2359f84ed9b867a58c.jpg',
'https://i.pinimg.com/originals/23/b7/fb/23b7fb922770e139a2a57b1a443a2180.jpg',
'https://i.pinimg.com/originals/46/79/25/467925d52634fd098ab6890a23c33f30.jpg',
'https://i.pinimg.com/originals/a4/a1/74/a4a1740e565f4205eb3f700e1936e064.jpg',
'https://i.pinimg.com/originals/f9/8d/2c/f98d2c3f64e50ba6c8efd9fdc7cf0093.png',
'https://i.pinimg.com/originals/29/a4/b4/29a4b4573f993d7d6abb45843f529892.jpg',
'https://i.pinimg.com/originals/40/de/84/40de84ce2ee376d8fae8ff5863d6edb0.jpg',
'https://i.pinimg.com/originals/b6/f5/b7/b6f5b7d59fd4f332b3820db38612a5a0.jpg',
'https://i.pinimg.com/originals/94/38/6d/94386d3c23f509dbc30341fed0363a07.jpg',
'https://i.pinimg.com/originals/b5/94/ef/b594ef0774d29f5a05cd182994aa354e.jpg',
'https://i.pinimg.com/originals/0f/ed/3f/0fed3f4c456158c506d88f5867ca93d2.jpg',
'https://i.pinimg.com/originals/1b/7a/a8/1b7aa80191b83b888e9ea6042f090763.jpg',
'https://i.pinimg.com/originals/72/7a/08/727a08cdf67b62c2ba49e7308c09a1cd.jpg',
'https://i.pinimg.com/originals/86/93/75/8693757390b9d5b83fb8e40ff9ea876f.jpg',
'https://i.pinimg.com/originals/5f/79/71/5f79713647b3e99a787ee7483715c1eb.jpg',
'https://i.pinimg.com/originals/b8/b3/f3/b8b3f397fead38a988174df75d481202.png',
'https://i.pinimg.com/originals/7a/e0/55/7ae055891f8200cd62ec76a40d47118d.jpg',
'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',
'https://i.pinimg.com/originals/22/8b/ca/228bca60a07d72cac953a9c3be542bab.jpg',
'https://i.pinimg.com/originals/41/10/c6/4110c64fc91a1c85de02166f67aff7ad.jpg',
'https://i.pinimg.com/originals/45/11/41/451141522a9086f56efc0da3fdac1957.jpg',
'https://i.pinimg.com/originals/c1/4e/c7/c14ec7dffbc682f78c52ad8a295b8831.jpg',
'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',
'https://i.pinimg.com/originals/1f/95/15/1f95156c3d8e2b339a22b3bad2f69a8a.png',
'https://i.pinimg.com/originals/bb/1a/12/bb1a1249dbc73736ab534fdd52bdc74c.jpg',
'https://i.pinimg.com/originals/d5/58/a7/d558a745f2452d851d480025ab341537.jpg',
'https://i.pinimg.com/originals/e7/00/0e/e7000e7e72c1b37ea7a4c780182d05d8.jpg',
'https://i.pinimg.com/originals/9e/53/a9/9e53a92ee711d979b9bdbb6212115fe0.jpg',
'https://i.pinimg.com/originals/c6/16/d9/c616d9a871ed3cd9fb6a46efb7f92d95.jpg',
'https://i.pinimg.com/originals/ac/f0/29/acf029047efffe57999fa876554cbf1d.jpg',
'https://i.pinimg.com/originals/ae/86/3b/ae863b64ca579f05008dbf027b04988f.jpg',
'https://i.pinimg.com/originals/d5/65/43/d56543a959da518e08012b4db93747bb.jpg',
'https://i.pinimg.com/originals/ed/3c/e2/ed3ce276ca71e5bfec1cf2fbfc5561e1.jpg',
'https://i.pinimg.com/originals/66/30/37/663037f00539f3bc1dbd3efeae0d700b.jpg',
'https://i.pinimg.com/originals/63/6b/7b/636b7bd0e1df03f0bf72c494cedd6f07.png',
'https://i.pinimg.com/originals/db/a4/13/dba413518c0a470a5e81cafa431281da.jpg',
'https://i.pinimg.com/originals/3b/d9/aa/3bd9aa880d23dc3262e119ca09345e99.jpg',
'https://i.pinimg.com/originals/ef/90/4e/ef904eda01a996e5a9d557a55db6da0f.png',
'https://i.pinimg.com/originals/fb/f7/a9/fbf7a92af75577e33a564ce490154c8f.jpg',
'https://i.pinimg.com/originals/16/92/89/1692897136ac3688ab9ccdbb0e54fb21.jpg',
'https://i.pinimg.com/originals/fc/51/4e/fc514e2f4c23eb96721611b483edc28c.jpg',
'https://i.pinimg.com/originals/bb/a4/98/bba49848bc4369333f4128b62fc64258.jpg',
'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',
'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
'https://i.pinimg.com/originals/83/e5/71/83e5710c42b9e8b9e1a4b6381c4535fe.jpg',
'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
'https://i.pinimg.com/originals/32/2c/a4/322ca456fa2cdec4b717895a65adfa8d.jpg',
'https://i.pinimg.com/originals/42/88/f1/4288f17ee25b909430fb7e707d961d0b.jpg',
'https://i.pinimg.com/originals/16/14/9c/16149c94a7c0f753230b1edbd03ab3e6.jpg',
'https://i.pinimg.com/originals/7f/f5/46/7ff546b38e2969e578e697c44944b74f.jpg',
'https://i.pinimg.com/originals/6d/bc/61/6dbc616311268a25b0ee0e1bd4de13b6.jpg',
'https://i.pinimg.com/originals/60/34/18/603418ea5c35839914a1071e134add8b.jpg',
'https://i.pinimg.com/originals/5f/79/71/5f79713647b3e99a787ee7483715c1eb.jpg',
'https://i.pinimg.com/originals/ed/ea/37/edea37b6f876bfc8f59bbae4d43e26d7.jpg',
'https://i.pinimg.com/originals/94/38/6d/94386d3c23f509dbc30341fed0363a07.jpg',
'https://i.pinimg.com/originals/f6/20/b4/f620b4b1c2aaf096455952465db8a980.jpg',
'https://i.pinimg.com/originals/97/50/73/9750731b4b004da61d44fe01dbe93d85.jpg',
'https://i.pinimg.com/originals/a0/55/41/a055419e96bc61a5990c575af10ba99e.png',
'https://i.pinimg.com/originals/aa/6b/df/aa6bdf98cbc9e1fc741c36682fa3e838.jpg',
'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',
'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',
'https://i.pinimg.com/originals/c4/e4/1d/c4e41d096e7585a7e6245e852ece25c2.jpg',
'https://i.pinimg.com/originals/87/cf/bc/87cfbc189e773ed9294bccfd50a4fbc7.jpg',
'https://i.pinimg.com/originals/7a/3b/e6/7a3be6cf1595fe6764b5b18b46ca576d.jpg',
'https://i.pinimg.com/originals/c5/42/f8/c542f83b992e51c6d2519f07489b1dec.jpg',
'https://i.pinimg.com/originals/96/29/1e/96291e9abbf311b8fc6c8c3f9f8ae059.jpg',
'https://i.pinimg.com/originals/e5/1a/8d/e51a8d35d2b717fa757fa2abf053a2c7.jpg',
'https://i.pinimg.com/originals/47/18/af/4718afcd517c8e7e07cc9dba48b3b770.jpg',
'https://i.pinimg.com/originals/39/2c/cb/392ccb1793c5a23783869994b1ec24b7.jpg',
'https://i.pinimg.com/originals/0f/98/5f/0f985ffbfff2650d6e3ecf8ba0eb574e.jpg',
'https://i.pinimg.com/originals/ab/f9/50/abf950c9aa1c4710437d9acc83078f87.jpg',
'https://i.pinimg.com/originals/f2/dd/cc/f2ddccd5a1b89d2302cf75c6520c58dd.png',
'https://i.pinimg.com/originals/f1/f7/fc/f1f7fca39eba7d64e50749da5406247c.jpg',
'https://i.pinimg.com/originals/71/18/96/711896c067c28814ec9ec9c25d4a3ba9.jpg',
'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',
'https://i.pinimg.com/originals/8f/fe/d4/8ffed485ed8b6db07067e452f8399fff.jpg',
'https://i.pinimg.com/originals/db/b6/46/dbb6463c9134591aa79369f325877e03.jpg',
'https://i.pinimg.com/originals/9f/23/1a/9f231a6acc906f95ff3f917211b9abda.png',
'https://i.pinimg.com/originals/b9/a9/66/b9a9669f0fbbe75e780adad301601b43.jpg',
'https://i.pinimg.com/originals/86/ed/26/86ed265f2dbb22a48bbc612f59303508.png',
'https://i.pinimg.com/originals/da/ae/25/daae25409adec418a9b6f6c5dcdecd47.jpg',
'https://i.pinimg.com/originals/a4/6d/fa/a46dfad749d0577366e9ea2db6cc305e.jpg',
'https://i.pinimg.com/originals/09/5b/4d/095b4d0ce48f40eca7ad23e43e85ab9a.jpg',
'https://i.pinimg.com/originals/d9/e1/30/d9e1307a5fbbeb2a267562eab8abc063.jpg',
'https://i.pinimg.com/originals/db/cf/dc/dbcfdc263095906eabf7e06099ebaef0.png',
'https://i.pinimg.com/originals/89/14/0d/89140d3ef976904013f672fea0157b7e.png',
'https://i.pinimg.com/originals/cf/4f/cf/cf4fcf2036f0b5b974f146f2c0ba81db.jpg',
'https://i.pinimg.com/originals/93/62/9e/93629ee9ab27043076bce2b1f22f9193.jpg',
'https://i.pinimg.com/originals/99/6b/c4/996bc4049d632bdbf7d9bc24dc8081f0.png',
'https://i.pinimg.com/originals/f2/6d/35/f26d354b1421546ae993c83f5c7bcfb0.jpg',
'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',
'https://i.pinimg.com/originals/08/8f/1d/088f1dc58092b60652e05cc941ee0fbd.jpg',
'https://i.pinimg.com/originals/14/17/dd/1417dd63009eea0b63252076f3b405e6.jpg',
'https://i.pinimg.com/originals/35/04/d5/3504d53c5850b3bddaa6e0e0714ccacb.jpg',
'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
'https://i.pinimg.com/originals/44/39/17/443917c07ffd65caa7d7cd4065fb8571.jpg',
'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',
'https://i.pinimg.com/originals/4a/e2/74/4ae274c828a2c719bcf9f644106d26cf.jpg',
'https://i.pinimg.com/originals/d0/cb/da/d0cbdaa334fa92f8b09d1c4d1ddc9cd2.jpg',
'https://i.pinimg.com/originals/71/16/31/711631ac52f7809f530e40f230b371a4.jpg',
'https://i.pinimg.com/originals/af/f1/1b/aff11bcfdf946a7bba1687c80515f902.jpg',
'https://i.pinimg.com/originals/46/79/25/467925d52634fd098ab6890a23c33f30.jpg',
'https://i.pinimg.com/originals/ef/90/4e/ef904eda01a996e5a9d557a55db6da0f.png',
'https://i.pinimg.com/originals/a2/e7/73/a2e773fdb7ce0fc99eb123d8a81764ec.jpg',
'https://i.pinimg.com/originals/79/92/ed/7992ed0c9b272654938ea186cc2e3f4a.jpg',
'https://i.pinimg.com/originals/7a/08/c8/7a08c8c22066a142f22928662d9d70aa.jpg',
'https://i.pinimg.com/originals/20/b0/96/20b0962b8c62584fbcd6e7675b4782a4.jpg',
'https://i.pinimg.com/originals/51/0f/8c/510f8cb8f28b8666d560f89e2006d4b1.jpg',
'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',
'https://i.pinimg.com/originals/4e/43/7b/4e437b1bbdee605d833155a97d35bef1.png',
'https://i.pinimg.com/originals/d5/a2/c9/d5a2c9cdfac835518e45b13cfc39819d.jpg',
'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',
'https://i.pinimg.com/originals/16/92/89/1692897136ac3688ab9ccdbb0e54fb21.jpg',
'https://i.pinimg.com/originals/6f/9a/86/6f9a86eb31e7c5bc34cf0d1d130574e0.png',
'https://i.pinimg.com/originals/f0/67/f0/f067f00a885fab47d76d4e5423d54c35.jpg',
'https://i.pinimg.com/originals/4e/9a/7a/4e9a7a196cea58427163313b7db6363e.jpg',
'https://i.pinimg.com/originals/53/4c/6a/534c6a2e65fdb4c52824f94acc5e2195.jpg',
'https://i.pinimg.com/originals/8d/04/9a/8d049a1e6951491b24ea4c364f2459bc.jpg',
'https://i.pinimg.com/originals/22/dc/94/22dc941e60b0ace15d796a94f07d8ba7.jpg',
'https://i.pinimg.com/originals/80/bc/96/80bc968b4dcd939b60ffe2c8b0c54d75.png',
'https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg',
'https://i.pinimg.com/originals/9b/36/24/9b36241f4a3b782c05eadb0805ef0dda.png',
'https://i.pinimg.com/originals/22/8b/ca/228bca60a07d72cac953a9c3be542bab.jpg',
'https://i.pinimg.com/originals/57/0e/9b/570e9b1288f1189a22b39c8e24ec957f.jpg',
'https://i.pinimg.com/originals/68/af/17/68af1781a9120a59629d0f774555185f.jpg',
'https://i.pinimg.com/originals/42/88/f1/4288f17ee25b909430fb7e707d961d0b.jpg',
'https://i.pinimg.com/originals/c8/0e/ee/c80eeea7a37d732d5a1b0e60464f9e18.jpg',
'https://i.pinimg.com/originals/1d/08/cb/1d08cbb9d42812984bed54e8291edaec.jpg',
'https://i.pinimg.com/originals/4e/37/02/4e37020a3e69f16cd04b246c2937b979.jpg',
'https://i.pinimg.com/originals/59/8e/bf/598ebf206f5ec366e2e32e8c6e8cffb4.jpg',
'https://i.pinimg.com/originals/cb/ef/94/cbef94975cfed070027c2175a730155d.jpg',
'https://i.pinimg.com/originals/e0/74/f8/e074f8dc647066a9f112533c789c0e42.png',
'https://i.pinimg.com/originals/60/ac/9e/60ac9edf63fcb43e3f00555cb71ae6f2.jpg',
'https://i.pinimg.com/originals/17/16/76/1716760d93dcbf7664380fd81f3133f5.jpg',
'https://i.pinimg.com/originals/a3/70/e1/a370e1f592136a385ac6cb15918d25f1.jpg',
'https://i.pinimg.com/originals/89/ee/ab/89eeabd90e54b2951459f81f51e2c791.jpg',
'https://i.pinimg.com/originals/77/0d/23/770d235d3f6dcd021bda5efdf53cca36.png',
'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',
'https://i.pinimg.com/originals/c3/1e/58/c31e58fae7f58af4d643c5a2facd49d7.jpg',
'https://i.pinimg.com/originals/0f/98/5f/0f985ffbfff2650d6e3ecf8ba0eb574e.jpg',
'https://i.pinimg.com/originals/93/0a/5f/930a5fc6f8f6e64e87ac2cc30b8430ac.jpg',
'https://i.pinimg.com/originals/1e/14/22/1e14229be49534cbf3d43b71b1738b80.jpg',
'https://i.pinimg.com/originals/35/04/d5/3504d53c5850b3bddaa6e0e0714ccacb.jpg',
'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',
'https://i.pinimg.com/originals/7f/f5/46/7ff546b38e2969e578e697c44944b74f.jpg',
'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',
'https://i.pinimg.com/originals/d5/a2/c9/d5a2c9cdfac835518e45b13cfc39819d.jpg',
'https://i.pinimg.com/originals/d7/02/54/d7025401aec66a4baf0fbcbc1054b499.jpg',
'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',
'https://i.pinimg.com/originals/ee/ee/fd/eeeefda1774a2d5dced265c1a2d398d5.jpg',
'https://i.pinimg.com/originals/c3/1e/58/c31e58fae7f58af4d643c5a2facd49d7.jpg',
'https://i.pinimg.com/originals/1f/9c/1d/1f9c1d5f4d2de0b74e81f190ab4f1792.jpg',
'https://i.pinimg.com/originals/7a/3b/e6/7a3be6cf1595fe6764b5b18b46ca576d.jpg',
'https://i.pinimg.com/originals/51/08/53/5108536a4826d3354ac3fe9c3c867cb1.png',
'https://i.pinimg.com/originals/77/cc/bc/77ccbcd52758458669ed5eadf4437111.jpg',
'https://i.pinimg.com/originals/51/0f/8c/510f8cb8f28b8666d560f89e2006d4b1.jpg',
'https://i.pinimg.com/originals/6f/9a/86/6f9a86eb31e7c5bc34cf0d1d130574e0.png',
'https://i.pinimg.com/originals/79/92/ed/7992ed0c9b272654938ea186cc2e3f4a.jpg',
'https://i.pinimg.com/originals/39/2c/cb/392ccb1793c5a23783869994b1ec24b7.jpg',
'https://i.pinimg.com/originals/3b/2c/02/3b2c020665f835b0dfdd74b8cc9ca22d.jpg',
'https://i.pinimg.com/originals/ee/cf/7c/eecf7cc7f65e5d503399cc88f0e6ef6c.jpg',
'https://i.pinimg.com/originals/4e/9a/7a/4e9a7a196cea58427163313b7db6363e.jpg',
'https://i.pinimg.com/originals/8b/f8/46/8bf8468935d529c6383771097381196a.jpg',
'https://i.pinimg.com/originals/f3/5d/ce/f35dce5f6742bd4f30033fe7b51335cc.jpg',
'https://i.pinimg.com/originals/94/a6/69/94a6692d5bd9ba0bbd80ba1e4122b2f9.jpg',
'https://i.pinimg.com/originals/8f/55/04/8f55043dfd9d244f172077bdc0304c6a.png',
'https://i.pinimg.com/originals/89/ee/ab/89eeabd90e54b2951459f81f51e2c791.jpg',
'https://i.pinimg.com/originals/83/5a/2e/835a2e582d1f803f03ab3a3c3e58b694.jpg',
'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',
'https://i.pinimg.com/originals/e2/f1/0e/e2f10ead12c9a2d7c0bb29442604f43d.jpg',
'https://i.pinimg.com/originals/f5/2a/09/f52a09910f1cad9b5b01d79a620870dc.jpg',
'https://i.pinimg.com/originals/d9/e1/30/d9e1307a5fbbeb2a267562eab8abc063.jpg',
'https://i.pinimg.com/originals/6a/4d/11/6a4d11cb5bab1466cf1ccb8c6c4f9eb6.jpg',
'https://i.pinimg.com/originals/f3/b7/37/f3b7376c2a574b8619c197bce72d1f63.png',
'https://i.pinimg.com/originals/93/0a/5f/930a5fc6f8f6e64e87ac2cc30b8430ac.jpg',
'https://i.pinimg.com/originals/30/78/75/307875a9132c6e704eec94bc31fd4f71.jpg',
'https://i.pinimg.com/originals/12/fa/7d/12fa7df7ba74ac00d846d8d490f7c8a4.jpg',
'https://i.pinimg.com/originals/68/f6/f3/68f6f37335624f89cda17ab928f51138.jpg',
'https://i.pinimg.com/originals/de/f6/e7/def6e7ce26ad6a1096e8b1ef395a1904.jpg',
'https://i.pinimg.com/originals/cc/17/be/cc17be94cd520baa4722e0ca2329c2e9.jpg',
'https://i.pinimg.com/originals/b3/c5/d1/b3c5d1076a9a48c075c8a92987b03bf3.jpg',
'https://i.pinimg.com/originals/2c/e6/02/2ce6025d9d1736cf3e67db1fd2bdaf35.jpg',
'https://i.pinimg.com/originals/31/07/53/310753699042b254fdfa0472a2675158.jpg',
'https://i.pinimg.com/originals/6b/87/9c/6b879cc29b5df23941dab4f4aafabcbd.jpg',
'https://i.pinimg.com/originals/52/90/0b/52900bab0f969d9d68207f6ad8510882.jpg',
'https://i.pinimg.com/originals/25/7e/db/257edb1b91a127bcf91cc2ea6b29edaf.jpg',
'https://i.pinimg.com/originals/63/6b/7b/636b7bd0e1df03f0bf72c494cedd6f07.png',
'https://i.pinimg.com/originals/8d/ad/58/8dad58f3b258b3d7f2e913cb4561d99f.jpg',
'https://i.pinimg.com/originals/8d/04/9a/8d049a1e6951491b24ea4c364f2459bc.jpg',
'https://i.pinimg.com/originals/fd/21/41/fd21419275236bb153de3c8dcbbf3bf9.jpg',
'https://i.pinimg.com/originals/80/4f/1a/804f1a05f9996c96a2d492b4854b7fd5.jpg']
global.hyuri = ['https://telegra.ph/file/5d908f4a17515a15c6202.jpg']
global.hLokun = ['https://telegra.ph/file/8902f4fc550727a62e99f.jpg','https://telegra.ph/file/6a6a40e924c16a8f0de03.jpg', 'https://telegra.ph/file/b035d3038a0b124f1d846.jpg', 'https://telegra.ph/file/9d475f7852bf6f6193c80.jpg']
global.hloli = ['https://telegra.ph/file/872c360a7104d86752650.jpg', 'https://telegra.ph/file/f6bbb53620374257bfa51.jpg','https://telegra.ph/file/9b76375f3869440818d57.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg']
global.hneko = ['https://telegra.ph/file/805a37b1e9a963e7d7ecf.jpg', 'https://telegra.ph/file/f9c4d97477b647cf57a2b.jpg','https://telegra.ph/file/b6905b77e6c7732592a13.jpg', 'https://telegra.ph/file/9f82c432d0ba4cfffda9a.png', 'https://telegra.ph/file/484083949d4bfd763b8cf.jpg']
global.hbunny = ['https://telegra.ph/file/2b71a8d46d29351479fbc.jpg', 'https://telegra.ph/file/ae610571b62b5ab876e9c.jpg', 'https://telegra.ph/file/cc8255d5b989eef587af2.jpg','https://telegra.ph/file/30d2e7375996abd9cfee3.jpg', 'https://telegra.ph/file/78980c90c44a95a1d30fa.jpg', 'https://telegra.ph/file/2ac5d8ccf23e73eaa5bfa.jpg']
global.hbeach = ['https://telegra.ph/file/14ae0ba2da77d74e6b80c.jpg', 'https://telegra.ph/file/b6905b77e6c7732592a13.jpg','https://telegra.ph/file/9da45a352eb4c40e5d641.jpg', 'https://telegra.ph/file/59e78846ee365975ee6e3.jpg','https://telegra.ph/file/1bf7dee46b83eb4c41d7d.jpg','https://telegra.ph/file/0525a7929f819cb8278f3.jpg']
global.hgatcha = ['https://i.ibb.co/h9V9Sk8/9-Cloud-us-0517-Aff69-D03-B8-C2-4327-8-01-Fy5-K07-K02-Dhkhn73861-Ghqp216.jpg', 'https://i.ibb.co/YymF7GQ/9-Cloud-us-0167-7-D882-Dab-331-E-41-Dd-A-01-Fy5-Jrskcnxvgbqz48-Rw936-Mn16.jpg', 'https://i.ibb.co/9tcS7hs/9-Cloud-us-0515-Redxxxcc-Mona-At-01-Fyxaxhjn7-F0-Pk9-Cj8-Ys02-Rak1680-X0.jpg', 'https://i.ibb.co/mq0Fmsn/9-Cloud-us-0476-Sample-93839-Ae8953-A0-01-G57-F93-D2-Ft2-Z1-Z4-Mt3-Qgckaa16.jpg', 'https://i.ibb.co/hd3rjNq/9-Cloud-us-0520-632-A7-F88-7572-4-F78-B-01-Feqwv04-Nn80-D6-Whsnsq25-K7216.jpg', 'https://i.ibb.co/bRkYDMK/9-Cloud-us-0007-4453602-Genshin-Im-01-G57-Eq3-Yeyjc7-Qqy34-G6-A2-Pa21680.jpg', 'https://i.ibb.co/tMSLcSB/9-Cloud-us-0436-935730838-C69588178-Cb-01-Ft4-Hdp35-K4-D24-A716-Qdf9-Tr616.jpg', 'https://i.ibb.co/10cLcVD/9-Cloud-us-0025-Bead38-D3-A381-4-B88-B-01-Fdjff18-Kmknj7-C4979-G5-Qkh716.jpg', 'https://i.ibb.co/WDY2pcm/9-Cloud-us-0481-H48-Jsms483-F71-01-Feqwtgvm6-Bd9-Pq4-J0-K3-M6-Kad1680-X0.jpg', 'https://i.ibb.co/9WndTXX/9-Cloud-us-0208-94171841-P6-Master12-01-Fw7-S71-C2-Sk8-Mfsggccmpb9-Hp16.jpg', 'https://i.ibb.co/wK0gvKP/9-Cloud-us-0439-Yqnblqb-01-Ffvc4-Sa0-Js8-Z9-Zec9-Exsth2-S1680-X0.jpg', 'https://i.ibb.co/SV78xYk/9-Cloud-us-0235-D80-B3641-1-B40-4599-8-01-Fbpykwfanf7-Tf5-Ymp0-Jq8-N1-D16.jpg', 'https://i.ibb.co/F7jxc22/9-Cloud-us-0012-07-Ff7698-Bfeb-44-F7-A-01-Fy5-Jqf0-Hsnayvy8-Fqb2-V42-Jd16.jpg', 'https://i.ibb.co/b3HDk0y/9-Cloud-us-0027-D8-Bfb6974-Fcf3-A8306-B3-01-Ft4-Hh9-Ywby7-Eghmk3-Qr1-Wxqr16.jpg', 'https://i.ibb.co/LZH6dv3/9-Cloud-us-0240-4-Q4-Bvqn4-Hu471-01-Ffvdgp3-Kcz55-Vcfn5-X4-Ttp8-B1680-X0.jpg', 'https://i.ibb.co/mcwcjjF/9-Cloud-us-0241-156-01-Fz7-Dwrsp3-Dkffn44-D3-Cmwrr01680-X0.jpg', 'https://i.ibb.co/fHrSVGQ/9-Cloud-us-0035-4629118-Fischl-Gen-01-G5-Svw53-Trfyqa0-M8-Jheme5-Yz1680.jpg', 'https://i.ibb.co/2cNqpqV/9-Cloud-us-0228-Yandere-706640-Brea-01-Ezh2-H991-Kms4-Vm9-Yzwhabsgs168.jpg', 'https://i.ibb.co/JFc2GkL/9-Cloud-us-0229-C86-D1-Ead-69-Af-45-Fd-8-01-G1-Wx72-R1-Jwxpt01-Bja4-Avm4-K16.jpg', 'https://i.ibb.co/xS2GsZ1/9-Cloud-us-0486-B7-D5947-B-17-B8-42-E6-9-01-Fy5-Jzypwfgbc1-Gq1-K89-Vjtfj16.jpg', 'https://i.ibb.co/6yDZ1wP/9-Cloud-us-0152-Ovnypw8-Jeio71-01-Fyxax9-Hts817-Eb068-Aqj3-Gpa1680-X0.jpg', 'https://i.ibb.co/wr4FWSw/9-Cloud-us-0037-3-Bf365-F76-D4-B5-Df25-Bbb-01-Fsz4-Cd9-C9-Jxwhcf2-Fs41-T1-N816.jpg', 'https://i.ibb.co/sFNx0pQ/9-Cloud-us-0469-28-Af9-A0-F46-F8-Fec293-Ba-01-Ft4-H6-Ftt5-Q06-S0-Jqj0-Ydh40-G16.jpg', 'https://i.ibb.co/fpfg1fr/9-Cloud-us-0504-Ed0-Abe08-5-E8-F-4967-B-01-Fdjfh2-N4-D3-Jqkqzmq1-F11-Py516.jpg', 'https://i.ibb.co/qWPCZ6W/9-Cloud-us-0044-26-01-Fjgnbsk1-A1-Fq8-Xzzhn2-T72-Mq1680-X0.jpg', 'https://i.ibb.co/qCzxXhH/9-Cloud-us-0013-De545-De9-9-Fbc-48-D0-8-01-Fdjfdbxa0-Kcx0-Eawdptke6-Yj16.jpg', 'https://i.ibb.co/x30gMRK/9-Cloud-us-0223-Diona-Genshin-Impact-01-Fz7-D9-Q0-X7-Wcmwpkncprm44-Qa16.jpg', 'https://i.ibb.co/Rzfvkdq/9-Cloud-us-0433-Sample-E4334-Fb8-E4-E95-01-Fqxershm8-Y8-Pnm7-C7-X60-Sk5116.jpg', 'https://i.ibb.co/Fbc9wSR/9-Cloud-us-0024-4574603-Genshin-Im-01-G57-Etghx55-Cxh6-Yw6-Mj1-Yjbc1680.jpg', 'https://i.ibb.co/5F4w2wr/9-Cloud-us-0521-54-Dcbc37-6-B4-A-4-D40-8-01-F8-Fd32-S6-Qhpb0-W825-Mhtge9-F16.jpg', 'https://i.ibb.co/qFWR9yK/9-Cloud-us-0049-D6-Ee2-E70-4-Fa4-4-F32-9-01-G007-Fwcary4-W6-Qd5-Ezqaj6-Ks16.jpg', 'https://i.ibb.co/f1R91CX/9-Cloud-us-0489-06-A70177-99-E9-4-B36-8-01-Fbpykg12-M1776-Qfrkf5-M6-Dak16.jpg', 'https://i.ibb.co/Vt7ky9p/9-Cloud-us-0516-Sample-0-F72-F559-Da4-F1-01-Fyxbrrbss4-Qpqcrpapcxqacs16.jpg', 'https://i.ibb.co/8jcpszL/9-Cloud-us-0460-8-F20-Dc2-E8-D8-A18-A75-D51-01-Fts6-Zbce62-C1-D2-Fjvv3-Dnnzd16.jpg', 'https://i.ibb.co/VL0wkN1/9-Cloud-us-0492-6-E5-F16-Ef-23-D9-4-D6-E-9-01-Fyxa9-Ynrh7-C4-Xcqxx3-Fjsrxw16.jpg', 'https://i.ibb.co/NSbCvv2/9-Cloud-us-0014-Dhoq44-T-01-Fhf43-J81-E5-Mre9-E7-Y3-Ff1-Yyn1680-X0.jpg', 'https://i.ibb.co/cNb0Vt5/9-Cloud-us-0430-De336-D81-B50-A35-Afd8-Ad-01-Ft4-Hjj7-S5-Yxmpc33-E003-Md1-C16.jpg', 'https://i.ibb.co/F0SPmP0/9-Cloud-us-0438-Sample-14-B547-D7701-Fa-01-Fyxaf50-Znjq96-Vamf8-C6-Se3-K16.jpg', 'https://i.ibb.co/VNQDQsG/9-Cloud-us-0500-1952706-A-4-A7-F-4212-A-01-G532-Fespedjvjvpf7-K96-Xw3916.jpg', 'https://i.ibb.co/dPfX2SB/9-Cloud-us-0231-478641-Feaa22228662-F1-01-Ft4-Hc5-Y6-J8-F97-Gr46-G2-E4-Mqc16.jpg', 'https://i.ibb.co/f8ywgvV/9-Cloud-us-0190-6-Cba187-D86-D4-Ca0-Dddf0-01-Fts6-Y4-Ddw4-Azgn8-Jrszqqt1116.jpg', 'https://i.ibb.co/d0MsH74/9-Cloud-us-0174-526-Ad413-C6-B4-4223-9-01-G1-Wx6-Ybz4-Bdwsmcf3-Ybe933-J16.jpg', 'https://i.ibb.co/wcKvSJb/9-Cloud-us-0293-B5-D612-A7-332-D-480-C-B-01-Fbpykb5-N7-A3-Pqq0-Zk7-Vf7-W5-V16.jpg', 'https://i.ibb.co/qn0tpsR/9-Cloud-us-0011-0738-Fd56-7-F41-4058-A-01-Fy5-Jfgra9-T2-Q2-E67-Zb96-Jtj416.jpg', 'https://i.ibb.co/qMDqS5M/9-Cloud-us-0036-4516651-Fischl-Gen-01-G5-Svqyyhdtygy92-Dbcd1-Fr0-P1680.jpg', 'https://i.ibb.co/Ct1CsFH/9-Cloud-us-0170-4525718-Fischl-Gen-01-G5-Svratxfygd5-Avrm1-Ye87-Y91680.jpg', 'https://i.ibb.co/QXs3qc6/9-Cloud-us-0456-Sample-F9-F3522373564-01-Fs7-Mhrqfhjgj28-Jq9-Z370-Za816.jpg', 'https://i.ibb.co/0fWb94f/9-Cloud-us-0488-2-E316-F175-Db934-A52-Cae-01-Ft12-Wkwtqnrgbtfdd56241-Ht16.jpg', 'https://i.ibb.co/MPmtmwr/9-Cloud-us-0513-Gcugaoy-01-Ffvc39-X23-Fbwdfsareq3-Pa8-P1680-X0.jpg', 'https://i.ibb.co/FmzM1N0/9-Cloud-us-0213-L8-D42-Cnpv-90-N7-Bwpbzi-01-Ezhqzfkzpwdszxjz7-V4-V13-Nq16.jpg', 'https://i.ibb.co/mJ0hbRC/9-Cloud-us-0191-Ec49-D97-Fff05-C2176-Ffe-01-Fsz4-Gr5-Ast7-Ey9-Dypsb3-A78216.jpg', 'https://i.ibb.co/grgt5JF/9-Cloud-us-0028-Raiden-Shogun-Gens-01-Ffvedvpmvz2-Ggbyx31-Z9-Tvz116.jpg', 'https://i.ibb.co/wYPYwfn/9-Cloud-us-0197-82-C2344-C132-Bc9-C305-B1-01-Ft4-H8-Dvejv8-B3-Xgjmz0-T2-Q8-Q16.jpg', 'https://i.ibb.co/QFjHPL7/9-Cloud-us-0180-Ningguang-Genshin-01-Ezw83-Zdmzh7-Ve7-J92-Bb9-Y8-X316.jpg', 'https://i.ibb.co/t2bSjKn/9-Cloud-us-0510-A955-B825-Dbfc-4-E75-B-01-Fy5-Jv0-Mae9-Wzenep4-B1-Nr02716.jpg', 'https://i.ibb.co/3TZpFz4/9-Cloud-us-0250-Aae8-Fe52-11-B3-405-D-B-01-G1-Wx1-Znnx8-N6-Pdtsef2-P5-Hyz16.jpg', 'https://i.ibb.co/yy6z6vT/9-Cloud-us-0491-F286-Beae1-Dc20-D2-Cd381-01-G57-F5-F56-Ttkvg3-K9-Pg6-Gqjhn16.jpg', 'https://i.ibb.co/2h9tdmp/9-Cloud-us-0427-C7289881-F740-496-B-9-01-Fdbx9-Srk4-R3-V5-Jc1-Fg5-Nwstv16.jpg', 'https://i.ibb.co/g4TsVkC/9-Cloud-us-0267-4483982-Fischl-Gen-01-G5-Svqc9-Qt8-Xfcg78-K9-P3-P7-F31680.jpg', 'https://i.ibb.co/zb3YZgq/9-Cloud-us-0243-5-01-Fyn3-H0-B4-Jsrphaxm6-Eb0-Y5-Xq1680-X0.jpg', 'https://i.ibb.co/ZG02LLn/9-Cloud-us-0173-Genshin-Impact-Char-01-F2887-H19-Ggn4-Kpv4-Hx8-Hj13-T168.jpg', 'https://i.ibb.co/5n28xdJ/9-Cloud-us-0478-43-Cd489-F-Ae94-4944-8-01-F9-Bp3-S0-Jmgc8-Gvba0-Hg7-Qh1316.jpg', 'https://i.ibb.co/VgLKFg6/9-Cloud-us-0482-Sample-579225-C228057-01-Fpn1-Ny8-K5-T1-Kdksybkyxkk0-T16.jpg', 'https://i.ibb.co/k5BCpMY/9-Cloud-us-0434-484-Bfb4-C-26-Fc-4-D04-A-01-Fdjfhyn2-D1-Fpe3-R2-Zhrhm07-S16.jpg', 'https://i.ibb.co/jLSYyJX/9-Cloud-us-0294-F88-Edf3-E-2-D5-B-4915-A-01-G300-Ys37-Eg3-Ea4-Eer3-D0-Njxf16.jpg', 'https://i.ibb.co/6mndmQ4/9-Cloud-us-0471-3-Df142-F3-75-B3-43-B8-A-01-G4-Asc9-Xwwqc21-Y3-Ke3-Ke1-Fm716.jpg', 'https://i.ibb.co/6mjZHD0/9-Cloud-us-0443-Amber-Genshin-Impa-01-Fyxcam31-Rc2-P767-Wevebcsq81680.jpg', 'https://i.ibb.co/nDk5SzY/9-Cloud-us-0199-28-01-Fjgnchf5-Bvx3-F6-Kvps28-Gh2-S1680-X0.jpg', 'https://i.ibb.co/y0SX03X/9-Cloud-us-0451-V9-C80-Wleq1-R61-01-Fyxctna97-X5-Sv9-Z6-Kt5-X64-Wz1680-X0.jpg', 'https://i.ibb.co/rbhScD3/9-Cloud-us-0149-3-D82-Fd5-F-B271-4-B9-C-9-01-Fy5-Jb37-C8-R87-Drga2-Phe12-Nj16.jpg', 'https://i.ibb.co/C0GHX7g/9-Cloud-us-0260-Diona-Genshin-Impact-01-Fz7-Dh950-D9-Mrxrxjmyw385-Cy16.jpg', 'https://i.ibb.co/nCpqNK0/9-Cloud-us-0239-7156-Ef491-E5965-F8-F7-Eb-01-Ft4-Hafvmf3-Nh0-J5-Gbkvbp7-En16.jpg', 'https://i.ibb.co/58Ckv11/9-Cloud-us-0246-96135477-P15-Master1-01-Fw7-Twfs29-Hdhppgy0-Rcp344-V16.jpg', 'https://i.ibb.co/vc799q9/9-Cloud-us-0177-36849-Df9-5108-4320-B-01-G1-Wxc4-Xbr2-Vq4-Kmjqp1-Qzwv516.jpg', 'https://i.ibb.co/rwwy8R1/9-Cloud-us-0277-6-D097791-4-Aa8-430-A-A-01-Fbpyh7-Awncs3-G5-Hx4-Gsr10-G416.jpg', 'https://i.ibb.co/X80hppb/9-Cloud-us-0031-89207209-P7-Master12-01-Fw7-Npfb7-Ks1-Szh1-Nrda3-R9-Wa16.jpg', 'https://i.ibb.co/ySTPYN3/9-Cloud-us-0046-F10482-D4-5-C9-E-4734-9-01-Fbpydxq8-Dgbxp7-Ms0-Fgazhhs16.jpg', 'https://i.ibb.co/V9s2F8q/9-Cloud-us-0187-0-Aa06-C89-3-A3-E-4-Aac-8-01-Fy5-Jd7163-E26-B2795-H1-Xnyy216.jpg', 'https://i.ibb.co/JHvpSYZ/9-Cloud-us-0518-D538-Bfd4-3-Bf3-4769-9-01-G4-Asd1-Xybcytb8-R11-Aaywwj516.jpg', 'https://i.ibb.co/Wx2FtwW/9-Cloud-us-0185-1-1-01-Ffvc8-Ewhe94-G47-Sy5-Yqq15-Ys1680-X0.jpg', 'https://i.ibb.co/NtftDpJ/9-Cloud-us-0154-4042233-Genshin-Im-01-Ezhqspqa26-Hxvz1-He05-G5-Amh1680.jpg', 'https://i.ibb.co/WD1MpQ7/9-Cloud-us-0010-Hinghoi-Artist-Raiden-Genshin-Impact-Genshin-Imp.jpg', 'https://i.ibb.co/3vdkvhH/9-Cloud-us-0254-88-A8060-F-7-D91-407-A-B-01-Fdjffqby189-V31-Ryqvcsyq6216.jpg', 'https://i.ibb.co/w4Bzwd5/9-Cloud-us-0440-Nege8-Fonpoc71-01-Ffved9-Mtxn20-Ymq62-Tdj7-E7-X1680-X0.jpg', 'https://i.ibb.co/WFdG0G6/9-Cloud-us-0040-Ec1-Cc3-A1-0-C66-4-Ce4-9-01-G007-Fpj7-Vjsvg977-T7-Damydx16.jpg', 'https://i.ibb.co/vqTwzqf/9-Cloud-us-0464-F51-Feee9-948-A-4824-9-01-Fyxaakaj9-Rwpq2-H3-Jstw0-Cg116.jpg', 'https://i.ibb.co/YkrYfJt/9-Cloud-us-0473-97589086-P0-Master1200-768-X1093.jpg', 'https://i.ibb.co/Kx5zSCS/9-Cloud-us-0284-21211-C6-D-Aba3-4765-A-01-G0-Cnbbfaz0-V2-Cqkey92242-A116.jpg', 'https://i.ibb.co/ZfRV5Mw/9-Cloud-us-0023-F4-B0-A18043-Bf69-Bb76-D7-01-Fts7-G1-Jytgfqbw6-R65-Vtvr4816.jpg', 'https://i.ibb.co/1Rp0tJc/9-Cloud-us-0224-C1-Acb47-E3-F1797-D237-B6-01-Ffvdgk460-Kk0-M43-V6-D4-C8-Ear16.jpg', 'https://i.ibb.co/CwKBSnG/9-Cloud-us-0230-3768-D365-9-Adb-4-A8-D-8-01-Fx2-E85-Gd2-Yed90-Dyptxbr5-Js16.jpg', 'https://i.ibb.co/kqPTLJH/9-Cloud-us-0272-623-A4699-Bf4-A-441-C-8-01-Fc8-Mznz5-Eznx8-Wgnxh1-B193816.jpg', 'https://i.ibb.co/DMv8Ss7/9-Cloud-us-0262-3910584-Aztodio-Ge-01-Ekt5-Recwcm4882-Rw8-Qza7-Qbw1680.jpg', 'https://i.ibb.co/94LJG0T/9-Cloud-us-0206-Yandere-744023-Samp-01-Fz7-Dd7-Gtq5-Gv624-Kfnzkenvk168.jpg', 'https://i.ibb.co/RQ2Ds4Q/9-Cloud-us-0435-Sample-F6989-Eb02492-D-01-Fqxeqv88-H6-Yb8-Xm7-Swpthfmz16.jpg', 'https://i.ibb.co/1Jj0Jtq/9-Cloud-us-0200-Vrukbds65-Kr51-01-Fyxc9-Z6-Kx2-Rffbp62-Zpjcw5-N1680-X0.jpg', 'https://i.ibb.co/LRfVhpL/9-Cloud-us-0525-2-Mhq4-Gi-01-Ffvc534-J6-H5-Pf5-Kng11-J927-T1680-X0.jpg', 'https://i.ibb.co/T0yWgfj/9-Cloud-us-0289-Yandere-904421-Samp-01-Fyn2-T3-Rb7-Th70330-Kfhprw9-X168.jpg', 'https://i.ibb.co/4WNZhF0/9-Cloud-us-0156-A067-E874-3085-4104-A-01-Fy5-Jteahj7-Kyst5-Jnpey1-M9-X16.jpg', 'https://i.ibb.co/PZGtykr/9-Cloud-us-0431-969051-B112-C207-Bb0-D38-01-Ft4-Hcp1-D23-Nk4-Tp2-Wqc2-Hsce16.jpg', 'https://i.ibb.co/qrq8y7L/9-Cloud-us-0209-3-B46133-C9316-Ab05-Dae3-01-Ft4-Kdy81-Jsae5-Epjt9-N3-Qrkw16.jpg', 'https://i.ibb.co/F6hxS1s/9-Cloud-us-0227-Kewt42-Nwtub81-01-Fyn2-Cq5-V9-G5-Hdn56-K8-Y9-Jwpk1680-X0.jpg', 'https://i.ibb.co/fSVTr3R/9-Cloud-us-0162-Illust-85763000-2022-01-Fvy27-Ef7-A40-Xabn8-Qemec90-B16.jpg', 'https://i.ibb.co/t3Jg53h/9-Cloud-us-0179-4492517-Genshin-Im-01-G57-Er8-A5-Hpkrvdekt7-Mxenhs1680.jpg', 'https://i.ibb.co/v1j71Rr/9-Cloud-us-0490-4-E7-Ba531-13-A0-4173-8-01-Fy5-Jq2-Azvt06-Zhge2-X59-Jhgt16.jpg', 'https://i.ibb.co/JKPjMTS/9-Cloud-us-0508-276-A5227-9-Ff0-4-Dbb-8-01-Fc8-N292-Qe1-B9-Hbqq4-Vx5-Npfg16.jpg', 'https://i.ibb.co/B6zzWHJ/9-Cloud-us-0171-4453827-Fischl-Gen-01-G5-Svp0-Xztrgbxg592-Bvfy05-N1680.jpg', 'https://i.ibb.co/pZP9cdF/9-Cloud-us-0501-Ac638-Bb1-0-C55-4-Cdd-9-01-Fy5-Jq3-M2-H8-Sbt6-Pgg8-Swxhzz16.jpg', 'https://i.ibb.co/9TpWfqv/9-Cloud-us-0463-Genshin-Impact-Char-01-F288-Hfmbxdy1-Nv2-Cbbekwjft168.jpg', 'https://i.ibb.co/7W5D1hZ/9-Cloud-us-0288-7143-E407-899-C-4-C9-D-A-01-Fy5-Jjjd4-Py19-Egmessks2-Z1-M16.jpg', 'https://i.ibb.co/Ch6JYN6/9-Cloud-us-0285-Kuki-Shinobu-Genshin-Impact-Genshin-Impact-Fando.jpg', 'https://i.ibb.co/GnPsg3P/9-Cloud-us-0016-5-A794309-Ffa91610-D75-C-01-Ft4-H4-P1-Raz7-Nety7-J04-Ggysk16.jpg', 'https://i.ibb.co/t2vF8BH/9-Cloud-us-0029-4250750-Fischl-Gen-01-G5-Svk9-Hnc7-Cpz4-Vz82-E2-Jpq51680.jpg', 'https://i.ibb.co/dbYCB4M/9-Cloud-us-0161-4129870-Fischl-Gen-01-G5-Svje9-Aqnn2-K0-Bbg0-Hg8-H7-P1680.jpg', 'https://i.ibb.co/LxTsRXn/9-Cloud-us-0244-Oz50-Kuszf3-G61-01-Fyxctfy5-V1-M40-Xmqbf24-Z51-Z1680-X0.jpg', 'https://i.ibb.co/Fgj1dtV/9-Cloud-us-0506-F25-De032-Fac8-4-F6-F-A-01-Fvn3-Xnqrj4-B9-J44-T1-Fk6-Fsw516.jpg', 'https://i.ibb.co/Jx04w6R/9-Cloud-us-0041-98171636-P5-Master12-01-G2-Kw64-Fbw2-K3-Gtgtjpk7-Sy2-S16.jpg', 'https://i.ibb.co/jkRS1HW/9-Cloud-us-0494-452-Cadef-4-Eab-4827-B-01-Fy5-Jya16-Q8-Ewxhyz16-Syks2-X16.jpg', 'https://i.ibb.co/Kz3PpmB/9-Cloud-us-0512-Dashhl7-Nc09-T28-R1-Li3-Z-01-Ffvc3-V6-Ncdv49-Ra8-Pgy9-M6-Ce16.jpg', 'https://i.ibb.co/Njmr77n/9-Cloud-us-0207-94171841-P7-Master12-01-Fw7-S7-Nrnjzcy9-Trbj3-F1-Czpw16.jpg', 'https://i.ibb.co/JqzKgng/9-Cloud-us-0503-E3-A889-D5-918-D-431-C-A-01-Fvn40-Py43-Vghcsqfzz8-Fhpkf16.jpg', 'https://i.ibb.co/NVg6fgS/9-Cloud-us-0236-297-01-Fyn3-Prhw5-Am8-Sajzfzpwjwjg1680-X0.jpg', 'https://i.ibb.co/G7z8Wpq/9-Cloud-us-0168-Aaitsyv69-R061-01-Ezh2-Nwrwfkf9-J25-V2-Fqvvbk21680-X0.jpg', 'https://i.ibb.co/x59Yvcs/9-Cloud-us-0196-4616955-Diluc-Ragn-01-G57-Ewsfhmfb3-P9-Rrxas6-D8-Hz1680.jpg', 'https://i.ibb.co/Sy01k50/9-Cloud-us-0042-Rdt-20220329-0739503-01-G09-Q9-A3-Srpfze8-Awabypp12816.jpg', 'https://i.ibb.co/WFYvrK1/9-Cloud-us-0050-4-B1-Cb070-B723-4-A38-9-01-Fyxa66-Zkjy74-Shgxhxydnqb116.jpg', 'https://i.ibb.co/TRD7n6R/9-Cloud-us-0271-3905352-Aztodio-Ge-01-Ekt5-Ny5-C98-Hnc1-Z2-N1-Egjfve1680.jpg', 'https://i.ibb.co/jLWKbwt/9-Cloud-us-0158-21-01-Fjgn9-V8-Gt6-Xmg3-A8-P5-Efhvxe1680-X0.jpg', 'https://i.ibb.co/Mg30nks/9-Cloud-us-0193-4483945-Fischl-Gen-01-G5-Svq81-Mg5-Q3-Rmtnwwyh9-A1-E1680.jpg', 'https://i.ibb.co/bg7nyrJ/9-Cloud-us-0169-A87109-F1-12-F9-4-D37-9-01-Fdjffxr0-K5-Ct23-E2-R9-X3-Zn1-F16.jpg', 'https://i.ibb.co/12QqBKk/9-Cloud-us-0461-38-01-Fyxc8-Zw2-R3-Nsgf7-Hjmyzhazg1680-X0.jpg', 'https://i.ibb.co/YP3v9s5/9-Cloud-us-0458-E4-Bba0-Dc-92-E9-4-F2-E-A-01-Fyxa81-Tx2-H569-M8-Mrbpxhtrg16.jpg', 'https://i.ibb.co/1vRnV4x/9-Cloud-us-0274-4616756-Genshin-Im-01-G57-Ewq5-E6-X3-Pyxnyb3-Xf6-Fjx1680.jpg', 'https://i.ibb.co/19rkZJk/9-Cloud-us-0232-Bc461812-1102-4-Bb5-9-01-G007-Frk4-Q2-K7-Vwyw3-X9-F6-Fmb16.jpg', 'https://i.ibb.co/WzJWxSv/9-Cloud-us-0483-4874258-Genshin-Im-01-G57-Ezyjp5-B9-F986-Xme8-Sd65-E1680.jpg', 'https://i.ibb.co/jb71jQh/9-Cloud-us-0249-B65305-B2-35-F0-4800-B-01-Fa841-E775415-C7-Dds26-G7-G0-F16.jpg', 'https://i.ibb.co/NTsPz8m/9-Cloud-us-0210-77098-A2-E461284608-E16-01-Ft4-Hbmyayzr04-Smjee4-Q783-E16.jpg', 'https://i.ibb.co/q0Y5bX7/9-Cloud-us-0248-Konachancom-32859-01-Fyxcfwymz2-Rv5-Cpnj4152-Am71680-X.jpg', 'https://i.ibb.co/gVyXDDT/9-Cloud-us-0507-95-Bcb6-B8-Da70-4-D10-A-01-F8-Fd26-Y91-Fw7-Msbphszkmdqk16.jpg', 'https://i.ibb.co/jvr8k8R/9-Cloud-us-0166-Kubmtnu0-Ug171-01-Ffvc5084-Etsg3-Ccx0-Pa7-Qj221680-X0.jpg', 'https://i.ibb.co/MkPGSgw/9-Cloud-us-0266-4851485-01-Ffvc33-Dt72-Rydhm0667-Tfg481680-X0.jpg', 'https://i.ibb.co/CVzRKrq/9-Cloud-us-0252-A0-D9-C1-Ed-Ffeb-42-Fb-B-01-Fyxa8-Zfzsyhprw8-Vt4-H2-J1-W516.jpg', 'https://i.ibb.co/LpwNPVp/9-Cloud-us-0450-Ac7942-E5-950-B-4606-9-01-Fc8-N2-Ym04-A6-W11-Cyc4-Keg58-Y16.jpg', 'https://i.ibb.co/br3HjN4/9-Cloud-us-0467-63389-A36-5082-4177-A-01-Fa83-V2-Qqz5-Xqx0-H95-Gvtryvd16.jpg', 'https://i.ibb.co/Vj69DVY/9-Cloud-us-0020-Accc6-Da9-35-C8-417-C-9-01-G007-Fedgze7-Twqxm7-Qf2-Hjce16.jpg', 'https://i.ibb.co/DthF1L2/9-Cloud-us-0442-Rdt-20220314-1614376-01-Fyeyvtaaf57-X2-E7-R6-Z6-M5-Mm416.jpg', 'https://i.ibb.co/JzQnhDh/9-Cloud-us-0172-23-01-Fyn32-Cnafgaq8-Xa17-Wdpmdf11680-X0.jpg', 'https://i.ibb.co/dkztWn0/9-Cloud-us-0259-4454271-Fischl-Gen-01-G5-Svpccv08-E3-Jmrme2-Jkmyhw1680.jpg', 'https://i.ibb.co/S0WfcmK/9-Cloud-us-0444-7-E8-Cba5-F-F675-45-C1-A-01-Fyxa92-Ajakqd41-Zdb6-Mh7-K7216.jpg', 'https://i.ibb.co/fMYfhvn/9-Cloud-us-0497-837548-D0-D647-4697-9-01-Fbpyt8-Xw82-A2-Vzavzgjh2-Qmc16.jpg', 'https://i.ibb.co/T1xPgHQ/9-Cloud-us-0505-Genshin-Impact-Porn-01-Fyxas2-Kepyn3-Qqsmbsyzm2-Vb168.jpg', 'https://i.ibb.co/sJWPt5s/9-Cloud-us-0183-869-Ut7-Jbb1-V61-01-Ffvc4-Vdfzng78-Wfbytwrcbpb1680-X0.jpg', 'https://i.ibb.co/YbJGt0R/9-Cloud-us-0022-B6-A22-Ce8-D21-C5923-C05-D-01-Fts79-Bbpe25-K7-Mw5-Hsn6-M4-Z016.jpg', 'https://i.ibb.co/7gj3t72/9-Cloud-us-0280-Houraku-Anime-Art-Ar-01-Fdtf4-Q5-Qjmd2-Czykpyz1-Pjb216.jpg', 'https://i.ibb.co/0ZF2TFP/9-Cloud-us-0485-5-A3-D4-Ec-Ccapg7-Bk-01-F-01-G28-Pary0-Rj85-W8-Rrfxwjr3-Ns16.jpg', 'https://i.ibb.co/9nVC01t/9-Cloud-us-0038-62164-C2-E-21-D6-465-D-9-01-G1-Wx7-Mt68-K6-Hbq7-R9-G2-Krzzp16.jpg', 'https://i.ibb.co/1MGj47h/9-Cloud-us-0163-Ningguang-Genshin-01-Ezw84-C9-Kp3-Fh29-Xj5-Sdjvrpa16.jpg', 'https://i.ibb.co/zxSBPxx/9-Cloud-us-0251-Df10-Af2-D12-F9-E2465-E52-01-Ft13-Kgw6-S6-F3-Xcevxj1-Hmwb216.jpg', 'https://i.ibb.co/6DzWFTq/9-Cloud-us-0245-638-C99-F6-7-Bc2-4-F37-B-01-Fdbxb675-D7-Ft1-Th55-Mdn6-Ebp16.jpg', 'https://i.ibb.co/MhmxL2g/9-Cloud-us-0211-Amber-Eula-Gensh-01-Fyxcg57-Xx5-Kqhk1-Eynwxxkpn1680-X0.jpg', 'https://i.ibb.co/TtsDcph/9-Cloud-us-0015-E9-Fdfcb4-Af1-Be9-F88757-01-Ft4-Hkcaqx9-Gzgqt2-Skzn3-H9-R16.jpg', 'https://i.ibb.co/TMVS2zb/9-Cloud-us-0159-4589605-Fischl-Gen-01-G5-Svv3-Y9-Harxw55-Vq94-H4-Adb1680.jpg', 'https://i.ibb.co/GdqfpvX/9-Cloud-us-0221-95560388-P2-Master12-01-Fw7-Tf79-Tdtxpanaty2-X9-R24516.jpg', 'https://i.ibb.co/wWKFbTS/9-Cloud-us-0292-36-Xfvjresn571-01-Fhf43-Y89-Hg6-Fh62-Ctxgveba21680-X0.jpg', 'https://i.ibb.co/Csd2sZL/9-Cloud-us-0153-4633331-Fischl-Gen-01-G5-Svwyg7-Dwded1-Zfm0-R5139-C1680.jpg', 'https://i.ibb.co/6YbhjZf/9-Cloud-us-0008-Screenshot-34.jpg', 'https://i.ibb.co/CQmyDJP/9-Cloud-us-0039-3928938-Fischl-Gen-01-G5-Sverb8783-Ywzcgfxrf8-Hbq1680.jpg', 'https://i.ibb.co/BVDNtfn/9-Cloud-us-0445-3386078-E-692-C-4-Ec9-8-01-Fc8-N1-W1-Kgnkanjmm9-Yqqpmvg16.jpg', 'https://i.ibb.co/KzM681x/9-Cloud-us-0470-A5-F02-Ade721262-Fe89-Ff-01-Ft4-Hed47-R8-R8-Ftbs0-Gj43-Sxf16.jpg', 'https://i.ibb.co/LpN5RzL/9-Cloud-us-0276-4036348-Genshin-Im-01-Ezhqs5-Rtx7-Zgsh822-Vf75-Hmz1680.jpg', 'https://i.ibb.co/nfXrZtV/9-Cloud-us-0051-L44-V7-Mtiq1591.jpg', 'https://i.ibb.co/8XkGFd5/9-Cloud-us-0509-4471297-Ec81756-B217-C0-01-G57-Eqgqv4-F6-Aktx8-Nhwv2-K3-D16.jpg', 'https://i.ibb.co/60S3jST/9-Cloud-us-0437-17227701-D7-A3-Ce5-A591-B-01-Ft4-Hd723-W60-Hkhrkcbjkmfpp16.jpg', 'https://i.ibb.co/MZPNMw1/9-Cloud-us-0047-6-Woabnrl0-Ju81.jpg', 'https://i.ibb.co/2sjrmQ5/9-Cloud-us-0151-Genshin-Impact-Char-01-F2884936-Svjs2-Vawmrfmzhrh168.jpg', 'https://i.ibb.co/7nf6wFY/9-Cloud-us-0217-1-197-01-Fyn2-A9-R7-Xhacj0-Rn25-R5-Sm8-B1680-X0.jpg', 'https://i.ibb.co/X4ySyJx/9-Cloud-us-0287-F2-C3026-D-7-Af5-4-D32-9-01-Fdbxa6-Sawz5-X48-Wgac6-Bbw8-F16.jpg', 'https://i.ibb.co/6rn6f55/9-Cloud-us-0033-Ecwy6-Cf0-D4781-01-Fyn29-Fk8-Znqbfj175-K5-Ry7-D31680-X0.jpg', 'https://i.ibb.co/gWcbsqK/9-Cloud-us-0258-95061633-P8-Master12-01-Fw7-T8-Netjta0-Eddrk2-V3-Q5-G916.jpg', 'https://i.ibb.co/34LLpt3/9-Cloud-us-0498-6-D2122-D5-Ce054-C233-Ae4-01-Ft4-H4-Xgnvkp51-Cv8-Jqvdxbze16.jpg', 'https://i.ibb.co/w0B4QDw/9-Cloud-us-0253-Ih2-Aeqhkwfy61-01-Ffvc4-M5-Hh96-Q7-Rh1-Ehr6-V33-W1680-X0.jpg', 'https://i.ibb.co/gSy42s6/9-Cloud-us-0009-Rdt-20210921-1236201-01-Fts7-Ym78-V2-Vp0-M1-Gxh6-Mf1-Kk16.jpg', 'https://i.ibb.co/61T8mR8/9-Cloud-us-0466-90246627-P3-Master12-01-Fw7-P2-Tm802-Sfts9-Efs2-B00-Hq16.jpg', 'https://i.ibb.co/nRgvSYD/9-Cloud-us-0238-1-Cc57-F96-0-Ecf-4-D5-A-9-01-Fy5-Jz137-E40-Xwyg49-Jx6-P4-Zm16.jpg', 'https://i.ibb.co/JR1Sqyx/9-Cloud-us-0281-C93-Bc151-1-B72-4974-A-01-G1-Wxcgcybmf9-Sp4-Wqm1-Enrs316.jpg', 'https://i.ibb.co/4KScPj4/9-Cloud-us-0495-750-A3-B5-D-C481-4635-8-01-G76-Q4-Zh7-Y1-Cxmcxzx0-Ajvn0-E16.jpg', 'https://i.ibb.co/gMZGMkQ/9-Cloud-us-0441-9-F3-E3176-9067-4185-9-01-Fdbxa162-P0-Sv7-Rscr1-E680-Zt16.jpg', 'https://i.ibb.co/b7MjqyC/9-Cloud-us-0226-D0-Fe48-D639-Df6-Ea29-A3-F-01-Ft4-Hh45-Cxs6-Bk0-Ktxqhjkz3-E16.jpg', 'https://i.ibb.co/7GMwp7z/9-Cloud-us-0511-Eeb58-Ef8-B119-46-C0-B-01-Fbpytav47-Rsa0-Crvq5-R4-Bvdd16.jpg', 'https://i.ibb.co/vBdTHRf/9-Cloud-us-0519-Bc6171-Fc-1-Ce7-4958-B-01-Fdjfj70-Dzqsy4-Mx7-Tzckadex16.jpg', 'https://i.ibb.co/LYJmyG1/9-Cloud-us-0164-98773463-P4-Master12-01-G4-Ysppxtbnqzcab252-Gask5-V16.jpg', 'https://i.ibb.co/4RnZYd4/9-Cloud-us-0269-Gamwgt3-Uvf771-01-Ffvc4-H2-C76-Wpztkhe7-C6-Hvb91680-X0.jpg', 'https://i.ibb.co/5xVVvQj/9-Cloud-us-0270-34-D8-Ac0-C-1-Eb3-412-F-9-01-Fbpyejhzr6-T9-Aea9-Y5-A0-Mpf916.jpg', 'https://i.ibb.co/3TyrNGg/9-Cloud-us-0186-7-X4-Xnkd973-H81-01-Fyn2-Ayp66-Mx4-W8-Fa3-Y8-Xbcdh1680-X0.jpg', 'https://i.ibb.co/RH5JzfJ/9-Cloud-us-0218-X5-Jfsygtzdfosbmkocb-01-Fhf441-Jx8-R9-M2-Ha5-X8-D2-H71-Z168.jpg', 'https://i.ibb.co/XsjWmyF/9-Cloud-us-0021-Yae-Genshin-Impact-Genshin-Impact-Fandoms-Hingho.jpg', 'https://i.ibb.co/LShsLRP/9-Cloud-us-0446-6-A71-E836-C728-4732-B-01-Fx2-E8-Awd7-H9-A6-Ywhmq5-Z1-Vbg16.jpg', 'https://i.ibb.co/1Zyz9tP/9-Cloud-us-0462-Sample-37-C57-B4264-Cf8-01-Fqxepwn7-Tcnvaaa5-Qeg8-Gm6-G16.jpg', 'https://i.ibb.co/N2278r1/9-Cloud-us-0256-013-E9-Ec7-1823-447-A-8-01-Fa83-Wym9-Zhgsrx4-Vhe4-Rvzgh16.jpg', 'https://i.ibb.co/X48vYZw/9-Cloud-us-0283-3-D7-B1339-F30-C-4-F6-C-9-01-Fa83-S0-Adqzjq5-J6-F2-Aa0-E6-Nn16.jpg', 'https://i.ibb.co/DQpSTtP/9-Cloud-us-0447-139-Bfc48-B1-De-4-C5-A-9-01-Fy5-Jswb5-D2-Xms3-Z919-J50-W5-D16.jpg', 'https://i.ibb.co/2M15W2R/9-Cloud-us-0219-Sex-In-The-Bed-With-01-Fyxaepjzpwj0-E22-Snrzn2-Pkh168.jpg', 'https://i.ibb.co/j8Whsy7/9-Cloud-us-0264-Ea1-Cc1-E9-F555-446-D-9-01-Fa83-Vs4-Ea42-Ssrxmc1-K94-E9-Z16.jpg', 'https://i.ibb.co/vZTJyY8/9-Cloud-us-0480-Klee-Genshin-Impact-01-Fbte1-Qrmt3-Cqxrp1-D19-Ac1-Zz168.jpg', 'https://i.ibb.co/StmQ0bK/9-Cloud-us-0032-U89-Lt8-L6-Flu71-01-Fyn295-Hk23-Kx564-Jrcjecbxn1680-X0.jpg', 'https://i.ibb.co/GP4L9Zz/9-Cloud-us-0282-Genshin-Impact-Char-01-F288-Gx19-Bcveg0-D1-N05-Bxnsm168.jpg', 'https://i.ibb.co/nf32dpM/IMG-20221012-212829.jpg', 'https://i.ibb.co/sRWN9PV/9-Cloud-us-0487-Illust-92976429-2022-01-Fvy20-K84-Hke57-Gke2-Ewxmc2016.jpg', 'https://i.ibb.co/fxHnWjB/9-Cloud-us-0165-26-01-Fyn33-D5-Rwd143-Tdt9-V3-Xaebb1680-X0.jpg', 'https://i.ibb.co/HVytt9b/9-Cloud-us-0261-Genshin-Impact-Fando-01-Fbte1-Msrcntfapa64-Vwj4-Gmv16.jpg', 'https://i.ibb.co/94KGGgC/9-Cloud-us-0195-946-B9219-C7-B992-A7-F989-01-Fsz4-F98-Tk9-Yk8-B6-Gr55-J0-Akz16.jpg', 'https://i.ibb.co/wsKzzB8/9-Cloud-us-0496-Bdb0-Eaa1-B3-D8-4680-9-01-Fbpyhqmg3-Sbffnqxqtwtfcak16.jpg', 'https://i.ibb.co/c3TG021/9-Cloud-us-0474-F2-C119-A2-658-F-4-Fe4-8-01-F9-Bp436-Z7-Wyd8-H2-Tv97-Px38-J16.jpg', 'https://i.ibb.co/rcLZkYv/9-Cloud-us-0234-4154844-Genshin-Im-01-Ezhqwnneds6388-Xvwbwmcfzz1680.jpg', 'https://i.ibb.co/q7YBT0c/9-Cloud-us-0160-Qsroew1-Hsd281-01-Fyxadbe1-Zwjxdsy5-Fxmss3-Jq1680-X0.jpg', 'https://i.ibb.co/qpVGdfJ/9-Cloud-us-0175-1399-C7-B6-7-E86-45-D7-8-01-Fdjfeghvackc3-Fatgwq759-Bn16.jpg', 'https://i.ibb.co/8str46C/9-Cloud-us-0452-4930805-Fischl-Gen-01-G5-Sw1-G8884-Ejgtawnvmc3-Hgx1680.jpg', 'https://i.ibb.co/s30q3t5/9-Cloud-us-0098-Ingnowwosme4-Gr9-Vcfa9-01-Feqwv61-Nwe8-H1268-Sg6-Rj2-Vw16.jpg', 'https://i.ibb.co/pLR8vCH/9-Cloud-us-0432-051441-A9-8-C3-B-4523-8-01-Fy5-Jjmvwteztajttbqt7-Nnva16.jpg', 'https://i.ibb.co/28TMDS5/9-Cloud-us-0514-66-Cdd876676-A116-Bf3-Fb-01-Fyxbszqyzh98-Td9-J4181-Kx8-F16.jpg', 'https://i.ibb.co/ZKRk37j/9-Cloud-us-0453-20220205-061539-01-Fvv5-Ej178-R0-Y3-V0-B9-Nnq4-Dsv1680-X0.jpg', 'https://i.ibb.co/c3sxH1j/9-Cloud-us-0155-Yae-Miko-Genshin-I-01-Fyxaspgpnjqfxrydkes9-Wpc51680.jpg', 'https://i.ibb.co/bFCJLbj/9-Cloud-us-0182-4128761-Ganyu-Gens-01-Ezhqvqzk49-Ycvazbq2-Mbz59-Y1680.jpg', 'https://i.ibb.co/BNxQbXb/9-Cloud-us-0449-Fu4-U6-R9-Hl8561-01-Fyxavreagm5-Aacvxqb3-Awrtz1680-X0.jpg', 'https://i.ibb.co/vsh8SvP/9-Cloud-us-0484-8-A716-Fc7-0-D35-4583-8-01-Fetv98-Dhkh7-R9-H5-Nxmgwd2-Rr16.jpg', 'https://i.ibb.co/cJW1Bhn/9-Cloud-us-0242-3-Ffd32-A6-52-Bf-42-Ae-9-01-Fy5-Jajxp6-Zxatsyqcjgayj8-D16.jpg', 'https://i.ibb.co/djmspqd/9-Cloud-us-0265-292-01-Fyn3-Nrzqkatstc5-Kgsbh8-T891680-X0.jpg', 'https://i.ibb.co/8s507tz/9-Cloud-us-0448-4011229-Fischl-Gen-01-G5-Svh2-S4-Mhvb82-P5-Gpjwqx0-Y1680.jpg', 'https://i.ibb.co/vJSJKtd/9-Cloud-us-0523-51-Df7-Ff0-1-Ec5-468-F-A-01-F8-Mgnhtshb46-Tjnpd8-Ft8-Qc816.jpg', 'https://i.ibb.co/jZ4yG31/9-Cloud-us-0268-926054-C7-Fc71-448-C-9-01-Fa83-Xdegv2-Dacxp395-F94-Pym16.jpg', 'https://i.ibb.co/nrCqmcp/9-Cloud-us-0194-296-01-Fyn3-Pfae64-Gp2-Gavmfa4-Zsyq1680-X0.jpg', 'https://i.ibb.co/GxhxJ6L/9-Cloud-us-0429-361-F4405-3-F6-B-423-A-B-01-Fdjfgvx3-Qmyhcasx179-G7-W7516.jpg', 'https://i.ibb.co/LYWQMW8/9-Cloud-us-0215-01-G035-Vpx5-Bx1-Bbr0-K458-D3-X011680-X0.jpg', 'https://i.ibb.co/h8x4qZr/9-Cloud-us-0043-F19-Ac1-Af-6-F8-A-44-Ac-8-01-G1-Wxde0-Mhfb9-Mxvecpk6-Ttv416.jpg', 'https://i.ibb.co/vYyVNZ9/9-Cloud-us-0204-Lavqdwugnbw5-Bmcquq6-I-01-Ffvc31-Akw3-Emewnh4-Vfnzap416.jpg', 'https://i.ibb.co/tJw9WcZ/9-Cloud-us-0214-30-01-Fjgnd82-Ha7-T9-Qcq4-M7-Z640-R51680-X0.jpg', 'https://i.ibb.co/094n4Nt/9-Cloud-us-0222-A16277-D8-F65-Beff88702-01-Fts77-Wemvkbx277-D417-Vzmd116.jpg', 'https://i.ibb.co/Rppd1TF/9-Cloud-us-0192-Baal-Genshin-Impact-01-Fyxad08-Wh8-Pvs3819-Thefj7-Q168.jpg', 'https://i.ibb.co/xz4F8HM/9-Cloud-us-0465-Drlehpc7-Mec5-Sk1-Kt3-Hk-01-Fyxct0-Bec6-Hb9-Aqwg718-Gf0-W16.jpg', 'https://i.ibb.co/bPYRfSq/9-Cloud-us-0045-782-D9-Ba2-4-Fb0-47-Af-8-01-G1-Wx1-Xfgtyswbd00-Kyn2-T1-Yt16.jpg', 'https://i.ibb.co/NKPsgxk/9-Cloud-us-0472-14-01-Fz7-Dcf8-Jdrgd7-Npbah64-H9-Fx1680-X0.jpg', 'https://i.ibb.co/9qTMFH1/9-Cloud-us-0203-Cf52-D1-A44-F7-B8-A1-Fe040-01-Fsz4-G0829-Wa23-R84-Nh9-J2-Wky16.jpg', 'https://i.ibb.co/nDd5txL/9-Cloud-us-0286-17-D9-D52-Fc3990-C6-A3565-01-Fz7-Dg52-V4-W81-Kh6-Wqxk8-Wg4-B16.jpg', 'https://i.ibb.co/JCW7qqd/9-Cloud-us-0468-Sample-31-D53494646-Ad-01-Fyxbwffnyrpjenvvrb0568-F616.jpg', 'https://i.ibb.co/R033Y5P/9-Cloud-us-0188-94019518-P5-Master12-01-Fw7-S3-Cckn6-Wvhmrh8-Zhrmkva16.jpg', 'https://i.ibb.co/PTS4dQX/9-Cloud-us-0479-Eadbdf70-F1-Ec7-B911-A9-D-01-Fz7-D9-Jbh00-Vk1-Seap8113-Web16.jpg', 'https://i.ibb.co/x7z5LWb/9-Cloud-us-0278-C8-C28712-F61-A-4-Dd6-9-01-Fc8-N22-Zya4-V6-Qc5-Vxzvhj84-T16.jpg', 'https://i.ibb.co/Mf4smdk/9-Cloud-us-0475-0113-Bbe5-7214-4-F9-D-9-01-Fdjfecctmy1-Sn9-Gt764-T71-Gz16.jpg', 'https://i.ibb.co/wQ57TWD/9-Cloud-us-0255-Cc9-E5232-965-B-4-F69-B-01-Fdjfdt16-Qfhves7-A1-T3-B40-Ct16.jpg', 'https://i.ibb.co/M951xj2/9-Cloud-us-0263-8-A7-D3-Abc-Bf6-D-42-B7-9-01-Fyxa78-Srxqm3-D2-Rst7-A1-Zk8-R16.jpg', 'https://i.ibb.co/vxXyd5s/9-Cloud-us-0019-Kuki-Shinobu-Genshin-Impact-Genshin-Impact-Fando.jpg', 'https://i.ibb.co/GJTVtfj/9-Cloud-us-0275-Illust-89553713-2021-01-Fts7-Psgc88-Zzzcq4-Ym6-R776-C16.jpg', 'https://i.ibb.co/xLhb5Bj/9-Cloud-us-0522-B223660-F-05-D2-4794-9-01-F9-Bp37-Xrd5-Spns47-T789-S0-D716.jpg', 'https://i.ibb.co/p1zDShS/9-Cloud-us-0273-Ca598-D2-01-Fts7-Bvkd0-F9-Mt0-Dvn41-Yj6-P21680-X0.jpg', 'https://i.ibb.co/cQNWbDC/9-Cloud-us-0017-4516652-Fischl-Gen-01-G5-Svr7-Pge80-F085-Vkqz5-Sz371680.jpg', 'https://i.ibb.co/XW8FVR7/9-Cloud-us-0181-D4-A490-Ba-928-B-4-Bfb-9-01-Fy5-Jghewks2-A9-V5990-V30-Eq916.jpg', 'https://i.ibb.co/qnJ2rXD/9-Cloud-us-0499-974-Cf4-C7-9-F63-4-F7-D-A-01-G4-Ascys0-Mdcesw028-B7-Tcaz416.jpg', 'https://i.ibb.co/3kf3DYs/9-Cloud-us-0030-515-D1-Db5-Ccf131-F25-D3-B-01-Fnzcb6195-Bpxz101-W3-Nmhzqf16.jpg', 'https://i.ibb.co/yyyfWQT/9-Cloud-us-0026-Lumine-Fukuro-Ko-01-Fnzcbc9-Tey0-M8-Bdy9-Xt79-Pgp1680-X0.jpg', 'https://i.ibb.co/r7FpkQd/9-Cloud-us-0233-F5107-Bc43-Fa52849-D02-F-01-Ft43-Rjxbb35558-Eh7-Nh19-Xw116.jpg', 'https://i.ibb.co/0tFThdB/9-Cloud-us-0034-Kv7-O1-Om505-A71-01-Fhf439-Mr2-G6-Dmgkj5-Evr577-S1680-X0.jpg', 'https://i.ibb.co/PYSJ9qW/9-Cloud-us-0237-F1-D3-F7-Ce8-Bc84588-Fb4-F-01-Ft43-Qxvnqq1-Xdg9-Fd1-W2-W7-Xq16.jpg', 'https://i.ibb.co/Z6pqRjk/9-Cloud-us-0279-C8-C1-F930-972-C-42-Ab-A-01-G28-P1-B1-P2-Vbxw687-Cp9-Ajj7-Q16.jpg', 'https://i.ibb.co/CBbMzPp/9-Cloud-us-0502-Yandere-712915-Samp-01-Ezh2-Hhzw8-Cyec4-Wwr87-Tngk0168.jpg', 'https://i.ibb.co/vsySSXt/9-Cloud-us-0178-3995856-Fischl-Gen-01-G5-Svgs83-Te01-Evad9-P5-Mkbz31680.jpg', 'https://i.ibb.co/26SfYC5/9-Cloud-us-0455-B55-F67-D5-7-Ce2-456-B-8-01-Fy5-Jt510-Fjq8-Rawvzxewn7-Pr16.jpg', 'https://i.ibb.co/3N0fbVt/9-Cloud-us-0428-B22-D75-F0-23-C4-44-D5-9-01-Fa83-Y4-Ran5-X313-Gc70-Qg7-Sm616.jpg', 'https://i.ibb.co/Y7CY1vg/9-Cloud-us-0220-3946783-Genshin-Im-01-Ezhqq6-Pbckw9-S12-Hcy8-Gk4-Ja1680.jpg', 'https://i.ibb.co/ZT4ngh4/9-Cloud-us-0247-Rdt-20211203-0839403-01-Fts7-Z09-Vrrbg4-Yrkevyxxfjb16.jpg', 'https://i.ibb.co/JvxxzSh/9-Cloud-us-0291-4469596-Fischl-Gen-01-G5-Svpszshx4-Rt3-Y86-Y59-Hhx71680.jpg', 'https://i.ibb.co/Z8cvfgG/9-Cloud-us-0150-D85-A21-Cd-918-E-4-Ae5-9-01-Fdjfe0-Nqa07-Fnbgym1-Sf04-M116.jpg', 'https://i.ibb.co/bHHHpgj/9-Cloud-us-0096-05-B70482-Ed7-F09768-A52-01-Ft4-H48-Jccybdj71-F4-Re9-Wdke16.jpg', 'https://i.ibb.co/gPcx5Wg/9-Cloud-us-0097-4654323-Fischl-Gem-01-G5-Svxgmmrybzfpenqqx5-Zzzb1680.jpg', 'https://i.ibb.co/TR7XF3L/9-Cloud-us-0216-3995854-Fischl-Gen-01-G5-Svgg89-H8-M5-Kd4-Q5-Nw3-Bp8-D1680.jpg', 'https://i.ibb.co/SXNcfkC/9-Cloud-us-0048-95946638-P1-Master12-01-Fw7-Tk8-E17-Ckdby1-G2-Qzy6-Vnd16.jpg', 'https://i.ibb.co/zh7Whp6/9-Cloud-us-0477-98-D31237-Ca28-48-Fe-B-01-Fdbxb8-Znxv9-M3-Axftgps2-X1816.jpg', 'https://i.ibb.co/9YjKnM2/9-Cloud-us-0225-93953889-P6-Master12-01-Fw7-Rrkenem59-T5-Q2-Cc5-W2-T5-T16.jpg', 'https://i.ibb.co/nc71x6c/9-Cloud-us-0205-Abe40-Eec-B4-B7-4932-B-01-Fy5-Jjfs6-Ca87-Fa9-Mwa4-Xznj516.jpg', 'https://i.ibb.co/DzxXFmy/9-Cloud-us-0493-A0-A06-Ba1-Fe75-4-B63-A-01-Feqwtt1-Rbecneyvmpmfffgza16.jpg', 'https://i.ibb.co/61PQqQ0/9-Cloud-us-0189-239-Aeb72-Fa941-D55-F281-01-Ft43-Gjj0-S3-Cjprap3-Shtjssd16.jpg', 'https://i.ibb.co/m0gwhdY/9-Cloud-us-0202-73-Bce9-Ca-182-D-4-D1-D-9-01-Fy5-Jq9-Apqt7-Vebbfv41-Ezfkz16.jpg', 'https://i.ibb.co/02pY9NV/9-Cloud-us-0290-7-E5-A5-B51-02-Eb-4489-8-01-Fa842-Aqb6-Jev9-Xrw21-D6-Krgv16.jpg', 'https://i.ibb.co/Kx86bjr/9-Cloud-us-0526-Illust-90053000-2021-01-Fts7-Qbmxzhqqka6240-Xd104-M16.jpg', 'https://i.ibb.co/Z62qrhp/9-Cloud-us-0198-Illust-87482922-2021-01-Fts7-Nv4-Xp5-Hw6-Frm8-Rs08-T7116.jpg', 'https://i.ibb.co/BLWyng9/9-Cloud-us-0157-24-01-Fyn32-S4-Xzwvavctp9-Y8-H38-K21680-X0.jpg', 'https://i.ibb.co/TW5rWXK/9-Cloud-us-0201-Amber-Genshin-Im-01-Fyxce8-M1-G93-Xx7-Sj10-H4-Dvh61680-X0.jpg', 'https://i.ibb.co/LYxp8wT/9-Cloud-us-0454-F5561-F81-C3200-F51-Dc1-B-01-Ft4-Hnt4-Adgv5-Qtytpvph63-C816.jpg', 'https://i.ibb.co/WNrKt3g/9-Cloud-us-0295-0205-A361-Dd39-446-D-B-01-G4-Ascfjeqzsm20-Qem8-Wn468-J16.jpg', 'https://i.ibb.co/Jcy5s8S/9-Cloud-us-0457-89204074-Cd7-B-4-F94-9-01-G300-Yhwcedssc1-Xsq33-N9-K7-K16.jpg', 'https://i.ibb.co/Ry6wKf7/9-Cloud-us-0524-Sample-2298-A820-E9-Eff-01-G1-D2-Pp12-A0-Epvt80-P1-Ascmyp16.jpg', 'https://i.ibb.co/k6JtGyk/9-Cloud-us-0184-Rdt-20220212-1539051-01-Fwph6-B1-Z8-Gnqss8-Wyqcz5-Ceh16.jpg', 'https://i.ibb.co/MNx0xVj/9-Cloud-us-0212-Zmg-N0-Tqmdxihsdg1-Duf-01-Ezhqzsntrkvheennakrtbt5-V16.jpg', 'https://i.ibb.co/tDZHyy0/9-Cloud-us-0018-K82-Vfv68-Wexoukeyxduo-01-Ffvdgd500-Rmszzb5-Qyfb617-P16.jpg', 'https://i.ibb.co/SBPG75Y/9-Cloud-us-0257-13-H8-Rkw-Xce-Chjgrakv-01-Ezh2-Nsjh6-Qbrkf6-Tzf01-Eepm16.jpg', 'https://i.ibb.co/vqbRmj7/9-Cloud-us-0459-3999175-Fischl-Gen-01-G5-Svh07-Pxs6-C73-Vswpxktb4-B1680.jpg', 'https://i.ibb.co/jTwXwcj/9-Cloud-us-0449-Fu4-U6-R9-Hl8561-01-Fyxavreagm5-Aacvxqb3-Awrtz1680-X0.jpg', 'https://i.ibb.co/6bbDdT0/9-Cloud-us-0471-3-Df142-F3-75-B3-43-B8-A-01-G4-Asc9-Xwwqc21-Y3-Ke3-Ke1-Fm716.jpg', 'https://i.ibb.co/W6gWGfD/9-Cloud-us-0450-Ac7942-E5-950-B-4606-9-01-Fc8-N2-Ym04-A6-W11-Cyc4-Keg58-Y16.jpg', 'https://i.ibb.co/PF9wCC0/9-Cloud-us-0467-63389-A36-5082-4177-A-01-Fa83-V2-Qqz5-Xqx0-H95-Gvtryvd16.jpg', 'https://i.ibb.co/bgnHD5c/9-Cloud-us-0432-051441-A9-8-C3-B-4523-8-01-Fy5-Jjmvwteztajttbqt7-Nnva16.jpg', 'https://i.ibb.co/bb2763j/9-Cloud-us-0473-97589086-P0-Master1200-768-X1093.jpg', 'https://i.ibb.co/GHTqWp5/9-Cloud-us-0436-935730838-C69588178-Cb-01-Ft4-Hdp35-K4-D24-A716-Qdf9-Tr616.jpg', 'https://i.ibb.co/Rhwrwr2/9-Cloud-us-0442-Rdt-20220314-1614376-01-Fyeyvtaaf57-X2-E7-R6-Z6-M5-Mm416.jpg', 'https://i.ibb.co/kcCPhLw/9-Cloud-us-0444-7-E8-Cba5-F-F675-45-C1-A-01-Fyxa92-Ajakqd41-Zdb6-Mh7-K7216.jpg', 'https://i.ibb.co/sbMtwvN/9-Cloud-us-0443-Amber-Genshin-Impa-01-Fyxcam31-Rc2-P767-Wevebcsq81680.jpg', 'https://i.ibb.co/6D3w1Fh/9-Cloud-us-0465-Drlehpc7-Mec5-Sk1-Kt3-Hk-01-Fyxct0-Bec6-Hb9-Aqwg718-Gf0-W16.jpg', 'https://i.ibb.co/YtLBQXv/9-Cloud-us-0440-Nege8-Fonpoc71-01-Ffved9-Mtxn20-Ymq62-Tdj7-E7-X1680-X0.jpg', 'https://i.ibb.co/dPGtkFX/9-Cloud-us-0448-4011229-Fischl-Gen-01-G5-Svh2-S4-Mhvb82-P5-Gpjwqx0-Y1680.jpg', 'https://i.ibb.co/kDKxh9P/9-Cloud-us-0445-3386078-E-692-C-4-Ec9-8-01-Fc8-N1-W1-Kgnkanjmm9-Yqqpmvg16.jpg', 'https://i.ibb.co/hCgWrHW/9-Cloud-us-0475-0113-Bbe5-7214-4-F9-D-9-01-Fdjfecctmy1-Sn9-Gt764-T71-Gz16.jpg', 'https://i.ibb.co/1dCpn2j/9-Cloud-us-0433-Sample-E4334-Fb8-E4-E95-01-Fqxershm8-Y8-Pnm7-C7-X60-Sk5116.jpg', 'https://i.ibb.co/vwp4jD9/9-Cloud-us-0429-361-F4405-3-F6-B-423-A-B-01-Fdjfgvx3-Qmyhcasx179-G7-W7516.jpg', 'https://i.ibb.co/n7v7r5D/9-Cloud-us-0470-A5-F02-Ade721262-Fe89-Ff-01-Ft4-Hed47-R8-R8-Ftbs0-Gj43-Sxf16.jpg', 'https://i.ibb.co/cQvcCHC/9-Cloud-us-0469-28-Af9-A0-F46-F8-Fec293-Ba-01-Ft4-H6-Ftt5-Q06-S0-Jqj0-Ydh40-G16.jpg', 'https://i.ibb.co/w6550ZH/9-Cloud-us-0437-17227701-D7-A3-Ce5-A591-B-01-Ft4-Hd723-W60-Hkhrkcbjkmfpp16.jpg', 'https://i.ibb.co/0fZjhhh/9-Cloud-us-0451-V9-C80-Wleq1-R61-01-Fyxctna97-X5-Sv9-Z6-Kt5-X64-Wz1680-X0.jpg', 'https://i.ibb.co/XL9XHxr/9-Cloud-us-0464-F51-Feee9-948-A-4824-9-01-Fyxaakaj9-Rwpq2-H3-Jstw0-Cg116.jpg', 'https://i.ibb.co/HVLShF3/9-Cloud-us-0468-Sample-31-D53494646-Ad-01-Fyxbwffnyrpjenvvrb0568-F616.jpg', 'https://i.ibb.co/JcvDydH/9-Cloud-us-0434-484-Bfb4-C-26-Fc-4-D04-A-01-Fdjfhyn2-D1-Fpe3-R2-Zhrhm07-S16.jpg', 'https://i.ibb.co/zh3qZwf/9-Cloud-us-0460-8-F20-Dc2-E8-D8-A18-A75-D51-01-Fts6-Zbce62-C1-D2-Fjvv3-Dnnzd16.jpg', 'https://i.ibb.co/Q6vN0Mb/9-Cloud-us-0435-Sample-F6989-Eb02492-D-01-Fqxeqv88-H6-Yb8-Xm7-Swpthfmz16.jpg', 'https://i.ibb.co/vP0vGfK/9-Cloud-us-0461-38-01-Fyxc8-Zw2-R3-Nsgf7-Hjmyzhazg1680-X0.jpg', 'https://i.ibb.co/fMNFNsH/9-Cloud-us-0438-Sample-14-B547-D7701-Fa-01-Fyxaf50-Znjq96-Vamf8-C6-Se3-K16.jpg', 'https://i.ibb.co/hfgyH1t/9-Cloud-us-0431-969051-B112-C207-Bb0-D38-01-Ft4-Hcp1-D23-Nk4-Tp2-Wqc2-Hsce16.jpg', 'https://i.ibb.co/rdZ2QZz/9-Cloud-us-0466-90246627-P3-Master12-01-Fw7-P2-Tm802-Sfts9-Efs2-B00-Hq16.jpg', 'https://i.ibb.co/g6GJ2m1/9-Cloud-us-0453-20220205-061539-01-Fvv5-Ej178-R0-Y3-V0-B9-Nnq4-Dsv1680-X0.jpg', 'https://i.ibb.co/hLLYBHG/9-Cloud-us-0441-9-F3-E3176-9067-4185-9-01-Fdbxa162-P0-Sv7-Rscr1-E680-Zt16.jpg', 'https://i.ibb.co/MVGQtwV/9-Cloud-us-0428-B22-D75-F0-23-C4-44-D5-9-01-Fa83-Y4-Ran5-X313-Gc70-Qg7-Sm616.jpg', 'https://i.ibb.co/nmkDnzn/9-Cloud-us-0455-B55-F67-D5-7-Ce2-456-B-8-01-Fy5-Jt510-Fjq8-Rawvzxewn7-Pr16.jpg', 'https://i.ibb.co/fDNB4nf/9-Cloud-us-0463-Genshin-Impact-Char-01-F288-Hfmbxdy1-Nv2-Cbbekwjft168.jpg', 'https://i.ibb.co/pzX4Zz2/9-Cloud-us-0446-6-A71-E836-C728-4732-B-01-Fx2-E8-Awd7-H9-A6-Ywhmq5-Z1-Vbg16.jpg', 'https://i.ibb.co/nmsWgjm/9-Cloud-us-0456-Sample-F9-F3522373564-01-Fs7-Mhrqfhjgj28-Jq9-Z370-Za816.jpg', 'https://i.ibb.co/5LpdGpp/9-Cloud-us-0462-Sample-37-C57-B4264-Cf8-01-Fqxepwn7-Tcnvaaa5-Qeg8-Gm6-G16.jpg', 'https://i.ibb.co/ZxhQ2fL/9-Cloud-us-0430-De336-D81-B50-A35-Afd8-Ad-01-Ft4-Hjj7-S5-Yxmpc33-E003-Md1-C16.jpg', 'https://i.ibb.co/XSrwC2n/9-Cloud-us-0439-Yqnblqb-01-Ffvc4-Sa0-Js8-Z9-Zec9-Exsth2-S1680-X0.jpg', 'https://i.ibb.co/YN3ygWS/9-Cloud-us-0427-C7289881-F740-496-B-9-01-Fdbx9-Srk4-R3-V5-Jc1-Fg5-Nwstv16.jpg', 'https://i.ibb.co/P6WRCVB/9-Cloud-us-0454-F5561-F81-C3200-F51-Dc1-B-01-Ft4-Hnt4-Adgv5-Qtytpvph63-C816.jpg', 'https://i.ibb.co/bgt12ws/9-Cloud-us-0447-139-Bfc48-B1-De-4-C5-A-9-01-Fy5-Jswb5-D2-Xms3-Z919-J50-W5-D16.jpg', 'https://i.ibb.co/JdTFbGr/9-Cloud-us-0472-14-01-Fz7-Dcf8-Jdrgd7-Npbah64-H9-Fx1680-X0.jpg', 'https://i.ibb.co/j4SH4jp/9-Cloud-us-0474-F2-C119-A2-658-F-4-Fe4-8-01-F9-Bp436-Z7-Wyd8-H2-Tv97-Px38-J16.jpg', 'https://i.ibb.co/Srq8k8V/9-Cloud-us-0526-Illust-90053000-2021-01-Fts7-Qbmxzhqqka6240-Xd104-M16.jpg', 'https://i.ibb.co/HxGDZSM/9-Cloud-us-0458-E4-Bba0-Dc-92-E9-4-F2-E-A-01-Fyxa81-Tx2-H569-M8-Mrbpxhtrg16.jpg', 'https://i.ibb.co/BjqHbn0/9-Cloud-us-0452-4930805-Fischl-Gen-01-G5-Sw1-G8884-Ejgtawnvmc3-Hgx1680.jpg', 'https://i.ibb.co/yFY90z2/9-Cloud-us-0459-3999175-Fischl-Gen-01-G5-Svh07-Pxs6-C73-Vswpxktb4-B1680.jpg', 'https://i.ibb.co/drqy36b/9-Cloud-us-0457-89204074-Cd7-B-4-F94-9-01-G300-Yhwcedssc1-Xsq33-N9-K7-K16.jpg', 'https://i.ibb.co/bL0Kty5/9-Cloud-us-0371-Aa31-Fd35-718-A-41-Aa-B-01-Fc8-N1-H6-Gmer1-N73-Sqf2-Bm2-Jv16.jpg', 'https://i.ibb.co/qMR3fx8/9-Cloud-us-0319-4730535-Fischl-Gen-01-G5-Svy6-Wzn2-Vh9-S8-Gt9-Kp8-Fdx1680.jpg', 'https://i.ibb.co/6HSdc2z/9-Cloud-us-0335-Dwad-01-Fqxepdtgjqwpdp3-T49-B5-Mfvq1680-X0.jpg', 'https://i.ibb.co/9c8m07b/9-Cloud-us-0059-0-B9-F0-C2098567736482-E-01-Fwph5-E54-Y3-M1-Jpdc7-Nwqey0-N16.jpg', 'https://i.ibb.co/ygW7LKJ/9-Cloud-us-0302-0-Hmphbxm0-Zz61-01-Ffvc4-Pt8-W3-H4-Ejnbh44-Hbvhf1680-X0.jpg', 'https://i.ibb.co/6nTnXdT/9-Cloud-us-0409-Illust-90465788-2021-01-Fts7-R0-Rftba7-St9-Ama6-Vzqqt16.jpg', 'https://i.ibb.co/mNRV8pt/9-Cloud-us-0334-06-F629-A5-C723-46-C6-9-01-Fy5-Jqaq00-Mpy2-Hqe4-Nc3-Xqxa16.jpg', 'https://i.ibb.co/XVptWz6/9-Cloud-us-0321-4887261-Fischl-Gen-01-G5-Sw0-Vzkpp0-Exsmmczh6-Vb0-D1680.jpg', 'https://i.ibb.co/4KfdBJf/9-Cloud-us-0336-Yandere-876234-Samp-01-Fyn2-R15-Vnhjz5-Ya4-K8-Nhtz78168.jpg', 'https://i.ibb.co/vvQyMm4/9-Cloud-us-0360-Qkhz8-Uea0-64-Bvl3-Tpxa-01-Ffvc2-Ykn00-Qs2-Mfpz6-T88-Pzd16.jpg', 'https://i.ibb.co/q57Gxmk/9-Cloud-us-0052-82-D9-E238-1350-4-F4-E-9-01-Fy5-Jd3-Azz23-P75-Qp8-H0-Ey1-Hm16.jpg', 'https://i.ibb.co/4pTV7BR/9-Cloud-us-0353-Genjung-Artist-Gensh-01-Fbt6-Axyf5-Jm3-Sjrzwkpj5-Dsp16.jpg', 'https://i.ibb.co/fH7YM39/9-Cloud-us-0070-3993651-Drawingwat-01-G5-Svg8-Vb21-Z98-P5-G18-Qqnr6-E1680.jpg', 'https://i.ibb.co/0C5L9dF/9-Cloud-us-0327-3-De9-C5-Cf-D144-48-C6-B-01-Fbpykdrph93-Cmhpfbnbrazw916.jpg', 'https://i.ibb.co/x6xDXZG/9-Cloud-us-0392-24242869-01-Fyxbg7-S1-D4-Ae0-Etb7558-Rd7-V640-X0.jpg', 'https://i.ibb.co/4WNXhCV/9-Cloud-us-0373-Ac7-C1-A58-3913-4740-9-01-F8-Fd35-N36-Ze48-Ye36-Rzgt8-Ng16.jpg', 'https://i.ibb.co/4mRQLFP/9-Cloud-us-0528-Yandere-792555-Samp-01-Ffvdgama21-Jrt4-Gqscs5-P85-V168.jpg', 'https://i.ibb.co/SVcZjq3/9-Cloud-us-0005-Kuki-Shinobu-Genshin-Impact-Genshin-Impact-Fando.jpg', 'https://i.ibb.co/xLgSWMs/9-Cloud-us-0406-Mnxtzf9-V39-B71-01-Ffvdg6-Jtv8-Wdcjvy7-Qvm7-Ssp1680-X0.jpg', 'https://i.ibb.co/BT7Pjht/9-Cloud-us-0420-96876750-P4-Master12-01-Fy0-T9-Br47-Cm00-Yrnr0-Skcqnd16.jpg', 'https://i.ibb.co/fqD5KVr/9-Cloud-us-0083-3995855-Fischl-Gen-01-G5-Svgmvcx2-Cqs3-Tgzmx8-Ef2-Z1680.jpg', 'https://i.ibb.co/d2v5dVB/9-Cloud-us-0419-Ba8-A7822-4-F25-409-F-8-01-G300-Yxp829-Qhv7-Dx1-Agfmdjj16.jpg', 'https://i.ibb.co/nDv8svr/9-Cloud-us-0080-2-A3-F1-Dbb8-B730-Eed9-C62-01-Fts6-W7-M9-Kkapybnkzeeafegd16.jpg', 'https://i.ibb.co/zftFXt6/9-Cloud-us-0415-Ea8-Ac081-C75-C-40-De-9-01-Fvn3-Wd7-Rkfgnx1-Wczm0-Y85-M516.jpg', 'https://i.ibb.co/KGb76Nn/9-Cloud-us-0311-71547-E83-B293-43-A0-8-01-G76-Q4-Xmdfr4-E59-D82-Hpd7-Jnq16.jpg', 'https://i.ibb.co/wd53cD2/9-Cloud-us-0299-45-Bab16-D-6-E7-D-4-C30-9-01-F9-Bp3-Afwcapxphx6-Pq6-Zjgxy16.jpg', 'https://i.ibb.co/dKm4grd/9-Cloud-us-0003-Kuki-Shinobu-Genshin-Impact-Genshin-Impact-Fando.jpg', 'https://i.ibb.co/SQFHm7B/9-Cloud-us-0328-Zpj4-T8-Ftror81.jpg', 'https://i.ibb.co/Zmw4pfY/9-Cloud-us-0085-6-Dbd1-Fcc-0-Ac4-4-Dd5-9-01-G1-Wx78-Ge35-Amtw1-Srycvjar016.jpg', 'https://i.ibb.co/8xfTGy1/9-Cloud-us-0313-0-F9-C9-Bf4-08-C5-41-F5-B-01-Fbpym1-W357-Zht1-Xak0-Z1-X4-K216.jpg', 'https://i.ibb.co/FzKkSPb/9-Cloud-us-0527-Sample-Eb8-D351-Aae87-F-01-Fyxbsm8-Zs3-Wxa19-Nwe3-Hy61616.jpg', 'https://i.ibb.co/XSQD8K1/9-Cloud-us-0395-78938135-9271-4-D29-B-01-G28-P157-Fqbf6-Acmhnjn7-Zjsz16.jpg', 'https://i.ibb.co/48dWgvL/9-Cloud-us-0391-63-F2045-E-5-Fc7-4465-B-01-Fx2-Eab84-D3-Dywvxz4-G8-Wqkjk16.jpg', 'https://i.ibb.co/F72Rr6z/9-Cloud-us-0414-C2460534-Efe170-B5648-B-01-Fqxena9-Yzxmscw00-Cmwxtdh716.jpg', 'https://i.ibb.co/StPXCD2/9-Cloud-us-0092-75-F45-B19-6192-4-C7-A-9-01-G532-Ez5-Tspf7-Bfghhpq4-Aqnw16.jpg', 'https://i.ibb.co/hCxC0bf/9-Cloud-us-0297-Yandere-822508-Samp-01-Ffvc3-Qa9-Thvks8-W890-Rcv61-R168.jpg', 'https://i.ibb.co/dkq9JZ0/9-Cloud-us-0416-B5-D5556-B-4-Bdc-4-F49-8-01-G4-Zsep8-E7-R3-Cadnma97-V1-Wws16.jpg', 'https://i.ibb.co/P58gZVm/9-Cloud-us-0084-6-Acaa744635536-B3-B205-01-Ft4-H4-Sqdqcq36-Dvxesfvws6-S16.jpg', 'https://i.ibb.co/sskgzdF/9-Cloud-us-0094-3995857-Fischl-Gen-01-G5-Svgxwjxw4-Qp1-A91-Sa7-B74-B1680.jpg', 'https://i.ibb.co/g65xG7c/9-Cloud-us-0355-4633309-Fischl-Gen-01-G5-Svwqj8-H2-Rtyj769-M8-F85-A61680.jpg', 'https://i.ibb.co/6B1Dxcn/9-Cloud-us-0393-Dcb43-Fa4-D8-B23-E88608-B-01-Fpn1-Qgk0-Knq2-Was0-Kvsbx28216.jpg', 'https://i.ibb.co/VHVzs3j/9-Cloud-us-0402-Kuki-Shinobu-Genshin-Impact-Genshin-Impact-Fando.jpg', 'https://i.ibb.co/CVfCz7X/9-Cloud-us-0407-83-Fffa77-0040-499-F-B-01-Fy5-Jt7539-Ymdwk7-G19-H0-Q3-E016.jpg', 'https://i.ibb.co/xMnx2x8/9-Cloud-us-0296-6-D079-A7-D-E002-4740-9-01-Fdjfka4-Zvjayz2-Bsvm2-N6-Mny16.jpg', 'https://i.ibb.co/mNC3T8h/9-Cloud-us-0421-9490-Aed2-2284-473-C-8-01-Fc8-N1-Ypd1-C9-Fnwsjype41-A5-K16.jpg', 'https://i.ibb.co/rHX1dTG/9-Cloud-us-0310-93-A54-B23-4512-4860-B-01-Fdjfgbh5-T07-Fwxmm0-Dagw46-H16.jpg', 'https://i.ibb.co/f9wWvtn/9-Cloud-us-0386-5-Ac20-E1-D-F8-B0-49-Fa-A-01-Fy5-Jsy19-Segfgxb2-Yn5-A09-Sk16.jpg', 'https://i.ibb.co/DM3qBwH/9-Cloud-us-0365-10-D94-Fe2-Bde9-42-F1-8-01-F9-Bp4-Xhcxf1-Hbtgx2-J0-Kyaxm16.jpg', 'https://i.ibb.co/yY454W2/9-Cloud-us-0369-72-Dbe5-Ff-Da24-4271-B-01-Fa83-Z47-Tta9-Yg8-Skgtcpw16-Z16.jpg', 'https://i.ibb.co/xXXYvN0/9-Cloud-us-0093-0-Af9-Cee7-802-B-4216-9-01-Fdjff5-We21-V84-Pacvxqfq5-Sp16.jpg', 'https://i.ibb.co/5YT2RJh/9-Cloud-us-0370-93-Cc022-A-2413-47-B9-A-01-Fbpytd4-Pb6-Qc2-X5-A0-K4-S3-Hrr16.jpg', 'https://i.ibb.co/nwfwpbh/9-Cloud-us-0315-Lisa-By-Dishwasher19-01-Ezh2-Mf51-A4-E3-Sr86-Fys8-K9-Cw16.jpg', 'https://i.ibb.co/rmkfFQd/9-Cloud-us-0422-97234456-P1-Master12-01-Fz9-Mxrzq280-Vcmnt2-Teb358-R16.jpg', 'https://i.ibb.co/PZTwmc3/9-Cloud-us-0378-75-C452-A7-61-Cf-4684-A-01-Fyg6-Zb2-J42853-Dwathw02-Ffz16.jpg', 'https://i.ibb.co/9wLF5zs/9-Cloud-us-0065-4453812-Fischl-Gen-01-G5-Svmhvc2-Mfhtkr7-H8-Kwnm381680.jpg', 'https://i.ibb.co/CHDPYTf/9-Cloud-us-0316-036345-F8-18-Ae-4389-9-01-G1-Wx7-Qx972-Jsn81-Hvkd0-Vptc16.jpg', 'https://i.ibb.co/WKdz9mg/9-Cloud-us-0337-Yandere-740395-Samp-01-Fz7-De1-Amm148-R776-T9-Hdaz6-P168.jpg', 'https://i.ibb.co/QpJwVWr/9-Cloud-us-0380-A9-Fb3-A9-B-A582-49-Dd-B-01-Fy5-Jct2-A0-G5-Ezs7-Zva2-Gv7-Fh16.jpg', 'https://i.ibb.co/821jYzb/9-Cloud-us-0384-35-C10-Ff5-3424-42-B4-A-01-F9-Bp4-Fsrwpzxjdx3-Wfxtehdb16.jpg', 'https://i.ibb.co/wwQh3Ht/9-Cloud-us-0426-Illust-89820296-2021-01-Fts7-Q48-Jxyzmqefbqmmqzxmf16.jpg', 'https://i.ibb.co/5YP1Nzq/9-Cloud-us-0333-29-E4937-D-Fcaa-4497-9-01-Fy5-Japp36-D4-R5-Y89-Swb1-F9-M616.jpg', 'https://i.ibb.co/txxwXDV/9-Cloud-us-0401-Eaf72-E1-Km1-Tc13-M-01-F-01-G28-Pbnxxdas2-K22-Tpt7-Q1-Npk16.jpg', 'https://i.ibb.co/dLGdZtN/9-Cloud-us-0405-Fb253-A35-Ffcf-4-C5-D-A-01-Fvn3-V1-A28-Rzhk2-E9-C09-Gv8-Rg16.jpg', 'https://i.ibb.co/ZmQTYkT/9-Cloud-us-0004-Ntzlsgz.jpg', 'https://i.ibb.co/PtSDtwv/9-Cloud-us-0396-B7-A361-F1-029-F-412-E-B-01-Fa8410-Kw4-Gxrwvq5-Sgqsdc7-T16.jpg', 'https://i.ibb.co/1vT2rLh/9-Cloud-us-0418-Genshin-Impact-Char-01-Et70-Hxgj0861-Pxsv436-T9-Vzp168.jpg', 'https://i.ibb.co/DDmkyjm/9-Cloud-us-0351-0765-E7-C690-B6-A258970-A-01-Ft4-H9-Tsw0-Phxxsjkaakwp1-K816.jpg', 'https://i.ibb.co/L5p4Xn8/9-Cloud-us-0398-54-Fa2514-6681-470-A-8-01-Fdjfkt17-Cvm78-Jc3-S9-Et11-Np16.jpg', 'https://i.ibb.co/J2YtmHD/9-Cloud-us-0403-8-B7-F935-C-C620-4649-B-01-Fetvajgs81-Btne3-Bdbm6-Sxy316.jpg', 'https://i.ibb.co/wQjpVy0/9-Cloud-us-0423-Illust-86554850-2020-01-Fts7-N4-Zw7-S3-X54-Y61-Ecfjyp416.jpg', 'https://i.ibb.co/pKLW06K/9-Cloud-us-0298-86125-B1-C-D38-E-4182-8-01-Fc8-Mz6-Dds3-Wmn5-M01-Wp0-Pf2916.jpg', 'https://i.ibb.co/v1Xc92C/9-Cloud-us-0077-Fqc-Vtakair6-Wm-01-G0-S32-Apa76-S1-Frhj2-Jr7-Ezs61680-X0.jpg', 'https://i.ibb.co/pJvGZjD/9-Cloud-us-0323-B70-F85-Bf-8-Afe-47-D2-9-01-Fbpykmrb2-Ff3-Mjgeg13-Wkzxj16.jpg', 'https://i.ibb.co/NZxkySw/9-Cloud-us-0382-Illust-87216734-2021-01-Fts7-Ndvvtvmarjxny7-Zvrk9-V16.jpg', 'https://i.ibb.co/Dr2NwrJ/9-Cloud-us-0339-Ea153-B0-A-9121-4707-A-01-Fbpym5-Kze7-Nfhfffvkf3-T95-H16.jpg', 'https://i.ibb.co/rvRsFtx/9-Cloud-us-0385-Vodka13-863116-Mona-01-Fyxaw938-Wksxhw4-G0-Xswkfnm168.jpg', 'https://i.ibb.co/MS0rG0y/9-Cloud-us-0424-A5024-D7-B-Fff0-4627-9-01-Fbpyj0-Yqntmt7-Pnbwpyj6-Nm716.jpg', 'https://i.ibb.co/phDhk0f/9-Cloud-us-0064-Efe09-Efe-31-F1-4385-B-01-G007-G4-Ss28-Kttv4-Cmmndk4-Xx16.jpg', 'https://i.ibb.co/dL7ssmH/9-Cloud-us-0073-Yz7-Vvea287391.jpg', 'https://i.ibb.co/mzfVMmk/9-Cloud-us-0374-28-C70-A68-5-F82-46-E2-B-01-Fx2-Eansv5-Bvre1-Jkwvbcrqsv16.jpg', 'https://i.ibb.co/BfbwBFZ/9-Cloud-us-0063-Pbr4-Edxsuzfa7-Gqnqhwu-01-Ffvc2-R07-Afs0-X1-Dwyzf079-Rr16.jpg', 'https://i.ibb.co/qnzFgYv/9-Cloud-us-0322-1-D5-Bff337-E500-Dc9-F000-01-Ffvc367-Rhwp982-Dpg8-Rs6-Mmq16.jpg', 'https://i.ibb.co/0V6TNfC/9-Cloud-us-0362-4-C3-F3-Eb0-Cf08-D374-C772-01-Ft4-H3-B78-X274-G48-Dmw263-D7-W16.jpg', 'https://i.ibb.co/X2r8tcd/9-Cloud-us-0301-Af482-A81-Ec8-D2-C8-D5822-01-Ft4-Hfszs1-Sgcykytra9-Rfngb16.jpg', 'https://i.ibb.co/SmbCKzc/9-Cloud-us-0346-6-Bcc208-B-6409-463-B-9-01-Fy5-Jz9-A7-P6-X3-H9-H0-Zz7-T94-Rc16.jpg', 'https://i.ibb.co/8jkcN39/9-Cloud-us-0387-Genshin-Impact-Char-01-Et72-Swsnpgvdnrgrxxhwcztz168.jpg', 'https://i.ibb.co/c37WFC7/9-Cloud-us-0312-3905390-Amber-Gens-01-Ekt5-Q0-Qdxw6-Rp08-Yqc3-Cgs431680.jpg', 'https://i.ibb.co/51HgtzD/9-Cloud-us-0347-Amber-Genshin-Impa-01-Fyxcdt4-Qyk4-Zs98-Kmjhg1-B0-Q1680.jpg', 'https://i.ibb.co/6132Y4Q/9-Cloud-us-0079-F19-Af7-C07-B9-Ae4-D27874-01-Ffvc400-E6-R8-R8-Kvkq3-Zwfzkk16.jpg', 'https://i.ibb.co/M5StkVV/9-Cloud-us-0325-3925476-Aztodio-Ge-01-G57-Ek2-H2-P7-Wdcrh8-Da2-Qe49-Y1680.jpg', 'https://i.ibb.co/L6vyM1L/9-Cloud-us-0062-31-01-Fjgndkzthj7-Ya00-F4-Gfy1-Wtw1680-X0.jpg', 'https://i.ibb.co/C7jxg1H/9-Cloud-us-0341-5-L7-C0-Sabyd171-01-Ffvc4-Ey5-Jx8-Bwe826-Ctk9-S5-R1680-X0.jpg', 'https://i.ibb.co/qDzCXsF/9-Cloud-us-0375-Sample-713277-Afa295-D-01-Fcncbpt1-E4-B7-S82-P4-A4-Xcwbj16.jpg', 'https://i.ibb.co/B2ykKWr/9-Cloud-us-0001-1-B7-Z6-Isqzp791.jpg', 'https://i.ibb.co/4W3vSfS/9-Cloud-us-0060-Jxekcd3-Vw4-F71-01-Fyxay0-Pxgs0-Jzx4-Kn7-Qwg21-B1680-X0.jpg', 'https://i.ibb.co/9ppfyCZ/9-Cloud-us-0359-4695-B251-56-Ed-44-E0-8-01-Fdjfm4-Nh7-Rdqejsm70-Bx4-Wxv16.jpg', 'https://i.ibb.co/nbCpbJ3/9-Cloud-us-0343-789015-Af-C136-40-Aa-9-01-Fdbxb3-Fhpmxxnrvxnssdmw1-R16.jpg', 'https://i.ibb.co/dm2hjrf/9-Cloud-us-0348-Yandere-823353-Samp-01-Fhf43-Nprrhk36-Vn6-F3-Qrtxg6168.jpg', 'https://i.ibb.co/WWDJ1Sb/9-Cloud-us-0089-4614026-Fischl-Gen-01-G5-Svvegjmm5-Y0-J6-A90-Hmbn691680.jpg', 'https://i.ibb.co/XDt2qS1/9-Cloud-us-0425-Sample-C0915-D231-C06-B-01-G57-Fakmcxvzdprpnm00-V0-Qqv16.jpg', 'https://i.ibb.co/gmwR13k/9-Cloud-us-0300-Konachancom-32805-01-Ffvdfzqsqj6-Cck67-W061-Vpf11680-X.jpg', 'https://i.ibb.co/3S11TTf/9-Cloud-us-0320-Ddef4617-09-Ac-4740-B-01-F9-N962-Gqg8-Ez3-Ca58-Gp5-Wc8-G16.jpg', 'https://i.ibb.co/DCdvVhL/9-Cloud-us-0324-Sample-Df7631-C9-D1-Bac-01-Fcncn8-Zyr5-Jbw16-Anavcbq9016.jpg', 'https://i.ibb.co/CwkcrJ8/9-Cloud-us-0318-77-01-Fz7-Ds63-S1-Ymyfxq5-S8-Pa4-Khf1680-X0.jpg', 'https://i.ibb.co/wgRzk3C/9-Cloud-us-0338-05-A5-Bf1-Bc7442-Be4-D31-D-01-Fsyz02-S3-Bg7-S5-Fxhfqeddwp916.jpg', 'https://i.ibb.co/HPTRLsr/9-Cloud-us-0372-1-B6-E409-E-27-Df-4-F71-A-01-Fyxa7-Vy13-Mbdnhys8-Yx3-Q52516.jpg', 'https://i.ibb.co/SR7rFTS/9-Cloud-us-0379-4485683-Fischl-Gen-01-G5-Svqsm3-Re1-W9-J24-Je65-Bkjb1680.jpg', 'https://i.ibb.co/2ScpxhQ/9-Cloud-us-0413-70828436528079-Fb8009-01-Fs7-Mhwejdnbb8-Hn8-Wrzdczdh16.jpg', 'https://i.ibb.co/M6mnp27/9-Cloud-us-0061-Illust-88596578-2021-01-Fts7-Pdgaqc5-Xweyjsmzbvhg516.jpg', 'https://i.ibb.co/L8JsbB2/9-Cloud-us-0331-85470422-P1-01-G0-Ajqxjw42-Rg1-Ngd0-Gc6-Xnd31680-X0.jpg', 'https://i.ibb.co/vZ3dByy/9-Cloud-us-0071-09260830-E751-B24-Ebd76-01-Ft4-Hd3-Fq808-Saz8-Mpt1-Zzc4-R16.jpg', 'https://i.ibb.co/0MnhL8y/9-Cloud-us-0087-599-F03-C2-B780-B1-Ed95-E1-01-Ft4-H97-Ec0-Ytappzr2-Wk4-Vzf516.jpg', 'https://i.ibb.co/ZG2nDPV/9-Cloud-us-0342-Yandere-862736-Samp-01-Fyn2-Sefxstte2-Zb8-Vx37-Wdak168.jpg', 'https://i.ibb.co/60ZVYT8/9-Cloud-us-0082-F1-F6-F34-A-7-B18-485-A-B-01-G1-Wxd602-Vkfmyjjpzc9-Nf6-Wj16.jpg', 'https://i.ibb.co/Wy4StjV/9-Cloud-us-0410-06-E3-Bac8-27-F5-485-B-9-01-Fy5-Jvpax6-Gvtxzhg5-J7740-Sq16.jpg', 'https://i.ibb.co/C8FqjPm/9-Cloud-us-0309-3-Qdw5-Ufjfm871-01-Fhf43-V71-F8-Q5292-G6-Fyw3-Ms81680-X0.jpg', 'https://i.ibb.co/MCjGHHg/9-Cloud-us-0000-D4-C73-C94-6327-495-E-A-01-Fdjfgyaqne5-Aes4-Adzyzc6-Wr16.jpg', 'https://i.ibb.co/TbxqR2S/9-Cloud-us-0056-E8-B0-Ad29-2-Fa5-483-B-A-01-Fy5-Jzr62-Ted9-Sg808-Q5-Fm17-V16.jpg', 'https://i.ibb.co/fGdMSDK/9-Cloud-us-0366-7-C734-Ce60743-B6-F25-Aa5-01-G1-D2-Pq8-Bjm8-Cs8-H1-Bamjnm5-W16.jpg', 'https://i.ibb.co/vqc1bPB/9-Cloud-us-0354-E5-C4-Dfb3110-Affa24093-01-Fts7-Dqv4-Kztbg6-K882-Kcyj2-R16.jpg', 'https://i.ibb.co/bgw7pkV/9-Cloud-us-0002-Yae-Genshin-Impact-Genshin-Impact-Fandoms-Prince.jpg', 'https://i.ibb.co/02zSMcZ/9-Cloud-us-0329-Bbb5-Ee1-D111471-Dd8217-01-Ft4-Hg6-Tfb6-Znny404-X3-Ak75316.jpg', 'https://i.ibb.co/Ypr7VJb/9-Cloud-us-0381-4616-Ebf2-6625-4-Eab-9-01-Fbpyk6-Ybsvmkjedp6-Hws6-Wr016.jpg', 'https://i.ibb.co/Z8jZj9Y/9-Cloud-us-0408-A43-E0-E22-0-Fa2-49-Cc-9-01-Fyxa96-Rvztjm3-Bq2-H8-M0-Qft216.jpg', 'https://i.ibb.co/M2fq356/9-Cloud-us-0090-Sq4-T39-Cjz3-Z61-01-Ffvc4-Xqymapkefqcmywvyt2-W1680-X0.jpg', 'https://i.ibb.co/nBR4fNW/9-Cloud-us-0361-720222-Fb-1516-4446-8-01-G4-Ashdarq98-Qrqqxsgn7-Sr0-J16.jpg', 'https://i.ibb.co/8rjjHYx/9-Cloud-us-0055-93-Cqlawjner51-01-Ezh2-Kat72-E0308-Ysj4-T5-F6-Xk1680-X0.jpg', 'https://i.ibb.co/wQ1tP4N/9-Cloud-us-0344-5-Fe1-C6-Bf-7-B95-43-A1-9-01-Fetv8-Vf8-D0-Kpgabjpmn12-Nfa16.jpg', 'https://i.ibb.co/FHcJYp2/9-Cloud-us-0066-F26-C00-Cd-98-Fe-403-A-9-01-Fyxaarxfec6-Y0-E46-Xst3-Jmd616.jpg', 'https://i.ibb.co/7CfqqPP/9-Cloud-us-0303-D2750-F4-E3-Dc007-Fd4133-01-Fts7-Czawmgk4-Qfja6-Dvm1-Kk516.jpg', 'https://i.ibb.co/kq7LjWt/9-Cloud-us-0317-84-A5-B5643-A77-E8798-B98-01-G1-D2-Pskby7-Xvb8-B5-B0-Mx3-Cc716.jpg', 'https://i.ibb.co/N3Snmyc/9-Cloud-us-0006-Screenshot-1.jpg', 'https://i.ibb.co/M1WBt58/9-Cloud-us-0074-4173538-Genshin-Im-01-Ezhqxv5-Y9-A0-Mjneqx7-W0-Y6-Es1680.jpg', 'https://i.ibb.co/s2Vt0Pw/9-Cloud-us-0411-2-C6-Bceaf-A91-A-4-Cad-A-01-Fy5-Jysbq383-G62-G6-San9-Vwx016.jpg', 'https://i.ibb.co/PMF7VDY/9-Cloud-us-0088-31-C72-F25-8-C2-B-495-D-8-01-Fy5-Jbm2-Gxezd7-Zdyjeah6-Vsk16.jpg', 'https://i.ibb.co/rtt4X99/9-Cloud-us-0404-3-Baead24-747-B-488-D-B-01-Fa84040-A3-Qt9-Qrprkr280-Kh516.jpg', 'https://i.ibb.co/7GV2w8f/9-Cloud-us-0053-How-Dare-She-Show-Of-01-Fnzcb97-Tm7-Jfxqt45-Ndffw2-T16.jpg', 'https://i.ibb.co/LJ6vSdv/9-Cloud-us-0058-4250747-Fischl-Gen-01-G5-Svk56-Qjmfknsnpr102-V83-X1680.jpg', 'https://i.ibb.co/ZGvq46j/9-Cloud-us-0078-Eula-Amber-Limgae-Ge-01-Fyxcgnqgsxgt5-B5-Hjrhqbdsm16.jpg', 'https://i.ibb.co/C57RXnB/9-Cloud-us-0352-8-B39-Dff54-Fe64-Dc00-Aa4-01-Ft4-Kep9-Q7-Hv1-E5-Jeb53-H8-Sdx16.jpg', 'https://i.ibb.co/44LDGT1/9-Cloud-us-0364-4181346-Genshin-Im-01-Ezhqy5-P4285-Y5-C56-Aaqn6-My21680.jpg', 'https://i.ibb.co/316jHR2/9-Cloud-us-0356-D1-A417-F6-Cde0-43-F0-B-01-Fc8-Mzy6-D2-K3-Jwzebmdw14-Yrn16.jpg', 'https://i.ibb.co/NjfR2F6/9-Cloud-us-0069-Aa3-Ba691-0035-4-Dc5-B-01-Fbpyfdhmgtvrq4-Kbpys74-Mdm16.jpg', 'https://i.ibb.co/6BYxZcq/9-Cloud-us-0308-F9-E808-D-01-Fts7-Gkp3-Cehea9-Wzxk3-Gjtah1680-X0.jpg', 'https://i.ibb.co/bzhdR81/9-Cloud-us-0307-25-01-Fjgnbcmesm80-Jjw55-Ezj5-Tcm1680-X0.jpg', 'https://i.ibb.co/2vZf9KC/9-Cloud-us-0330-3-Cbfdc25-0-C84-4114-B-01-G1-Wxc6-Atjqzwf586-Skvh92-Gm16.jpg', 'https://i.ibb.co/84YQDJq/9-Cloud-us-0072-C82-F34-Ce71-C5-D9-Fd3936-01-Fznavemy2-W7-Sh57-Yjxdevttv16.jpg', 'https://i.ibb.co/bzFSCHH/9-Cloud-us-0368-4184859-Egami-Mal-01-G5-Svjx8-Sdwqyvshzqk6-C2-W181680-X.jpg', 'https://i.ibb.co/X7BNR7b/9-Cloud-us-0054-5965-Abc73-B26-Ac04-E5-C0-01-Fts74-Szmq3-Svpktgcjed55-Cx16.jpg', 'https://i.ibb.co/x7g0J3r/9-Cloud-us-0067-94832172-P5-Master12-01-Fw7-T3-Sxjznhzrhac5-F8-Nsf7-G16.jpg', 'https://i.ibb.co/GWsnQ5t/9-Cloud-us-0350-Af-Mlmeytp7-Nwnkr28-Th-01-Ezhqzkyhnk9-Fwt28-C1-Cc19-X416.jpg', 'https://i.ibb.co/JnMfn0q/9-Cloud-us-0376-Konachancom-33196-01-Fyxan6-V59-Zjfj82-Fk7-Wjtbgr1680-X.jpg', 'https://i.ibb.co/CQHSZ2Z/9-Cloud-us-0086-4483855-Fischl-Gen-01-G5-Svq4468-Qrp6-V54-Fscmdj0-Q1680.jpg', 'https://i.ibb.co/KN7XVhD/9-Cloud-us-0345-101-C0453-6523-453-A-8-01-Fbpytgsvqv0-F6114-Axvxwj1-M16.jpg', 'https://i.ibb.co/42Z7vCF/9-Cloud-us-0377-Illust-97548892-2022-01-G0-Ht1-Yrzsnj6-Vqhw6-Hs65-V2716.jpg', 'https://i.ibb.co/P6F0jbT/9-Cloud-us-0399-5-K6-Ofz4-Nodr61-01-Ffvc3-Bk1-Wvtdrgdhqw570-Ffk1680-X0.jpg', 'https://i.ibb.co/kSWNps7/9-Cloud-us-0068-52-Bd1363-A37-A-48-Fd-A-01-Fy5-Jbwn9640-N3-Zhre3-Bfgg7-E16.jpg', 'https://i.ibb.co/vxGFPgm/9-Cloud-us-0075-5-A1560-Ff6-B3069-A8-B093-01-Fts6-Xq4-V8-Hnb0-Gxcgmez01-Zw16.jpg', 'https://i.ibb.co/Y7KKCwJ/9-Cloud-us-0349-B3-C33956-19-D1-4-F0-D-8-01-Fdjfg30-S5-Wg11-Ytjvphj148-S16.jpg', 'https://i.ibb.co/gmbCnXY/9-Cloud-us-0389-23-A5547-E-B50-E-4-Bb3-9-01-Fetv8-S1-Pjgyty56-Rjkky3-Pk916.jpg', 'https://i.ibb.co/87vbCDr/9-Cloud-us-0304-4492511-Genshin-Im-01-G57-Er3-Zgkk883-Avc1-Gj4-We1-P1680.jpg', 'https://i.ibb.co/bJf7KmW/9-Cloud-us-0081-Raiden-Shogun-Genshi-01-Fyxapzej8-Wbmf8-Ynfjk7-F37816.jpg', 'https://i.ibb.co/9tYRRt4/9-Cloud-us-0091-4453820-Fischl-Gen-01-G5-Svnvxbjj15-Mfdt8-Zy55-K171680.jpg', 'https://i.ibb.co/m4y03M6/9-Cloud-us-0383-Genjung-Artist-Gensh-01-Fbt6-B5-X6-Yrg6-Phcnx6-P2-J5-B016.jpg', 'https://i.ibb.co/kM8BvZY/9-Cloud-us-0394-4154849-Genshin-Im-01-Ezhqx1-Dw8-Xnm26-T4-Yqa2-G6331680.jpg', 'https://i.ibb.co/NVLkBjP/9-Cloud-us-0358-5-Av4-Xtvwq4-J81-01-Fyn2-Hd6-Wf13-Exxxamnkx08-Nj1680-X0.jpg', 'https://i.ibb.co/8KrHhfd/9-Cloud-us-0397-154-Ddad5-8977-48-Dc-9-01-Fy5-Jvra19-P8-Tseahmj4-Ncsrh16.jpg', 'https://i.ibb.co/RDdbtY2/9-Cloud-us-0357-Vyfld8-Jd57-V61-01-Ffvdg3-Hssge9803-C7-K96-N9-P01680-X0.jpg', 'https://i.ibb.co/9s02rVs/9-Cloud-us-0340-E8-E44-F7-F-1146-4-F85-9-01-Fy5-Jq627-Mcwd2-K779-Xvq63-Pr16.jpg', 'https://i.ibb.co/QDkptjv/9-Cloud-us-0305-4-C9-F82-C5-F0-D9-Fa691649-01-Ft4-H3-Fdnbxqrvf93-Be6-R8-Ngz16.jpg', 'https://i.ibb.co/6gZKZ8Z/9-Cloud-us-0076-D079-Ef50-B7948-B4-E295-C-01-Fts7-Ctnnbzw05-Rk2-G68061-Hd16.jpg', 'https://i.ibb.co/NnNW3J1/9-Cloud-us-0314-F8613-B3-Ca184-A8423-A9-B-01-Ft43-Ry5-S7-D75-N64-Bjwswf9-Mz16.jpg', 'https://i.ibb.co/1ssw0ZZ/9-Cloud-us-0363-F6-Eafdb6-A15-C009-C5508-01-Ft4-M6-Nmw3-X2-V8-G87622-Cbg8-V16.jpg', 'https://i.ibb.co/19JJRss/9-Cloud-us-0306-Defafc63-A4-Bd-415-A-A-01-G646-Jqpw76-Ja3-Qgy5-Vjtw0-Nq16.jpg', 'https://i.ibb.co/NZX7jdh/9-Cloud-us-0367-1820-Fa76-0271-4573-B-01-G76-Q5595-Z3-Sqewx2-Dh50-Wn8416.jpg', 'https://i.ibb.co/xqtzcn6/9-Cloud-us-0390-3-B2763-A474578-Dde435-A-01-Fts6-Ws72-W6-Ak7-Kmmvm9-K36-W116.jpg', 'https://i.ibb.co/hVdfFyk/9-Cloud-us-0332-76521-E1-A-3522-4690-A-01-Fetv9-B51-P2-Jds5-Ghs7-Vq5-Ejk16.jpg', 'https://i.ibb.co/4Mgkxd9/9-Cloud-us-0326-B1-D42728-250-E-4-C78-A-01-F9-Bp4-C59-Wwpwx7-K5-Nnfth2-Fg16.jpg', 'https://i.ibb.co/VMY9VPn/9-Cloud-us-0388-78-Dcbc85-C82004-B801-A6-01-Ft4-H864-Q9-Dz1-Ndqkdag75-C4-D16.jpg', 'https://i.ibb.co/VQg318y/9-Cloud-us-0417-9-Fd44-Bd8-B026-4459-9-01-Fy5-Jw7-Esvkne4-Zyncz0-Mrx9-X16.jpg', 'https://i.ibb.co/nRFqCrG/9-Cloud-us-0095-E10-Aea47-16-B7-4-Df3-A-01-Fyg7550-Zehngeztmx47-Exnx316.jpg', 'https://i.ibb.co/F4VDJM5/9-Cloud-us-0400-9-Aae854654-C93-Be02554-01-Ft4-H5-J1-Bbhgh6-Nn1-Wg1-D81-Zh16.jpg', 'https://i.ibb.co/9Yx3tT9/9-Cloud-us-0057-4962980-Fischl-Gen-01-G5-Sw1-Zr1-Arkkm3-Z3-Arx26-Yxp1680.jpg', 'https://i.ibb.co/3TgrffH/9-Cloud-us-0412-6-B605397-Ccf6-4-A7-B-9-01-G76-Q4-Twrgjng0-Xxwbns85-Re616.jpg']

/*============== TEXT ==============*/
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」Loading...```'
global.eror = '```『404 error』```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '404' // default 10TB
global.fpagedoc = '404'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅═┅═❏ *DASHBOARD* ❏═┅═┅'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '✦' //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============== STICKER WM ==============*/
global.stickpack = 'Creator '
global.stickauth = `©Xianzhe ID`

global.multiplier = 30 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

//------ FUNCTION
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
