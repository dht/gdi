import { invokeEvent } from 'shared-base';

let recognition: any,
  analyser: AnalyserNode,
  audioContext: AudioContext,
  audioInput: MediaStreamAudioSourceNode;

export const startSpeechRecognition = () => {
  const waveformElement = document.querySelector('.waveformElement') as HTMLCanvasElement;

  if (!waveformElement) {
    return;
  }

  audioContext = new AudioContext();
  const gainNode = audioContext.createGain();

  analyser = audioContext.createAnalyser();
  analyser.fftSize = 256;

  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      audioInput = audioContext.createMediaStreamSource(stream);
      audioInput.connect(analyser);
      audioInput.connect(gainNode);

      // mute
      gainNode.gain.value = 0;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      const canvasContext = waveformElement.getContext('2d')!;

      analyser.connect(audioContext.destination);

      // @ts-ignore
      recognition = new webkitSpeechRecognition() || new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;

      recognition.onresult = (event: any) => {
        const result = event.results[event.results.length - 1];
        const transcript = result[0].transcript;

        invokeEvent('global/speech', {
          transcript,
        });
      };

      recognition.start();

      recognition.addEventListener('end', () => {
        analyser.disconnect();
        audioInput.disconnect();
        audioContext.close();
      });

      function drawWaveform() {
        analyser.getByteTimeDomainData(dataArray);

        canvasContext.clearRect(0, 0, waveformElement.width, waveformElement.height);
        canvasContext.beginPath();

        const height = waveformElement.height;

        for (let i = 0; i < dataArray.length; i++) {
          const x = (i / dataArray.length) * waveformElement.width;
          const y = (dataArray[i] / 128) * (height / 2);

          if (i === 0) {
            canvasContext.moveTo(x, y);
          } else {
            canvasContext.lineTo(x, y);
          }
        }

        canvasContext.strokeStyle = 'yellowgreen';
        canvasContext.lineWidth = 2;
        canvasContext.stroke();

        requestAnimationFrame(drawWaveform);
      }

      drawWaveform();
    })
    .catch((error) => {
      console.error('Error accessing microphone:', error);
    });
};

export const stopSpeechRecognition = () => {
  if (!recognition) {
    return;
  }

  recognition.stop();
};
