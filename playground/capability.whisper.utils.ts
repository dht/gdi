const fs = require('fs');
const wav = require('wav');
const nodeWav = require('node-wav');

const outputDirectory = 'output'; // Replace with your output directory

export function calculateAmplitude(audioData: any) {
  // Calculate the root mean square (RMS) of the audio data
  const sumOfSquares = audioData.reduce((acc: any, sample: any) => acc + sample * sample, 0);
  const rms = Math.sqrt(sumOfSquares / audioData.length);

  return rms;
}
