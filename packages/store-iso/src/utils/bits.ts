import { IBit } from '../types.iso';

export const calcVirtualDot = (bit?: IBit, currentTime = -1) => {
  if (!bit || currentTime < 0) {
    return '';
  }

  const { start, end } = bit;
  const deltaStart = Math.abs(currentTime - start!);
  const deltaEnd = Math.abs(currentTime - end!);

  if (deltaStart < 0.1) {
    return 'start';
  } else if (deltaEnd < 0.1) {
    return 'end';
  }

  return '';
};

export const findVirtualDotInBit = (bit?: IBit, currentTime = -1) => {
  let output = {
    bitId: '',
    virtualDotId: '',
    found: false,
  };

  if (!bit) {
    return output;
  }

  output.bitId = bit.id ?? '';
  output.virtualDotId = calcVirtualDot(bit, currentTime);
  output.found = output.virtualDotId !== '';

  return output;
};
