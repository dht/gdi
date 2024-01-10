import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import AssistantsPanel from './AssistantsPanel';
import { useMount } from 'react-use';
import { useEffect } from 'react';

export type AssistantsPanelContainerProps = {};

export function AssistantsPanelContainer(_props: AssistantsPanelContainerProps) {
  const dispatch = useDispatch();
  const options = useSelector(selectors.options.$assistants);
  const assistant = useSelector(selectors.single.$assistant);

  useMount(() => {
    if (!assistant) {
      return;
    }

    dispatch({
      type: 'FLOW_CHANGE_ASSISTANT',
      assistantId: assistant.id,
    });
  });

  const onChange = (assistantId: string) => {
    dispatch(actions.currentIds.patch({ assistantId }));

    dispatch({
      type: 'FLOW_CHANGE_ASSISTANT',
      assistantId,
    });
  };

  return <AssistantsPanel assistant={assistant} options={options} onChange={onChange} />;
}

export default AssistantsPanelContainer;
