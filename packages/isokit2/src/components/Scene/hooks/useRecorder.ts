import { AudioEngine, Sound, VideoRecorder } from '@babylonjs/core';
import { useEffect } from 'react';

export function useRecorder(scene: any) {
  useEffect(() => {
    if (!scene) return;
    return;

    const music = new Sound('Music', 'http://localhost:3000/jazz.mp3', scene, null, {
      loop: true,
      autoplay: true,
    });

    const engine = scene.getEngine();
    console.log('engine ->', engine);

    if (VideoRecorder.IsSupported(engine)) {
      const audioTracks = [];
      const audioEngine = new AudioEngine();

      var outputNode = audioEngine.audioContext?.createMediaStreamDestination();
      if (outputNode) {
        audioEngine.masterGain.connect(outputNode);
        audioTracks.push(outputNode);
      }

      var recorder = new VideoRecorder(engine, {
        audioTracks: outputNode?.stream.getAudioTracks(),
      });
      recorder.startRecording();
    }
  }, [scene]);
}
