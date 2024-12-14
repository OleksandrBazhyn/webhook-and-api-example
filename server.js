require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

app.use(bodyParser.json());

app.post('/telegramWebhook', async (req, res) => {
    console.log('Message received: ', req.body);

    if (req.body.message) {
        const chatId = req.body.message.chat.id;
        const userMessage = req.body.message.text;

        const replyText = `You wrote ${userMessage}`;
        const userName = req.body.message.chat.username;
        try {
            await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
                chat_id: chatId,
                text: replyText,
            });
            console.log(`Message sent to ${userName}`);
        } catch (error) {
            console.error('Sending error', error.message);
        }
    }

    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Webhook server started on port ${PORT}`);
});