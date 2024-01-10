import React from 'react';
import { Wrapper } from './Midi.style';
// import 'html-midi-player';

export type MidiProps = {};

export function Midi(_props: MidiProps) {
  return (
    <Wrapper className='Midi-wrapper' data-testid='Midi-wrapper'>
      {/* <midi-player src='/midi/jazz.mid' sound-font></midi-player> */}
    </Wrapper>
  );
}

export default Midi;
