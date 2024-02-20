# Eleven Next Gen

A polyfill package for new APIs missing from [ElevenLabs API](https://elevenlabs.io/docs/api-reference/text-to-speech).

> NOTE: Use only for exploration. DO NOT use in production. It uses your personal bearer token which is temporary by nature.

> NOTE 2: Once APIs are implemented by the ElevenLabs team they will be deprecated from this package.

## Installation

```
npm i --save eleven-next-gen
```

## Usage

```ts
import fs from 'fs';
import { init, speechToSpeech } from 'eleven-next-gen';

const VOICE_ID = 'VOICE_ID';
const TOKEN = 'YOUR_BEARER_TOKEN';
const INPUT_FILE = './input.wav';
const OUTPUT_FILE = './output.wav';

const run = async () => {
  init(TOKEN);
  const audioData = await fs.promises.readFile(INPUT_FILE);
  const response = await speechToSpeech(audioData, VOICE_ID);
  const writer = fs.createWriteStream(OUTPUT_FILE);
  response.data.pipe(writer);
};

run();
```
