import React from 'react';
import { Input, Key, Wrapper } from './CommandPalette.style';

export type CommandPaletteProps = {};

export function CommandPalette(_props: CommandPaletteProps) {
  return (
    <Wrapper className='CommandPalette-wrapper' data-testid='CommandPalette-wrapper'>
      <Input placeholder='Palette...' />
      <Key>⌘</Key>
      <Key>K</Key>
    </Wrapper>
  );
}

const commandKeySymbol = '⌘';

export default CommandPalette;
