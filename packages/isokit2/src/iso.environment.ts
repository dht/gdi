import {
  ColorCurves,
  ColorGradingTexture,
  DefaultRenderingPipeline,
  LensRenderingPipeline,
  MotionBlurPostProcess,
  PostProcess,
} from '@babylonjs/core';
import { IEnvironment, IEnvironmentMotionBlur, IShader } from '@gdi/store-iso';
import { get } from 'lodash';
import { scene } from './globals';
import { color4 } from './iso.utils';

export let allPipes: any = {
  main: null,
  blur: null,
  env: null,
  curve: null,
  lens: null,
  allShaders: [],
};

export const initEnvironment = (environment: Partial<IEnvironment>) => {
  if (!environment) {
    return;
  }

  const {
    bloom,
    chromaticAberration,
    colorCurve,
    createDefault,
    depthOfField,
    grain,
    imageProcessing,
    motionBlur,
    vignette,
    lensEffect,
    fxaa,
    glow,
    sharpen,
    shaders = [],
  } = environment;

  stopAll();

  if (createDefault) {
    startEnvironment(environment);
  }

  const pipeline = startPipeline(environment);

  if (bloom && bloom.enabled) {
    pipeline.bloomEnabled = true;
    pipeline.bloomKernel = get(bloom, 'kernel', 64);
    pipeline.bloomScale = get(bloom, 'scale', 0.5);
    pipeline.bloomThreshold = get(bloom, 'threshold', 0.9);
    pipeline.bloomWeight = get(bloom, 'weight', 0.15);
  }

  if (depthOfField && depthOfField.enabled) {
    pipeline.depthOfFieldEnabled = true;
    pipeline.depthOfField.blurLevel = get(depthOfField, 'blurLevel', 1);
    pipeline.depthOfField.fStop = get(depthOfField, 'fStop', 1.4);
    pipeline.depthOfField.focalLength = get(depthOfField, 'focalLength', 50);
    pipeline.depthOfField.focusDistance = get(depthOfField, 'focusDistance', 2000);
    pipeline.depthOfField.lensSize = get(depthOfField, 'lensSize', 50);
  }

  if (grain && grain.enabled) {
    pipeline.grainEnabled = true;
    pipeline.grain.intensity = get(grain, 'intensity', 30);
    pipeline.grain.animated = get(grain, 'animated', false);
  }

  if (chromaticAberration && chromaticAberration.enabled) {
    pipeline.chromaticAberrationEnabled = true;
    pipeline.chromaticAberration.aberrationAmount = get(chromaticAberration, 'aberrationAmount', 30); // prettier-ignore
    pipeline.chromaticAberration.adaptScaleToCurrentViewport = get(chromaticAberration, 'adaptScaleToCurrentViewport', false); // prettier-ignore
    pipeline.chromaticAberration.alphaMode = get(chromaticAberration, 'alphaMode', 0); // prettier-ignore
    pipeline.chromaticAberration.alwaysForcePOT = get(chromaticAberration, 'alwaysForcePOT', false); // prettier-ignore
    pipeline.chromaticAberration.enablePixelPerfectMode = get(chromaticAberration, 'enablePixelPerfectMode', false); // prettier-ignore
    pipeline.chromaticAberration.forceFullscreenViewport = get(chromaticAberration, 'forceFullscreenViewport', true); // prettier-ignore
    pipeline.chromaticAberration.radialIntensity = get(chromaticAberration, 'radialIntensity', 0.6); // prettier-ignore
    pipeline.chromaticAberration.direction.x = get(chromaticAberration, 'direction[0]', 0);
    pipeline.chromaticAberration.direction.y = get(chromaticAberration, 'direction[1]', 0);
    pipeline.chromaticAberration.direction.z = get(chromaticAberration, 'direction[2]', 0);
  }

  if (colorCurve && colorCurve.enabled) {
    const curve = startColorCurve();
    pipeline.imageProcessingEnabled = true;
    pipeline.imageProcessing.colorCurvesEnabled = true;

    curve.globalDensity = get(colorCurve, 'globalDensity', 0);
    curve.globalExposure = get(colorCurve, 'globalExposure', 0);
    curve.globalHue = get(colorCurve, 'globalHue', 30);
    curve.globalSaturation = get(colorCurve, 'globalSaturation', 0);

    curve.highlightsDensity = get(colorCurve, 'highlightsDensity', 0);
    curve.highlightsExposure = get(colorCurve, 'highlightsExposure', 0);
    curve.highlightsHue = get(colorCurve, 'highlightsHue', 30);
    curve.highlightsSaturation = get(colorCurve, 'highlightsSaturation', 0);

    curve.midtonesDensity = get(colorCurve, 'midtonesDensity', 0);
    curve.midtonesExposure = get(colorCurve, 'midtonesExposure', 0);
    curve.midtonesHue = get(colorCurve, 'midtonesHue', 30);
    curve.midtonesSaturation = get(colorCurve, 'midtonesSaturation', 0);

    curve.shadowsDensity = get(colorCurve, 'shadowsDensity', 0);
    curve.shadowsExposure = get(colorCurve, 'shadowsExposure', 0);
    curve.shadowsHue = get(colorCurve, 'shadowsHue', 30);
    curve.shadowsSaturation = get(colorCurve, 'shadowsSaturation', 0);

    pipeline.imageProcessing.colorCurves = curve;
  }

  if (imageProcessing && imageProcessing.enabled) {
    pipeline.imageProcessingEnabled = true;
    pipeline.imageProcessing.contrast = get(imageProcessing, 'contrast', 1);
    pipeline.imageProcessing.exposure = get(imageProcessing, 'exposure', 1);

    const colorGradingUrl = get(imageProcessing, 'colorGradingUrl', '');

    if (colorGradingUrl && imageProcessing.colorGradingEnabled) {
      pipeline.imageProcessing.colorGradingEnabled = true;
      const texture = new ColorGradingTexture(colorGradingUrl, scene);
      pipeline.imageProcessing.colorGradingTexture = texture;
    }
  }

  if (vignette && vignette.enabled) {
    pipeline.imageProcessingEnabled = true;

    pipeline.vignetteEnabled = true;
    pipeline.vignetteWeight = 0.5; // Adjust as needed (0 to 1)
    pipeline.vignetteStretch = 0.5; // Adjust as needed (0 to 1)

    pipeline.imageProcessing.vignetteEnabled = true;
    pipeline.imageProcessing.vignetteStretch = get(vignette, 'stretch', 2);
    pipeline.imageProcessing.vignetteWeight = get(vignette, 'weight', 10);
    pipeline.imageProcessing.vignetteColor = color4(get(vignette, 'color', [0, 0, 0, 0] as any));
  }

  if (sharpen && sharpen.enabled) {
    pipeline.sharpenEnabled = true;
    pipeline.sharpenEdgeAmount = get(sharpen, 'edgeAmount', 0.3);
    pipeline.sharpenColorAmount = get(sharpen, 'colorAmount', 1);
  }

  if (glow && glow.enabled) {
    pipeline.glowLayerEnabled = true;
    pipeline.glowLayer.intensity = get(glow, 'intensity', 1);
    pipeline.glowLayer.blurKernelSize = get(glow, 'kernel', 64);
  }

  if (fxaa && fxaa.enabled) {
    pipeline.fxaaEnabled = true;
    pipeline.fxaa.samples = get(fxaa, 'samples', 1);
    pipeline.fxaa.adaptScaleToCurrentViewport = get(fxaa, 'adaptScaleToCurrentViewport', false);
  }

  if (lensEffect && lensEffect.enabled) {
    const lens = startLensProcessing();
    lens.setChromaticAberration(get(lensEffect, 'chromaticAberration', 0));
    lens.setEdgeBlur(get(lensEffect, 'edgeBlur', 0));
    lens.setGrainAmount(get(lensEffect, 'grainAmount', 0));
    lens.setEdgeDistortion(get(lensEffect, 'distortion', 0));
    // lens.setFocusDepth(get(lensEffect, 'dofFocusDistance', 0));
    lens.setAperture(get(lensEffect, 'dofAperture', 0));
    lens.setDarkenOutOfFocus(get(lensEffect, 'dofDarken', 0));
    lens.setHighlightsGain(get(lensEffect, 'dofGain', 0));
    lens.setHighlightsThreshold(get(lensEffect, 'dofThreshold', 0));

    if (get(lensEffect, 'dofPentagon')) {
      lens.enablePentagonBokeh();
    } else {
      lens.disablePentagonBokeh();
    }

    if (get(lensEffect, 'blurNoise')) {
      lens.enableNoiseBlur();
    } else {
      lens.disableNoiseBlur();
    }
  }

  if (motionBlur && motionBlur.enabled) {
    const blur = startMotionBlur(motionBlur);
  }

  for (let shader of shaders) {
    if (!shader.enabled) {
      continue;
    }

    startShader(shader);
  }

  return pipeline;
};

