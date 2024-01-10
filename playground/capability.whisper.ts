import { config } from 'dotenv';
import { flow } from './capability.flow.input';
import { api, init } from '../src/api';
import * as fs from 'fs';
import { openai } from '../src/api/openai/_init';
import { whisper } from '../src/api/openai/whisper';
import { calculateAmplitude } from './capability.whisper.utils';

const recorder = require('node-record-lpcm16');
const silenceThreshold = 0.02; // Example threshold, adjust according to your audio input

// Define the output WAV file path
const file = fs.createWriteStream('test.wav', { encoding: 'binary' });

// Create a new instance of the Recorder class
const recording = recorder.record({
  // device: 'plughw:1,0', // Change this to your audio input device (e.g., 'hw:1,0')
  sampleRate: 16000, // Sample rate (e.g., 16000 Hz)
  channels: 1, // Number of audio channels (1 for mono)
  bitDepth: 16, // Bit depth (16-bit)
});

recording
  .stream()
  .on('error', (err: any) => {
    console.error('recorder threw an error:', err);
  })
  .on('data', (data: any) => {
    // Calculate the amplitude of the audio data
    const amplitude = calculateAmplitude(data);

    // If the amplitude is below the silence threshold, consider it as silence

    if (amplitude < silenceThreshold) {
      console.log('Silence detected');
    }

    // Write the audio data to the WAV file
    file.write(data);
  })
  .pipe(file);

config();

init({
  openAI: process.env.OPENAI_API_KEY,
  elevenLabs: process.env.ELEVENLABS_API_KEY,
});

const run = async () => {
  console.time('start');

  // const response = await whisper(file as any);

  console.timeEnd('start');
};

run();
