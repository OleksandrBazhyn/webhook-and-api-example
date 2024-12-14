# Telegram Webhook Server

This project implements a server to handle Telegram messages via Webhook.

## Prerequisites

1. You need to have **Node.js** and **Docker** installed.

2. You must have a **Telegram Bot Token**, which you get through [BotFather](https://core.telegram.org/bots#botfather).

## Setup Instructions

### Step 1: Clone the Repository

Clone the repository using Git:

```bash
git clone https://github.com/OleksandrBazhyn/webhook-and-api-example.git
cd telegram-webhook
```

### Step 2: Set Up the Environment

Create a ```bash .env ``` file in the root of the project and add your **Telegram Bot Token**:

```bash
TELEGRAM_TOKEN=your-telegram-token
```
Replace ```bash your-telegram-token ``` with your actual bot token received from BotFather.

### Step 3: Run the Server with Docker

## Running with Docker:

1. Build the Docker image:

```bash
docker build -t telegram-webhook .
```

2. Run the container with Docker:

```bash
docker-compose up
```

This will start the server on port 3000 inside the Docker container.

## Running Without Docker:

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
node server.js
```

### Step 4: Set Up the Webhook for Telegram

To set up the webhook for your bot, send a POST request to the Telegram API with your URL. You can use [ngrok](https://ngrok.com/) to expose a local port if your server is running locally.

```bash
ngrok http 3000
```

This will provide a public URL. Now, register the Webhook for your bot:

```bash
curl -F "url=https://your-ngrok-url/telegramWebhook" https://api.telegram.org/bot<your-telegram-token>/setWebhook
```

Replace *your-ngrok-url* with the public URL provided by ngrok and *<your-telegram-token>* with your Telegram bot token.

### Step 5: Verify

After successfully setting it up, send a message to your bot via Telegram, and it should reply with "You wrote <your message>".

### Notes
- If you're using Docker, make sure port 3000 is open to your container.
- If you encounter any issues, verify that the token is correct and the webhook is set up properly.

### License
This project is licensed under the MIT License - see [LICENSE.md](LICENSE) for details.