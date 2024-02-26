import React from 'react';
import { Input, Key, Wrapper } from './MuxCommandPalette.style';

export type MuxCommandPaletteProps = {};

export function MuxCommandPalette(_props: MuxCommandPaletteProps) {
  return (
    <Wrapper
      className='MuxCommandPalette-wrapper'
      data-testid='MuxCommandPalette-wrapper'
    >
      <Input placeholder='Palette...' />
      <Key>⌘</Key>
      <Key>K</Key>
    </Wrapper>
  );
}

const commandKeySymbol = '⌘';

export default MuxCommandPalette;
