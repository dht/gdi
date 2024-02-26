const gradientsLightMode = [
  {
    name: 'Soft Peachy',
    colors: ['#ffbbcc', '#ffeebb'],
  },
];

const gradientsDarkMode = [
  {
    name: 'Dark Gray',
    colors: ['#333', '#666'],
  },
];

export const randomLinearGradient = (darkMode?: boolean) => {
  const gradients = darkMode ? gradientsDarkMode : gradientsLightMode;
  const gradientIndex = Math.floor(Math.random() * gradients.length);
  const gradient = gradients[gradientIndex];
  const { colors } = gradient;
  const randomAngle = () => Math.floor(Math.random() * 360);
  return `linear-gradient(${randomAngle()}deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
};
