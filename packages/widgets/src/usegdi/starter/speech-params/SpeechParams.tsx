import React, { useState } from 'react';
import { Content, Cta, Gap, TextArea, Top, Wrapper } from './SpeechParams.style';
import { IDocument } from '@gdi/store-base';
import { invokeEvent } from 'shared-base';

export type SpeechParamsProps = {
  value: string;
  callbacks: {
    onChange: (ev: any) => void;
    onClear: () => void;
    onLoadDocument: () => void;
    onLoadAsset: () => void;
  };
};

export function SpeechParams(props: SpeechParamsProps) {
  const { value, callbacks } = props;

  function handleCursorPositionChange(event: any) {
    try {
      const cursorPosition = event.target.selectionStart;
      const cursorPositionEnd = event.target.selectionEnd;
      const text = event.target.value;
      const selection = text.substring(cursorPosition, cursorPositionEnd);

      if (selection) {
        invokeEvent('selection/change', { selection });
      }
    } catch (err: any) {
      console.log(err);
    }
  }

  return (
    <Wrapper
      className='SpeechParams-wrapper'
      data-testid='SpeechParams-wrapper'
      onSelect={handleCursorPositionChange}
    >
      <Top>
        <Cta onClick={callbacks.onLoadAsset}>Load asset</Cta>
        <Cta onClick={callbacks.onLoadDocument}>Load document</Cta>
        <Gap />
        <Cta onClick={callbacks.onClear}>Clear</Cta>
      </Top>
      <Content>
        <TextArea
          value={value}
          onChange={callbacks.onChange}
          placeholder='Load a document or type your text here, then select a portion of the text to start.'
        />
      </Content>
    </Wrapper>
  );
}

export default SpeechParams;
