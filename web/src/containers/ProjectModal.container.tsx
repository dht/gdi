import { selectors, useSelector } from '@gdi/store-base';
import { TagModal } from '@gdi/ui';

export type ProjectModalContainerProps = {
  onCta: (value: string[]) => void;
  onCancel: () => void;
};

export function ProjectModalContainer(props: ProjectModalContainerProps) {
  const projectId = useSelector(selectors.raw.$rawCurrentIds).projectId;
  const allTags = useSelector(selectors.options.$projectTags);

  const value = projectId ? [projectId] : [];

  return (
    <TagModal
      options={allTags}
      value={value}
      onCta={props.onCta}
      onCancel={props.onCancel}
      placeholder='Pick or create a project...'
      isMulti={false}
    >
      Automatically applies to new assets. Some views are automatically filtered by project.
    </TagModal>
  );
}

export default ProjectModalContainer;
