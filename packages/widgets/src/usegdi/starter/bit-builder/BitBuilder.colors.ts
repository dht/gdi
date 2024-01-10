import styled from 'styled-components';
import color from 'tinycolor2';

const baseGreen = color('rgb(85, 125, 85)');
const baseGold = color('gold');

export const green100 = baseGreen.setAlpha(0.2).toRgbString();
export const green200 = baseGreen.setAlpha(0.4).toRgbString();
export const green200s = baseGreen.setAlpha(0.4).toRgbString();
export const green400 = baseGreen.setAlpha(0.6).toRgbString();
export const green400s = baseGreen.setAlpha(0.6).toRgbString();
export const green800 = baseGreen.setAlpha(0.8).toRgbString();
export const green900 = baseGreen.setAlpha(1).toRgbString();
export const green900b = baseGreen.setAlpha(0.9).toRgbString();

export const gold100 = baseGold.setAlpha(0.2).toRgbString();
export const gold200 = baseGold.setAlpha(0.4).toRgbString();
export const gold200s = baseGold.setAlpha(0.4).toRgbString();
export const gold400 = baseGold.setAlpha(0.6).toRgbString();
export const gold400s = baseGold.setAlpha(0.6).toRgbString();
export const gold800 = baseGold.setAlpha(0.8).toRgbString();
export const gold900 = baseGold.setAlpha(1).toRgbString();
export const gold900b = baseGold.setAlpha(0.9).toRgbString();

export const Colors = styled.div`
  --green-100: ${green100};
  --green-200: ${green200};
  --green-200s: ${green200s};
  --green-300: ${green400};
  --green-300s: ${green400s};
  --green-800: ${green800};
  --green-900: ${green900};
  --green-900s: ${green900b};

  --gold-100: ${gold100};
  --gold-200: ${gold200};
  --gold-200s: ${gold200s};
  --gold-300: ${gold400};
  --gold-300s: ${gold400s};
  --gold-800: ${gold800};
  --gold-900: ${gold900};
  --gold-900s: ${gold900b};
`;
