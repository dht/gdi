import React, { useEffect, useState } from 'react';
import { Actions, Cta, TextArea, Wrapper } from './ImageParams.style';

export type ImageParamsProps = {
  promptRevised: string;
  callbacks: {
    useSuggestion: (text: string) => void;
  };
};

export function ImageParams(props: ImageParamsProps) {
  const { promptRevised, callbacks } = props;
  const [value, setValue] = useState(promptRevised);
  const isDisabled = value.length === 0;

  useEffect(() => {
    setValue(promptRevised);
  }, [promptRevised]);

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  function onCta() {
    callbacks.useSuggestion(value);
  }

  return (
    <Wrapper className='ImageParams-wrapper' data-testid='ImageParams-wrapper'>
      <TextArea
        value={value}
        placeholder='AI suggestion'
        readOnly={isDisabled}
        onChange={onChange}
      />
      <Actions>
        <Cta disabled={isDisabled} onClick={onCta}>
          Use Suggestion
        </Cta>
      </Actions>
    </Wrapper>
  );
}

export default ImageParams;
