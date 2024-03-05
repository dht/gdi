import { actions, selectors } from '@gdi/store-base';
import { actions as actionsIso, selectors as selectorsIso } from '@gdi/store-iso';
import { playAmbience, playSound, stopAmbience, stopSound, toast } from '@gdi/ui';
import {
  ArcRotateCamera,
  Vector3,
  addElements,
  applyConfig,
  changeMouth,
  createSpeakingStone,
  moveArc,
  moveSpeakingStone,
  addConnectors,
  updateConnector,
  updateConnectors,
} from 'isokit2';
import { call, cancel, delay, fork, put, select, takeEvery, takeLatest } from 'saga-ts';
import { customEvenChannel } from '../../../helpers/channels/channel.customEvent';
import { DataItem, mouthShapesBackMap, mouthShapesMap } from '../babylon/utils/phonetics';
import {
  Animation,
  Color3,
  CreateGreasedLine,
  MeshBuilder,
  PointLight,
  StandardMaterial,
} from '@babylonjs/core';
import { connectors, elements, spheres } from './ExpressDebugger.data';

export function* onSceneReady(ev: any) {
  const scene: any = ev.data.scene;

  scene.createDefaultEnvironment(true);

  const sun = new PointLight('sun', new Vector3(0, 100, 0), scene);
  sun.intensity = 1;

  //var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2, 12, BABYLON.Vector3.Zero(), scene);
  var camera = new ArcRotateCamera(
    'camera1',
    Math.PI / 4,
    Math.PI / 4,
    15,
    new Vector3(0, 0, 0),
    scene
  );
  var light = new PointLight('omni', new Vector3(50, 200, 0), scene);
  light.specular = new Color3(0, 1, 0);

  camera.attachControl();
  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  // This attaches the camera to the canvas
  addElements(elements);
  addConnectors(connectors);

  const sphere1 = scene.meshes.find((mesh: any) => mesh.id === 's1');
  const sphere2 = scene.meshes.find((mesh: any) => mesh.id === 's2');

  var transferLight = function () {
    var frameRate = 10;
    var animate = new Animation(
      'lightTransfer',
      'emissiveColor',
      frameRate,
      Animation.ANIMATIONTYPE_COLOR3,
      Animation.ANIMATIONLOOPMODE_CYCLE
    );

    var keys = [];
    keys.push({ frame: 0, value: new Color3(1, 0, 0) });
    keys.push({ frame: frameRate, value: new Color3(0, 0, 0) });
    animate.setKeys(keys);

    sphere1.animations = [];
    sphere1.animations.push(animate);

    scene.beginAnimation(sphere1, 0, frameRate, false, 1, () => {
      sphere2.material.emissiveColor = new Color3(1, 0, 0); // Light reaches second sphere
    });
  };

  // Start the light transfer animation on a loop
  setInterval(transferLight, 2000); // Adjust time as needed

  var radius = 4; // Radius of the circle
  var speed = 0.01; // Speed of the animation

  var angle = 0;

  scene.onBeforeRenderObservable.add(() => {
    angle += speed * scene.getAnimationRatio();

    // Calculate new positions for the spheres
    var x1 = radius * Math.cos(angle);
    var z1 = radius * Math.sin(angle);
    var x2 = -radius * Math.cos(angle);
    var z2 = -radius * Math.sin(angle);

    // Set positions
    sphere1.position.x = x1;
    sphere1.position.z = z1;
    sphere2.position.x = x2;
    sphere2.position.z = z2;

    updateConnectors(connectors);
  });

  return scene;
}

export function* root() {
  let channel;

  channel = customEvenChannel('scene/ready');
  yield takeEvery(channel, onSceneReady);
}

export const saga = {
  id: 'widgets.express-debugger',
  type: 'component',
  root: root,
  trigger: {
    eventNames: ['scene/ready'],
  },
};
