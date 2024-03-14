import axios from 'axios';
import { config } from 'dotenv';
import * as fs from 'fs';

config();

const accessToken = process.env.WHATSAPP_TOKEN;
const phoneNumber = process.env.WHATSAPP_PHONE_TO;

async function sendMessage() {
  const url = 'https://graph.facebook.com/v18.0/260378153825617/messages';
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };
  const data = {
    messaging_product: 'whatsapp',
    to: phoneNumber,
    type: 'text',
    text: {
      // the text object
      preview_url: false,
      body: 'great',
    },
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

sendMessage();
