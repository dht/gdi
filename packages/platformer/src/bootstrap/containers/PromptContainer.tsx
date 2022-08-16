import { useCallback, useEffect } from 'react';
import { useSetState } from 'react-use';
import Prompt from '../components/Prompt/Prompt';
import { addListener, invokeEvent } from '../utils/events';

const PROMPT_SHOW_EVENT = 'SHOW_PROMPT';
const PROMPT_SUBMIT_EVENT = 'PROMPT_RESPONSE';
const PROMPT_CANCEL_EVENT = 'PROMPT_CANCEL';

type PromptContainerProps = {};

type PromptState = {
    show: boolean;
    title: string;
    submitButtonText: string;
    flavour: 'confirm' | 'input' | 'select';
    params: Json;
};

export function PromptContainer(_props: PromptContainerProps) {
    const [state, patchState] = useSetState<PromptState>({
        show: false,
        title: '',
        submitButtonText: 'Ok',
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

    const onSubmit = useCallback((value?: any) => {
        invokeEvent(
            PROMPT_SUBMIT_EVENT,
            { id: 'prompt_submit', title: 'Prompt Submit' },
            {
                value,
            }
        );
        patchState({ show: false });
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

    return <Prompt {...state} onSubmit={onSubmit} onCancel={onCancel} />;
}

export default PromptContainer;
