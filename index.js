const TelegramBot = require("node-telegram-bot-api")
require("dotenv").config();

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {polling:true});
bot.on("message", (msg) => {
    const chatid = msg.chat.id;
    const text = msg.text.toLowerCase();
    console.log(text);
    if(text === "hi" || text === "hello"){
        bot.sendMessage(chatid, `hello ${msg.from.first_name}, how are you?`)
    }else if(text === "bye" || text === "goodbye" || text === "see you later" || text === "by"){
        bot.sendMessage(chatid, `good bye brother i am always here to help you. good day!`)
    }else if(text === "/start"){
        bot.sendMessage(chatid, `hello ${msg.from.first_name}, try using /random command to generate a random quote.`)
    }else if(text === "/random"){
        fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .then(data => bot.sendMessage(chatid, `${data.quote} ~ by ${data.author}`));
    }else{
        bot.sendMessage(chatid, "i am not able to understand you, please try again later.")
    }
});