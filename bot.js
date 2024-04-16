// This bot returns the Vercel URL to users when they /start conversation with bot.
require("dotenv").config();

// Import the telegram bot library
const TelegramBot = require("node-telegram-bot-api");

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your bot's token
const token = process.env.TELEGRAM_BOT_API_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // Listen for the start command
  if (msg.text.toString().toLowerCase().includes("/start")) {
    const miniAppUrl = "https://telegram-mini-app-example.vercel.app/"; // Replace with your Mini App's URL
    bot.sendMessage(
      chatId,
      "Welcome! Click here to access our Mini App: " + miniAppUrl
    );
  }
});

console.log("Bot server started in the polling mode...");
