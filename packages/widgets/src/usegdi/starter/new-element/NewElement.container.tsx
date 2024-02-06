import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { get } from 'lodash';
import { useMemo, useState } from 'react';
import { NewElement } from './NewElement';
import { allTemplates, getTemplateCode } from './templates';
import { useKey } from 'react-use';

export type NewElementContainerProps = {
  allowEdit?: boolean;
};

export function NewElementContainer(props: NewElementContainerProps) {
  const { allowEdit } = props;
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.iso.raw.$rawSceneCurrentIds);
  const allOptions = useSelector(selectors.iso.options.$elementTypes);
  const { familyId, elementTypeId } = currentIds;
  const [code, setCode] = useState(getTemplateCode(familyId, elementTypeId));

  const callbacks = useMemo(
    () => ({
      onSave: () => {
        dispatch({
          type: 'SCENE_ELEMENT',
          verb: 'create',
          payload: {
            codeRaw: code,
            familyId,
            elementTypeId,
          },
        });
      },
      onCodeChange: (value?: string) => {
        setCode(value ?? '');
      },
      onDelete: () => {},
      onFamilyChange: (id: string) => {
        dispatch(actions.sceneCurrentIds.patch({ familyId: id }));
        const template = get(allTemplates, [id, '_default']);
        setCode(JSON.stringify(template ?? {}, null, 2));
      },
      onTypeChange: (id: string) => {
        dispatch(actions.sceneCurrentIds.patch({ elementTypeId: id }));
        const template = get(allTemplates, [familyId, id]);
        setCode(JSON.stringify(template ?? {}, null, 2));
      },
      onCancel: () => {
        dispatch(actions.sceneCurrentIds.patch({ modalId: '' }));
        setCode('');
      },
    }),
    [familyId, code]
  );

  useKey('Escape', callbacks.onCancel);

  return (
    <NewElement
      code={code}
      familyId={familyId}
      elementTypeId={elementTypeId}
      allOptions={allOptions}
      callbacks={callbacks}
    />
  );
}

export default NewElementContainer;
