import { listenToFlow, runFunction } from '@gdi/firebase';
import { IAssistant, actions, selectors } from '@gdi/store-base';
import { debounce } from 'lodash';
import { invokeEvent } from 'shared-base';
import { IFlowAdapter, IFlowAdapterConfig } from './adapter.types';
import { Json } from '../types';

export class FlowAdapter implements IFlowAdapter {
  private unlisten: any;

  constructor(public config: IFlowAdapterConfig, private store: any) {
    this.config = config;
  }

  dispatch(action: any) {
    this.store.dispatch(action);
  }

  loadFlow = async (flow: any) => {
    if (!flow) {
      return;
    }

    this.dispatch(actions.flowConfig.setAll(flow.flowConfig));
    this.dispatch(actions.flowApis.setAll(flow.flowApis));
    this.dispatch(actions.flowAssistants.setAll(flow.flowAssistants));
    this.dispatch(actions.flowNodes.setAll(flow.flowNodes));
    this.dispatch(actions.appState.patch({ promptParams: {} }));

    const response = await runFunction('/api/ai/flow', { flow });

    return response;
  };

  clearFlow() {
    this.dispatch(actions.flowConfig.setAll({ flowId: '', name: '', variables: {}, flowType: 'linear'})); // prettier-ignore
    this.dispatch(actions.flowApis.setAll({}));
    this.dispatch(actions.flowAssistants.setAll({}));
    this.dispatch(actions.flowNodes.setAll({}));
    this.dispatch(actions.appState.patch({ promptParams: {}, suggestedFileName: '' }));
  }

  onFlowUpdate = (data: any) => {
    const { flowState, nodeState } = data;
    const { status } = flowState;

    this.dispatch(actions.flowState.patch(flowState));

    for (let nodeId in nodeState) {
      const node = nodeState[nodeId];
      this.dispatch(actions.flowNodes.patch(nodeId, node));
    }

    if (status === 'done') {
      this.onFlowCompleted(data);
    }
  };

  onFlowUpdateDebounced = debounce(this.onFlowUpdate, 500);

  start = async (prompt: string, params: Json, meta: Json) => {
    this.startListening();

    const response = await runFunction('/api/ai/flow/prompt', {
      prompt,
      params,
      ...meta,
    });

    return response;
  };

  setAssistant = async (assistant: IAssistant) => {
    const response = await runFunction(
      '/api/ai/flow/dynamic',
      {
        assistant,
      },
      'PATCH'
    );

    return response;
  };

  onFlowCompleted = (flowRun: any) => {
    invokeEvent('flow/completed', { flowRun });

    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
  };

  startListening() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }

    this.unlisten = listenToFlow((event: any) => {
      this.onFlowUpdateDebounced(event);
    });
  }
}
