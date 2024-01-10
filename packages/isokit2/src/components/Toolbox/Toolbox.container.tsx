import { useMemo, useState } from 'react';
import { useKey } from 'react-use';

import { Toolbox } from './Toolbox';

export type ToolboxContainerProps = {
  items: Json[];
  className?: string;
  horizontal?: boolean;
  commandMode?: boolean;
  onAction: (id: string) => void;
};

export function ToolboxContainer(props: ToolboxContainerProps) {
  const { items, className, horizontal, commandMode } = props;
  const [selectedId, setSelectedId] = useState('');

  const callbacks = useMemo(
    () => ({
      onAction: (id: string) => {
        if (!commandMode) {
          setSelectedId(id);
        }

        props.onAction(id);
      },
    }),
    [commandMode]
  );

  useKey('v', () => callbacks.onAction('select'), {}, [callbacks]);
  useKey('g', () => callbacks.onAction('move'), {}, [callbacks]);
  useKey('r', () => callbacks.onAction('rotate'), {}, [callbacks]);
  useKey('l', () => callbacks.onAction('scale'), {}, [callbacks]);

  return (
    <Toolbox
      items={items}
      selectedId={selectedId}
      horizontal={horizontal}
      className={className}
      callbacks={callbacks}
    />
  );
}

export default ToolboxContainer;
