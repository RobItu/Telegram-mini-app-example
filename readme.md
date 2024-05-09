# Telegram Mini App

This project is a Telegram Mini App designed to demonstrate the integration of camera functionality directly within the Telegram app. Users can start the camera, capture photos, and switch between the front and rear cameras.

**Try it Out:** https://telegram-mini-app-example.vercel.app/

## Features

- **Start Camera**: Allows users to activate the camera within the app.
- **Capture Photo**: Users can take a photo (no storage functionality) and see the image data output to the console.
- **Switch Camera**: Toggle between the front-facing and rear-facing cameras (not working)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js](https://nodejs.org/).
- `.env` file with TELEGRAM_BOT_API_TOKEN
- You have a Telegram account to test the Mini App in the Telegram environment.

## Installation

To install the Telegram Mini App, follow these steps:

1. Clone the repository
2. ```npm install```
3. `bot.js` and `bot2.js` have different functions. The former returns the mini app link when users "/start" the conversation witht the bot. The latter greets the users and presents them with the button to open the mini-app. Depending on which you want, you must run a `node` server so it can listen to the bot.

```
node bot.js
```
