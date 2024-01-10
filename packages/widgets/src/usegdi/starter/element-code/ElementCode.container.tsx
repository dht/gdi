import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo, useState } from 'react';
import ElementCode from './ElementCode';

export type ElementCodeContainerProps = {};

export function ElementCodeContainer(props: ElementCodeContainerProps) {
  const dispatch = useDispatch();
  const elementEdit = useSelector(selectors.iso.base.$elementEdit);
  const [code, setCode] = useState(elementEdit?.code);

  const callbacks = useMemo(
    () => ({
      onDelete: () => {
        dispatch({
          type: 'SCENE_ELEMENT',
          verb: 'remove',
          payload: elementEdit,
        });
      },
      onToggle: (id: string) => {
        dispatch({
          type: 'SCENE_ELEMENT',
          verb: 'toggle',
          id,
        });
      },
      onCancel: () => {
        dispatch(
          actions.sceneCurrentIds.patch({
            editId: '',
            modalId: '',
          })
        );
      },
      onSave: () => {
        dispatch({
          type: 'SCENE_ELEMENT',
          verb: 'editSave',
          payload: {
            ...elementEdit,
            code,
          },
        });
      },
      onCodeChange: (value?: string) => {
        setCode(value ?? '');
      },
    }),
    [elementEdit, code]
  );

  return <ElementCode verb='Save' allowDelete code={code} callbacks={callbacks} />;
}

export default ElementCodeContainer;
