import { describe, it, expect } from '@jest/globals';
import { prepareFile } from './files.scene';
import { fileInfo, meta } from './files.scene.fixtures';
import { get } from 'lodash';

describe('prepare file', () => {
  it('scene', () => {
    const output = prepareFile(fileInfo, meta);
    const json = JSON.parse(atob(output.base64));

    expect(get(json, 'sceneBits.b07.attachmentUrl')).toBe('http://hud1');
    expect(get(json, 'sceneBits.b08.attachmentUrl')).toBe('http://image1');
    expect(get(json, 'sceneAudios.audio-main.url')).toBe('http://audio-main');
    expect(get(json, 'sceneAudios.audio-1.url')).toBe('http://audio1');
  });
});
