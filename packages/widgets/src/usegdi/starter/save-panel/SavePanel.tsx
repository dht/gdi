import { Save } from '@gdi/ui';
import { useEffect, useState } from 'react';
import { FileName, Wrapper } from './SavePanel.style';
import { nextFileName } from './SavePanel.utils';

export type SavePanelProps = {
  defaultValue?: string;
  what: string;
  autoProgress?: boolean;
  disabled?: boolean;
  callbacks: {
    onSave: (fileName: string) => void;
  };
};

export function SavePanel(props: SavePanelProps) {
  const { defaultValue = '', what, disabled, autoProgress, callbacks } = props;
  const [fileName, setFileName] = useState(defaultValue);

  useEffect(() => {
    setFileName(defaultValue);
  }, [defaultValue]);

  function onSave() {
    if (!fileName) return;
    callbacks.onSave(fileName);

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
      <FileName darkMode value={fileName} onChange={onChange} />
      <Save what={what} disabled={disabled} onClick={onSave} />
    </Wrapper>
  );
}

export default SavePanel;
