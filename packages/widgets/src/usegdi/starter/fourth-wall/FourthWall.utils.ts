import * as GUI from '@babylonjs/gui';

let advancedTexture: any, decal: any;

export function initGui(scene: any) {
  advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI', scene);
}

export function setDecal(value: any) {
  decal = value;
}

export function addSlider(
  text: string,
  initialValue: number,
  property: string,
  range: Json,
  callback: any
) {
  var panel = new GUI.StackPanel();
  panel.width = '220px';
  panel.height = '220px';
  panel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
  panel.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
  advancedTexture.addControl(panel);

  var header = new GUI.TextBlock();
  header.text = 'normal';
  header.height = '30px';
  header.color = 'white';
  panel.addControl(header);

  const row = new GUI.StackPanel();
  row.isVertical = false;

  panel.addControl(row);

  ['x', 'y', 'z'].forEach((axis) => {
    var slider = new GUI.Slider();
    slider.minimum = 0;
    slider.maximum = 2 * Math.PI;
    slider.value = 0;
    slider.isVertical = true;
    slider.height = '180px';
    slider.width = '20px';
    slider.onValueChangedObservable.add(function (value) {});
    row.addControl(slider);
  });
}
