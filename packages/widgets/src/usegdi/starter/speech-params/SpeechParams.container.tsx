import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo, useState } from 'react';
import { SpeechParams } from './SpeechParams';
import { useSaga } from '../../../helpers/useSaga';
import { useCustomEvent } from '@gdi/ui';

export type SpeechParamsContainerProps = {};

export function SpeechParamsContainer(_props: SpeechParamsContainerProps) {
  const dispatch = useDispatch();
  const document = useSelector(selectors.raw.$rawDocument);
  const [value, setValue] = useState('');

  useSaga('widgets.speechParams');

  const callbacks = useMemo(
    () => ({
      onChange: (ev: any) => {
        setValue(ev.target.value);
      },
      onClear: () => {
        setValue('');
      },
      onLoadDocument: () => {
        setValue(document.content);
      },
      onLoadAsset: () => {
        dispatch({
          type: 'GET_ASSET',
        });
      },
    }),
    [document]
  );

  useCustomEvent(
    'asset/import',
    (ev: any) => {
      const { data } = ev;
      setValue(data);
    },
    []
  );

  return <SpeechParams value={value} callbacks={callbacks} />;
}

export default SpeechParamsContainer;
