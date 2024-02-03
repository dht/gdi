import { Save } from '@gdi/ui';
import { useEffect, useState } from 'react';
import { FileName, Wrapper } from './SavePanel.style';
import { nextFileName } from './SavePanel.utils';

export type SavePanelProps = {
  value?: string;
  what: string;
  autoProgress?: boolean;
  disabled?: boolean;
  callbacks: {
    onSave: (fileName: string) => void;
  };
};

export function SavePanel(props: SavePanelProps) {
  const { value = '', what, disabled, autoProgress, callbacks } = props;
  const [fileName, setFileName] = useState(value);

  useEffect(() => {
    setFileName(value);
  }, [value]);

  function onSave() {
    if (!fileName) return;
    callbacks.onSave(value);

    if (autoProgress) {
      const nextName = nextFileName(fileName);
      setFileName(nextName);
    }
  }

  function onChange(ev: any) {
    setFileName(ev.target.value);
  }

  return (
    <Wrapper className='SavePanel-wrapper' data-testid='SavePanel-wrapper'>
      <FileName darkMode value={value} onChange={onChange} />
      <Save what={what} disabled={disabled} onClick={onSave} />
    </Wrapper>
  );
}

export default SavePanel;
