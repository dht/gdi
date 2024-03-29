import { Camera, UtilityLayerRenderer } from '@babylonjs/core';
import { TextBlock } from '@babylonjs/gui';
import { AdvancedDynamicTexture } from '@babylonjs/gui/2D';
import { scene } from './globals';
import { isMobile } from './utils/utils.mobile';

let subtitles: TextBlock;

export const addSubtitles = (camera: Camera) => {
  var utilLayer = new UtilityLayerRenderer(scene);

  utilLayer.setRenderCamera(camera);

  var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI(
    'UI',
    undefined,
    utilLayer.utilityLayerScene
  );

  const mobile = isMobile();

  subtitles = new TextBlock('subtitles', '');

  subtitles.color = 'white';
  subtitles.fontSize = mobile ? 19 : 38;
  subtitles.fontFamily = 'Helvetica';
  subtitles.shadowColor = 'black';
  subtitles.shadowBlur = mobile ? 2 : 3;
  subtitles.shadowOffsetX = mobile ? 3 : 5;
  subtitles.shadowOffsetY = mobile ? 3 : 5;
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
