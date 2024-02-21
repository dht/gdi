import io from 'socket.io-client';
import { DEFAULT_VOICE, nameToIds } from './speech.config';
import { getString } from 'shared-base';

const getUrl = (voiceId: string, model: string) =>
  `wss://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream-input?model_id=${model}`;

export const getKey = () => {
  return getString('elevenLabsKey');
};

export const speak = (text: string, options?: Partial<Json>) => {
  let {
    voice = DEFAULT_VOICE,
    style = 0,
    model = 'eleven_multilingual_v2',
    stability = 0,
    similarity = 0,
    boost = true,
    turbo = true,
  } = options ?? {};

  if (turbo) {
    model = 'eleven_turbo_v2';
  }

  const apiKey = getKey();
  if (!apiKey) return;

  const audioContext = new AudioContext();
  let audioQueue: any[] = []; // Queue to store audio chunks
  let isPlaying = false; // Flag to track if audio is currently playing

  function playNextAudio() {
    if (audioQueue.length > 0 && audioContext.state === 'suspended') {
      audioContext.resume().then(function () {
        playNextAudio();
      });
    } else if (audioQueue.length > 0) {
      isPlaying = true;
      const buffer = audioQueue.shift(); // Get the next audio buffer from the queue
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(audioContext.destination);
      source.onended = function () {
        isPlaying = false;
        playNextAudio(); // Play the next audio chunk when this one ends
      };
      source.start();
    }
  }

  const voiceId = (nameToIds as any)[voice];
  const wsUrl = getUrl(voiceId, model);
  const socket = new WebSocket(wsUrl);

  // 2. Initialize the connection by sending the BOS message
  socket.onopen = function (event) {
    const bosMessage = {
      text: ' ',
      voice_settings: {
        stability,
        style,
        similarity_boost: similarity,
        use_speaker_boost: boost,
      },
      xi_api_key: apiKey,
    };

    socket.send(JSON.stringify(bosMessage));

    // 3. Send the input text message ("Hello World")
    const textMessage = {
      text,
      try_trigger_generation: true,
    };

    socket.send(JSON.stringify(textMessage));

    // 4. Send the EOS message with an empty string
    const eosMessage = {
      text: '',
    };

    socket.send(JSON.stringify(eosMessage));
  };

  // 5. Handle server responses
  socket.onmessage = function (event) {
    const response = JSON.parse(event.data);

    console.log('Server response:', response);

    if (response.audio) {
      // decode and handle the audio data (e.g., play it)
      // Decode and handle the audio data (e.g., play it)
      const audioChunk = atob(response.audio); // decode base64

      audioContext.decodeAudioData(
        Uint8Array.from(audioChunk, (c) => c.charCodeAt(0)).buffer,
        function (buffer) {
          audioQueue.push(buffer); // Queue up the decoded audio buffer

          // If audio is not currently playing, start playing the queue
          if (!isPlaying) {
            playNextAudio();
          }
        }
      );
    } else {
      console.log('No audio data in the response');
    }

    if (response.isFinal) {
      // the generation is complete
    }

    if (response.normalizedAlignment) {
      // use the alignment info if needed
    }
  };

  // Handle errors
  socket.onerror = function (error) {
    console.error(`WebSocket Error: ${error}`);
  };

  // Handle socket closing
  socket.onclose = function (event) {
    if (event.wasClean) {
      console.info(
        `Connection closed cleanly, code=${event.code}, reason=${event.reason}`
      );
    } else {
      console.warn('Connection died');
    }
  };
};
