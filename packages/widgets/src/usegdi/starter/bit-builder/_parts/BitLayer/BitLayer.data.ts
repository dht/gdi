export const sampleDataHud = {
  id: 'modelz',
  layerType: 'hud',
  config: {
    id: 'hud_tour',
    type: 'hud',
    color: '#00ff15',
    height: 650,
    width: 700,
    initialPosition: {
      radius: 17,
      alpha: 345,
      beta: 83,
    },
  },
  items: [
    {
      id: '1',
      text: 'Quantum-Singularity Hyperdrive',
      tsStart: 0,
      tsEnd: 2600,
      origin: [0, -250],
      textTop: 0,
      isLeft: true,
      cameraValues: {
        alpha: -67.77,
        beta: 37.1,
        radius: 14,
      },
    },
    {
      id: '2',
      text: 'Adaptive Nano-Fluid Seismic Engine',
      tsStart: 3000,
      tsEnd: 5300,
      origin: [50, -100],
      textTop: 400,
      isLeft: false,
      cameraValues: {
        alpha: 95.88,
        beta: 85.1,
        radius: 14,
      },
    },
    {
      id: '3',
      text: 'Holographic Interface, Zero-Gravity Seating',
      tsStart: 6600,
      tsEnd: 9600,
      origin: [-30, -50],
      textTop: 450,
      isLeft: true,
      cameraValues: {
        alpha: -152.76,
        beta: 68.23,
        radius: 14,
      },
    },
  ],
};

export const sampleDataTxt = {
  id: 'modelz',
  layerType: 'txt',
  config: {
    header: 'MODELZ',
    headerFont: {
      fontFamily: 'Blanka',
      fontSize: '100rem',
    },
    subtext: '== Get yours today ==',
    subtextFont: {
      fontFamily: 'Ailerons',
      fontSize: '26rem',
    },
    smallPrint: `Regular maintenance and servicing of the modelz hovercraft are essential for optimal
   performance and safety. VR training on Vision Ultra is required to operate a hovercraft in
   the case of engine failure.`,
    smallPrintFont: {
      fontFamily: 'Syncopate',
      fontSize: '11rem',
    },
  },
};
