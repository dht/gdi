import React, { useEffect, useState } from 'react';
import { Actions, Cta, H2, TextArea, Wrapper } from './ImageParams.style';
import { formDefaults, forms } from '../../../_definitions/forms';
import { Form } from '@gdi/ui';

export type ImageParamsProps = {
  imageParams: Json;
  promptRevised: string;
  allOptions: Json;
  callbacks: {
    onParametersChange: (parameters: Json) => void;
    useSuggestion: (text: string) => void;
  };
};

export function ImageParams(props: ImageParamsProps) {
  const { imageParams, promptRevised, allOptions, callbacks } = props;
  const [value, setValue] = useState(promptRevised);
  const isDisabled = value.length === 0;

  useEffect(() => {
    setValue(promptRevised);
  }, [promptRevised]);

  function onChange(_change: Json, allData: Json) {
    callbacks.onParametersChange(allData);
  }

  function onCta() {
    callbacks.useSuggestion(value);
  }

  return (
    <Wrapper className='ImageParams-wrapper' data-testid='ImageParams-wrapper'>
      <H2>Image parameters</H2>
      <Form
        config={forms.imageParams as any}
        allOptions={allOptions}
        data={imageParams}
        onChange={onChange}
      />
    </Wrapper>
  );
}

export default ImageParams;
