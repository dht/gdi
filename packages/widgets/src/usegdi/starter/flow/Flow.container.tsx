import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { Flow, useNodes } from '@gdi/ui';
import { useEffect } from 'react';
import { useSaga } from '../../../helpers/useSaga';

export type FlowContainerProps = {};

export function FlowContainer(props: FlowContainerProps) {
  const dispatch = useDispatch();
  const flowNodes = useSelector(selectors.base.$flowNodes);
  const flowState = useSelector(selectors.raw.$rawFlowState);

  useSaga('widgets.flow');

  useEffect(() => {
    dispatch({
      type: 'BOOTSTRAP_FLOW',
      nodes: flowNodes,
    });
  }, []);

  const data = useSelector(selectors.base.$flowVisual);

  const { nodes, edges, callbacks } = useNodes(data as any);

  return <Flow nodes={nodes} edges={edges} flowState={flowState} callbacks={callbacks} />;
}

export default FlowContainer;
