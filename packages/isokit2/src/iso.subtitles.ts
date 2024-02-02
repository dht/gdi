import { Camera, UtilityLayerRenderer } from '@babylonjs/core';
import { TextBlock } from '@babylonjs/gui';
import { AdvancedDynamicTexture } from '@babylonjs/gui/2D';
import { scene } from './globals';

let subtitles: TextBlock;

export const addSubtitles = (camera: Camera) => {
  var utilLayer = new UtilityLayerRenderer(scene);

  utilLayer.setRenderCamera(camera);

  var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI(
    'UI',
    undefined,
    utilLayer.utilityLayerScene
  );

  subtitles = new TextBlock('subtitles', '');

  subtitles.color = 'white';
  subtitles.fontSize = 38;
  subtitles.fontFamily = 'Helvetica';
  subtitles.shadowColor = 'black';
  subtitles.shadowBlur = 3;
  subtitles.shadowOffsetX = 5;
  subtitles.shadowOffsetY = 5;
  subtitles.textHorizontalAlignment = TextBlock.HORIZONTAL_ALIGNMENT_CENTER;
  subtitles.textVerticalAlignment = TextBlock.VERTICAL_ALIGNMENT_BOTTOM;
  subtitles.top = -70;
  advancedTexture.addControl(subtitles);
};

let timeout: any;

export const changeSubtitles = (text: string) => {
  clearTimeout(timeout);
  subtitles.text = text;

  timeout = setTimeout(() => {
    subtitles.text = '';
  }, 6000);
};
