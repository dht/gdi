import { Save } from '@gdi/ui';
import { useEffect, useState } from 'react';
import { addListener } from 'shared-base';
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
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const unlisten = addListener('save/filename', (ev: any) => {
      const { text } = ev;
      setValue(text);
    });

    return () => unlisten();
  }, []);

  function onSave() {
    if (!value) return;
    callbacks.onSave(value);

    if (autoProgress) {
      const fileName = nextFileName(value);
      setValue(fileName);
    }
  }

  function onChange(ev: any) {
    setValue(ev.target.value);
  }

  return (
    <Wrapper className='SavePanel-wrapper' data-testid='SavePanel-wrapper'>
      <FileName darkMode value={value} onChange={onChange} type='text' />
      <Save what={what} disabled={disabled} onClick={onSave} />
    </Wrapper>
  );
}

export default SavePanel;
