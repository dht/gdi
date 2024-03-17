import { useState } from 'react';
import { useKey } from 'react-use';
import TagPicker from '../TagPicker/TagPicker';
import { Actions, Cta, P, Wrapper } from './TagModal.style';

export type TagModalProps = {
  value: string[];
  options: Json[];
  onCta: (value: string[]) => void;
  onCancel: () => void;
  isMulti?: boolean;
  placeholder?: string;
  children: React.ReactNode;
};

export function TagModal(props: TagModalProps) {
  const { value, options, isMulti, placeholder } = props;
  const [tags, setTags] = useState<string[]>([...value]);

  useKey(
    'Enter',
    (ev) => {
      if (!ev.metaKey) {
        return;
      }

      props.onCta(tags);
    },
    {},
    [tags]
  );

  return (
    <Wrapper className='TagModal-wrapper' data-testid='TagModal-wrapper'>
      <P>{props.children}</P>
      <TagPicker
        value={tags}
        options={options}
        onChange={setTags}
        isMulti={isMulti}
        placeholder={placeholder}
        autoFocus
      />
      <Actions>
        <Cta className='link' onClick={props.onCancel}>
          Cancel
        </Cta>
        <Cta className='link' onClick={() => props.onCta([])}>
          Clear
        </Cta>
        <Cta onClick={() => props.onCta(tags)}>Apply</Cta>
      </Actions>
    </Wrapper>
  );
}

export default TagModal;
