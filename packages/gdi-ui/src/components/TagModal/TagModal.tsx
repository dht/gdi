import { useState } from 'react';
import { useKey } from 'react-use';
import TagPicker from '../TagPicker/TagPicker';
import { Actions, Cta, Note, P, Wrapper } from './TagModal.style';

export type TagModalProps = {
  value: string[];
  options: Json[];
  onCta: (value: string[]) => void;
  onCancel: () => void;
};

export function TagModal(props: TagModalProps) {
  const { value, options } = props;
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
      <P>
        Every time you generate &amp; save a new asset (sound, image, text, etc.), these tags will
        be automatically applied to it:
      </P>
      <TagPicker value={tags} options={options} onChange={setTags} />
      <Note>
        <span>Note: </span>
        Tags as 'project-website' are treated specially
      </Note>
      <Actions>
        <Cta className='link' onClick={props.onCancel}>
          Cancel
        </Cta>
        <Cta onClick={() => props.onCta(tags)}>Apply</Cta>
      </Actions>
    </Wrapper>
  );
}

export default TagModal;
