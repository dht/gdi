import EditorCode from '../../../EditorCode/EditorCode';
import Icon from '../../../Icon/Icon';
import { Actions, Header, Title, Wrapper } from './FlowEditor.style';

export type FlowEditorProps = {
  onChange: (value?: string) => void;
};

export function FlowEditor(props: FlowEditorProps) {
  return (
    <Wrapper className='FlowEditor-wrapper' data-testid='FlowEditor-wrapper'>
      <Header>
        <Title>Edit node</Title>
        <Actions>
          <Icon name='close' />
        </Actions>
      </Header>
      <EditorCode onChange={props.onChange} language='json' />
    </Wrapper>
  );
}

export default FlowEditor;
