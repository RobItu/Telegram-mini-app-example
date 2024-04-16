const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.TELEGRAM_BOT_API_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const WEB_APP_URL = "https://telegram-mini-app-example.vercel.app/"; // Your Mini App URL

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const options = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Open Mini App", web_app: { url: WEB_APP_URL } }],
      ],
    }),
  };

  bot.sendMessage(
    chatId,
    "Welcome! Click below to open the Mini App.",
    options
  );
});

bot.on("callback_query", (callbackQuery) => {
  const message = callbackQuery.message;
  const data = callbackQuery.data; // This is the data sent from your Mini App using `sendData`

  // Log the data to console for debugging
  console.log(data);

  // Respond back to the Telegram chat with the data received
  bot.sendMessage(message.chat.id, `Received data: ${data}`);

  // Optional: Answer the callback query - required for Inline keyboards, etc.
  bot.answerCallbackQuery(callbackQuery.id, { text: "Data received!" });
});

console.log("Bot server started in the polling mode...");
