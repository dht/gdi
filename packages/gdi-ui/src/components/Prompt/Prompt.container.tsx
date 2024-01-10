import { FC, useCallback, useEffect } from 'react';
import { useSetState } from 'react-use';
import { addListener, invokeEvent } from 'shared-base';
import { Prompt } from './Prompt';
import { Flavour } from './Prompt.types';

const PROMPT_SHOW_EVENT = 'SHOW_PROMPT';
const PROMPT_SUBMIT_EVENT = 'PROMPT_RESPONSE';
const PROMPT_CANCEL_EVENT = 'PROMPT_CANCEL';

type PromptContainerProps = {
  formComponent?: FC<any>;
  isRtl?: boolean;
};

type PromptState = {
  show: boolean;
  title: string;
  ctaButtonText: string;
  hideBackdrop?: boolean;
  flavour: Flavour;
  params: Json;
};

export function PromptContainer(props: PromptContainerProps) {
  const { formComponent } = props;
  const [state, patchState] = useSetState<PromptState>({
    show: false,
    title: '',
    ctaButtonText: 'Ok',
    hideBackdrop: false,
    flavour: 'confirm',
    params: {},
  });

  useEffect(() => {
    const removeListener = addListener(PROMPT_SHOW_EVENT, (ev: any) => {
      patchState({
        ...ev,
        show: true,
      });
    });

    return () => {
      removeListener();
    };
  }, []);

  const onCta = useCallback((value?: any) => {
    invokeEvent(PROMPT_SUBMIT_EVENT, {
      value,
    });
    patchState({ show: false });
    return Promise.resolve(true);
  }, []);

  const onCancel = useCallback(() => {
    invokeEvent(PROMPT_CANCEL_EVENT, {
      id: 'prompt_cancel',
      title: 'Prompt Cancel',
    });

    patchState({ show: false });
  }, []);

  if (!state.show) {
    return null;
  }

  return <Prompt {...state} onCta={onCta} onCancel={onCancel} formComponent={formComponent} />;
}

export default PromptContainer;
