# Isokit

A wrapper for [Babylon.js](https://github.com/BabylonJS/Babylon.js) that allows you to use JSONs to load a scene.

## Installation

```sh
npm install --save isokit2
```

## Usage

### <BabylonScene />

Renders a scene from a JSON definition.

```tsx
import React, { useEffect } from 'react';
import { BabylonScene, useBoard, IBoardConfig } from 'isokit2';

export function MyComponent() {
  const isReady = useBoard(board);

  if (isReady) {
    return <div>Loading</div>;
  }

  return <BabylonScene />;
}

const board: IBoardConfig = {
  id: 'w-1',
  identifier: 'bag-1',
  name: 'Bag',
  backgroundType: 'transparent',
  externals: {
    x1: {
      id: 'x1',
      boardId: 'ville',
      identifier: 'external-1',
      url: '/bag.glb',
    },
  },
  cameras: {
    c1: {
      id: 'c1',
      boardId: 'ville',
      identifier: 'arc-1',
      type: 'arc',
      values: {
        radius: 7,
        alpha: 0,
        beta: 1.5,
        target: [0, 0, 0],
        lowerRadiusLimit: 0,
        upperRadiusLimit: 90,
        lowerBetaLimit: 0,
        upperBetaLimit: 90,
      },
    },
  },
  lights: {},
  microAnimations: {},
  grounds: {},
  packs: {},
  particles: {},
  sounds: {},
  sprites: {},
  videos: {},
  backgroundValues: {},
};

export default MyComponent;
```

### <ModelViewer />

Renders a 3D product with a HUD (Head-up display) and a movie-like timeline.

```tsx
import React from 'react';
import { ModelViewer, IHudConfig, IHudItem, IHudTimeline } from 'isokit2';

export function MyProduct() {
  return (
    <ModelViewer
      glbPath='/bag.glb'
      radius={7}
      alpha={0.2}
      beta={1.5}
      config={config}
      items={items}
      timeline={timeline}
    />
  );
}

const config: IHudConfig = {
  color: '#00ff15',
  height: 700,
  width: 1000,
};

const items: IHudItem[] = [
  {
    id: '1',
    text: 'Ergonomic back system',
    origin: [0, -250],
    textTop: 60,
    isLeft: true,
  },
  {
    id: '2',
    text: '20L capacity (+13" laptop)',
    origin: [100, -100],
    textTop: 200,
    isLeft: false,
  },
  {
    id: '3',
    text: 'Rain & dust protection',
    origin: [80, -60],
    textTop: 450,
    isLeft: false,
  },
  {
    id: '4',
    text: 'Durable materials',
    origin: [0, 80],
    textTop: 550,
    isLeft: true,
  },
];

const TS_START = 1000;

const timeline: IHudTimeline = [
  {
    id: '1',
    itemId: '1',
    millis: TS_START + 100,
    visibility: 'APPEAR',
  },
  {
    id: '2',
    itemId: '1',
    millis: TS_START + 3100,
    visibility: 'DISAPPEAR',
    cameraPosition: {
      alpha: 1,
    },
  },
  {
    id: '3',
    itemId: '2',
    millis: TS_START + 3600,
    visibility: 'APPEAR',
  },
  {
    id: '4',
    itemId: '2',
    millis: TS_START + 6600,
    visibility: 'DISAPPEAR',
    cameraPosition: {
      alpha: 0,
      beta: 0.5,
    },
  },
  {
    id: '5',
    itemId: '3',
    millis: TS_START + 7100,
    visibility: 'APPEAR',
  },
  {
    id: '6',
    itemId: '3',
    millis: TS_START + 10100,
    visibility: 'DISAPPEAR',
    cameraPosition: {
      alpha: 0.5,
      beta: 1.5,
    },
  },
  {
    id: '7',
    itemId: '4',
    millis: TS_START + 10600,
    visibility: 'APPEAR',
  },
  {
    id: '8',
    itemId: '4',
    millis: TS_START + 13600,
    visibility: 'DISAPPEAR',
    cameraPosition: {
      alpha: 0,
      beta: 1.5,
    },
  },
];

export default MyProduct;
```

- scenes
  - CRUD
  - navigation
- dots
  - start dot
  - end dot
- cameras
  - toggle
