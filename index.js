const { Telegraf } = require("telegraf");
const tokenBot = require("./botToken");
const msg = require('./botMessage');
const Btn = require('./botButton')
const youTube=require('./getVideo')
const bot = new Telegraf(tokenBot);

bot.start(ctx => { ctx.reply(msg.startMessage, Btn.startBtn()) });
bot.action("download", ctx => { ctx.reply('لطفا لینک ویدیو مورد نظر را بفرستید'); })
bot.url(ctx => {
    const link = ctx.message.text;
    youTube.downloader(link);
})
bot.launch();