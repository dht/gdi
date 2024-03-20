import { Checkbox, JsonEditor } from '@gdi/ui';
import { clone } from 'lodash';
import { useSetState } from 'react-use';
import { Actions, Content, Cta, Panel, PanelActions, Wrapper } from './ContactMerge.style';

export type ContactMergeProps = {
  items: Json[];
  onCancel: () => void;
  onCta: (value: Json) => void;
};

export function ContactMerge(props: ContactMergeProps) {
  const { items } = props;
  const [state, patchState] = useSetState(clone(items));
  const [shouldDelete, patchShouldDelete] = useSetState({
    del1: true,
    del2: true,
    del3: true,
  });

  function onComplete() {
    props.onCta({
      state,
      ...shouldDelete,
    });
  }

  const onChange = (index: number) => (value: Json) => {
    patchState({ [index]: value } as any);
  };

  function renderItem(item: Json, index: number) {
    const { id } = item;

    const value = (shouldDelete as any)[`del${index}`];

    return (
      <Panel key={id}>
        <JsonEditor value={state[index]} onChange={onChange(index)} />
        <PanelActions className={`actions-${index}`}>
          <Checkbox
            id={`should-delete-${index}`}
            value={value}
            label='Should delete'
            onChange={(val) => {
              const key = `del${index}`;
              patchShouldDelete({ [key]: val } as any);
            }}
          />
        </PanelActions>
      </Panel>
    );
  }

  function renderItems() {
    return items.map((item, index) => renderItem(item, index));
  }

  return (
    <Wrapper className='ContactMerge-wrapper' data-testid='ContactMerge-wrapper'>
      <Content>{renderItems()}</Content>
      <Actions>
        <Cta className='link' onClick={props.onCancel}>
          Cancel
        </Cta>
        <Cta className='purple' onClick={onComplete}>
          Complete Merge
        </Cta>
      </Actions>
    </Wrapper>
  );
}

export default ContactMerge;
