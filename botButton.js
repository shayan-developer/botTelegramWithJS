module.exports.startBtn=(ctx)=>{
    return {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text:"راهنما",
                        callback_data:'help'
                    },
                    {
                        text: "دانلود ویدیو",
                        callback_data: "download"
                    }
                ]
            ]
        }
    }
}