export const resolutions = {
  mobile: {
    id: 'mobile',
    screenWidth: 375,
    screenHeight: 720,
    minWidth: 0,
    maxWidth: 600,
    containerWidth: 0,
    order: 0,
  },
  tablet: {
    id: 'tablet',
    screenWidth: 720,
    screenHeight: 1280,
    minWidth: 600,
    maxWidth: 1100,
    containerWidth: 720,
    order: 1,
  },
  '720p': {
    id: '720p',
    screenWidth: 1280,
    screenHeight: 720,
    minWidth: 1100,
    maxWidth: 1300,
    containerWidth: 1024,
    order: 2,
  },
  HD: {
    id: 'HD',
    screenWidth: 1360,
    screenHeight: 760,
    minWidth: 1300,
    maxWidth: 1440,
    containerWidth: 1280,
    order: 3,
  },
  'HD+': {
    id: 'HD+',
    screenWidth: 1600,
    screenHeight: 900,
    minWidth: 1440,
    maxWidth: 1700,
    containerWidth: 1360,
    order: 4,
  },
  '1080p': {
    id: '1080p',
    screenWidth: 1920,
    screenHeight: 1080,
    minWidth: 1700,
    maxWidth: 2000,
    containerWidth: 1600,
    isDefault: true,
    order: 5,
  },
  '2k': {
    id: '2k',
    screenWidth: 2560,
    screenHeight: 1440,
    minWidth: 2000,
    maxWidth: 2600,
    containerWidth: 1920,
    order: 6,
  },
  '4k': {
    id: '4k',
    screenWidth: 3840,
    screenHeight: 2160,
    minWidth: 2600,
    containerWidth: 2560,
    order: 7,
  },
  '8k': {
    id: '8k',
    screenWidth: 7680,
    screenHeight: 4320,
    minWidth: 3600,
    containerWidth: 4000,
    order: 8,
  },
};

export const findResolution = (width: number) => {
  return Object.keys(resolutions)
    .reverse()
    .find((key) => {
      const breakpoint = resolutions[key as keyof typeof resolutions];
      return width >= breakpoint.screenWidth;
    });
};