export const startEnvironment = (environment: Partial<IEnvironment>) => {
  stopEnvironment();

  allPipes.env = scene.createDefaultEnvironment({
    createGround: get(environment, 'createGround', false),
    createSkybox: get(environment, 'createSkybox', false),
  });

  scene.environmentIntensity = get(environment, 'skyboxIntensity', 1);

  return allPipes.env;
};

export const stopEnvironment = () => {
  if (allPipes.env) {
    allPipes.env.dispose();
  }
};

export const startPipeline = (environment: Partial<IEnvironment>) => {
  const { hdr } = environment;
  const pipeline = new DefaultRenderingPipeline('default', hdr, scene, scene.cameras);
  allPipes.main = pipeline;
  return allPipes.main;
};

export const startColorCurve = () => {
  const curve = new ColorCurves();
  allPipes.curve = curve;
  return curve;
};

export const startMotionBlur = (motionBlur: Partial<IEnvironmentMotionBlur>) => {
  stopMotionBlur();

  const { intensity = 1 } = motionBlur;
  allPipes.blur = new MotionBlurPostProcess('mb', scene, intensity, scene.activeCamera);
};

export const stopMotionBlur = () => {
  if (allPipes.blur) {
    allPipes.blur.dispose();
  }
};

export const startLensProcessing = () => {
  stopLensProcessing();

  const lens = new LensRenderingPipeline(
    'lens',
    {
      edge_blur: 0.0,
      chromatic_aberration: 0.0,
      distortion: 0.0,
      dof_focus_distance: 50,
      dof_aperture: 6.0, // set this very high for tilt-shift effect
      grain_amount: 1.0,
      dof_pentagon: true,
      dof_gain: 1.0,
      dof_threshold: 1.0,
      dof_darken: 0.25,
    },
    scene,
    1,
    [scene.activeCamera as any]
  );

  allPipes.lens = lens;

  return lens;
};

export const stopLensProcessing = () => {
  if (allPipes.lens) {
    allPipes.lens.dispose();
  }
};

export const startShader = (shader: IShader) => {
  const { id, path, params = {}, samplers, options, enabled } = shader;

  const postProcess = new PostProcess(
    id,
    path,
    Object.keys(params),
    samplers,
    options,
    scene.activeCamera
  );

  allPipes.shaders.push(postProcess);

  postProcess.onApply = function (effect) {
    Object.keys(params).forEach((param) => {
      const value = params[param];
      if (Array.isArray(value)) {
        effect.setFloat2(param, value[0], value[1]);
      } else {
        effect.setFloat(param, value);
      }
    });
  };
};

export const stopShaders = () => {
  allPipes.allShaders.forEach((p: any) => {
    p.dispose();
  });
};

export const stopAll = () => {
  if (allPipes.main) {
    allPipes.main.dispose();
  }

  if (allPipes.blur) {
    allPipes.blur.dispose();
  }

  if (allPipes.env) {
    allPipes.env.dispose();
  }

  if (allPipes.lens) {
    allPipes.lens.dispose();
  }

  stopShaders();
};
