const gradients = [
  {
    name: 'Soft Peachy',
    colors: ['#ffbbcc', '#ffeebb'],
  },
];

export const randomLinearGradient = () => {
  const gradientIndex = Math.floor(Math.random() * gradients.length);
  const gradient = gradients[gradientIndex];
  const { colors } = gradient;
  const randomAngle = () => Math.floor(Math.random() * 360);
  return `linear-gradient(${randomAngle()}deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
};
