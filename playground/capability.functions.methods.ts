export const toolsMethods: any = {
  getCurrentWeather: async (params: any) => {
    const { location, unit = 'c' } = params;

    if (location.startsWith('San Francisco')) {
      return {
        weather: 'sunny',
        temperature: unit === 'c' ? 30 : 86,
        unit,
      };
    } else {
      return {
        weather: 'rainy',
        temperature: unit === 'c' ? 15 : 59,
        unit,
      };
    }
  },
  getNickname: async (params: any) => {
    const { location } = params;

    if (location.startsWith('San Francisco')) {
      return {
        nickname: 'The Golden City',
      };
    } else {
      return {
        nickname: 'The Windy City',
      };
    }
  },
};
