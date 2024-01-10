export const sampleData = {
  config: {
    color: '#00ff15',
    height: 650,
    width: 700,
    radius: 12,
    alpha: 0.2,
    beta: 1.5,
    glbPath: 'https://raw.githubusercontent.com/dht-starter/main/public/scenes/car3.glb',
  },
  items: [
    {
      id: '1',
      text: 'Quantum-Singularity Hyperdrive',
      origin: [0, -250],
      textTop: 60,
      isLeft: true,
    },
    {
      id: '2',
      text: 'Holographic Interface, Zero-Gravity Seating',
      origin: [100, -100],
      textTop: 200,
      isLeft: false,
    },
    {
      id: '3',
      text: 'Adaptive Nano-Fluid Damper',
      origin: [0, 80],
      textTop: 550,
      isLeft: true,
    },
  ],
  timeline: [
    {
      id: '1',
      itemId: '1',
      millis: 0,
      visibility: 'APPEAR',
    },
    {
      id: '2',
      itemId: '1',
      millis: 2600,
      visibility: 'DISAPPEAR',
    },
    {
      id: '3',
      itemId: '2',
      millis: 3000,
      visibility: 'APPEAR',
    },
    {
      id: '4',
      itemId: '2',
      millis: 5600,
      visibility: 'DISAPPEAR',
    },
    {
      id: '5',
      itemId: '3',
      millis: 6600,
      visibility: 'APPEAR',
    },
    {
      id: '6',
      itemId: '3',
      millis: 9600,
      visibility: 'DISAPPEAR',
    },
  ],
};
