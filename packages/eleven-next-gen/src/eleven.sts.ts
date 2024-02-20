import FormData from 'form-data';
import { axiosInstance } from './globals';

export const speechToSpeech = async (audioData: Buffer, voiceId: string) => {
  const path = `/speech-to-speech/${voiceId}/stream?`;

  try {
    const formData = new FormData();
    formData.append('audio', audioData, 'audio.wav');
    formData.append('model_id', 'eleven_multilingual_sts_v2');

    const response = await axiosInstance.post(path, formData, {
      headers: {
        ...formData.getHeaders(),
      },
      responseType: 'stream',
    });

    return response;
  } catch (error: any) {
    console.error('Error converting audio:', error);
  }
};
