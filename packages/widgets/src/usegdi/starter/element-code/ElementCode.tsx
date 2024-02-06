import React, { useState } from 'react';
import { Actions, Content, Cta, Gap, Wrapper } from './ElementCode.style';
import { EditorCode } from '@gdi/ui';

export type ElementCodeProps = {
  code: string;
  verb: 'Save' | 'Add';
  allowDelete?: boolean;
  callbacks: {
    onCodeChange: (code?: string) => void;
    onSave: () => void;
    onDelete: () => void;
    onCancel: () => void;
  };
};

export function ElementCode(props: ElementCodeProps) {
  const { code = '', verb = 'Add', allowDelete, callbacks } = props;

  return (
    <Wrapper className='ElementCode-wrapper' data-testid='ElementCode-wrapper'>
      <Content>
        <EditorCode value={code} onChange={callbacks.onCodeChange} language='json' />
      </Content>
      <Actions>
        {allowDelete && (
          <Cta onClick={callbacks.onDelete} className='link'>
            Delete
          </Cta>
        )}
        <Gap />

        <Cta onClick={callbacks.onCancel} className='link'>
          Cancel
        </Cta>
        <Cta onClick={() => callbacks.onSave()}>{verb} Element</Cta>
      </Actions>
    </Wrapper>
  );
}

export default ElementCode;
