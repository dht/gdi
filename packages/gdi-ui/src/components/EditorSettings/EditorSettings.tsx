import { Wrapper } from './EditorSettings.style';

export type EditorSettingsProps = {};

export function EditorSettings(_props: EditorSettingsProps) {
  return (
    <Wrapper className='EditorSettings-wrapper' data-testid='EditorSettings-wrapper'>
      EditorSettings
    </Wrapper>
  );
}

export default EditorSettings;
