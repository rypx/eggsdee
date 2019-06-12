'use strict'

require('dotenv').config()
const BootBot = require('bootbot')

let bot = new BootBot({
    accessToken: process.env.ACCESSTOKEN,
    verifyToken: process.env.VERIFYTOKEN,
    appSecret: process.env.APPSECRET
})

bot.on('message', async (msg) => {
    console.log(msg)
})

bot.start()