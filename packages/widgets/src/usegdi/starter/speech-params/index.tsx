import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const SpeechParamsParams = lazy(() => import('./SpeechParams.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.speech-params',
  name: 'SpeechParamsParams',
  description: 'SpeechParamsParams',
  component: (instance: IElement) => <SpeechParamsParams {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
