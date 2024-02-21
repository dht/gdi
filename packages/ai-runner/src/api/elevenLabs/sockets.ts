import { DEFAULT_VOICE, nameToIds } from './_config';
import { Options } from './speech';
import io from 'socket.io-client';

const getUrl = (voiceId: string, model: string) =>
  `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream-input?model_id=${model}`;

export const stream = (req: any, text: string, options?: Partial<Options>) => {
  let {
    voice = DEFAULT_VOICE,
    style = 0,
    model = 'eleven_multilingual_v2',
    stability = 0,
    similarity = 0,
    boost = true,
    turbo = false,
  } = options ?? {};

  const voiceId = (nameToIds as any)[voice];
  const url = getUrl(voiceId, model);
  const socket = io(url);

  // 2. Initialize the connection by sending the BOS message
  socket.on('connect', () => {
    const bosMessage = {
      text: ' ',
      voice_settings: {
        similarity_boost: similarity,
        stability,
        style,
        use_speaker_boost: boost,
      },
      xi_api_key: '',
      authorization: req.headers.authorization,
    };

    socket.emit('bos', bosMessage);

    // 3. Send the input text message ("Hello World")
    const textMessage = {
      text,
      try_trigger_generation: true,
    };

    socket.emit('text', textMessage);

    // 4. Send the EOS message with an empty string
    const eosMessage = {
      text: '',
    };

    socket.emit('eos', eosMessage);
  });

  // 5. Handle server responses
  socket.on('message', (response: any) => {
    console.log('Server response:', response);

    if (response.audio) {
      // decode and handle the audio data (e.g., play it)
      const audioChunk = atob(response.audio); // decode base64
      console.log('Received audio chunk');
    } else {
      console.log('No audio data in the response');
    }

    if (response.isFinal) {
      // the generation is complete
    }

    if (response.normalizedAlignment) {
      // use the alignment info if needed
    }
  });

  // Handle errors
  socket.on('error', (error: any) => {
    console.error(`Socket.IO Error: ${error}`);
  });

  // Handle socket closing
  socket.on('disconnect', (reason: string) => {
    console.warn(`Socket.IO disconnected: ${reason}`);
  });
};
