import { selectors, useSelector } from '@gdi/store-base';
import { TagModal } from '@gdi/ui';

export type TagPickerContainerProps = {
  onCta: (value: string[]) => void;
  onCancel: () => void;
};

export function TagPickerContainer(props: TagPickerContainerProps) {
  const currentTags = useSelector(selectors.raw.$rawAppState).tags;
  const allTags = useSelector(selectors.options.$basicTags);

  return (
    <TagModal
      options={allTags}
      value={currentTags}
      onCta={props.onCta}
      onCancel={props.onCancel}
      placeholder='Pick or create global tags...'
      isMulti={true}
    >
      Every time you generate &amp; save a new asset (sound, image, text, etc.), these tags will be
      automatically applied to it:
    </TagModal>
  );
}

export default TagPickerContainer;
