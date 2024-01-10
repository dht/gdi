import { selectors, useSelector } from '@gdi/store-base';
import { TagModal } from '@gdi/ui';

export type TagPickerContainerProps = {
  onCta: (value: string[]) => void;
  onCancel: () => void;
};

export function TagPickerContainer(props: TagPickerContainerProps) {
  const currentTags = useSelector(selectors.raw.$rawAppState).tags;
  const allTags = useSelector(selectors.options.$tags);

  return (
    <TagModal options={allTags} value={currentTags} onCta={props.onCta} onCancel={props.onCancel} />
  );
}

export default TagPickerContainer;
