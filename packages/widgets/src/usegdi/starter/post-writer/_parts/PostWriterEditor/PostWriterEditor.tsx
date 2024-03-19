import classnames from 'classnames';
import { useContext, useEffect } from 'react';
import { useSetState } from 'react-use';
import { WritePostContext } from '../../PostWriter.context';
import {
  Actions,
  Count,
  Cta,
  Input,
  InputWrapper,
  InstructionsInput,
  Label,
  Progress,
  Row,
  Wrapper,
} from './PostWriterEditor.style';
import { Loader } from '@gdi/ui';

export type PostWriterEditorProps = {
  id: string;
  placeholder: string;
  instructionsId?: number;
  label?: string;
  onRun?: () => void;
  onAdopt?: () => void;
  isRunning?: boolean;
};

export function PostWriterEditor(props: PostWriterEditorProps) {
  const { id, instructionsId, placeholder, label, isRunning } = props;
  const { state, patchState } = useContext(WritePostContext);
  const { focusIndex } = state;

  const keyInstructions = `instructions${instructionsId}`;

  const [value, patchValue] = useSetState({
    instructions: '',
    body: '',
  });

  useEffect(() => {
    if (!keyInstructions) return;
    const value = (state as any)[keyInstructions];
    patchValue({ instructions: value });
  }, [(state as any)[keyInstructions]]);

  useEffect(() => {
    const val = (state as any)[id];
    patchValue({ body: val });
  }, [(state as any)[id]]);

  const count = value.body.length;

  function onBlurBody() {
    patchState({
      [id]: value.body,
    });
  }

  function onKeyDown(ev: any) {
    if (ev.key === 'Enter' && props.onRun) {
      props.onRun();
    }
  }

  function onBlurInstructions() {
    patchState({
      [`instructions${instructionsId}`]: value.instructions,
    });
  }

  function onMouseDown() {
    if (!instructionsId) return;
    patchState({ focusIndex: instructionsId });
  }

  function renderLoader() {
    if (!isRunning) return null;
    return (
      <Progress>
        <Loader size={20} />
      </Progress>
    );
  }

  function renderAdopt() {
    if (!props.onAdopt || !value.body) return null;
    return <Cta onClick={props.onAdopt}>Adopt</Cta>;
  }

  function renderInstructions() {
    if (instructionsId === undefined) return null;

    return (
      <Row>
        <InstructionsInput
          value={value.instructions ?? ''}
          onChange={(ev) => patchValue({ instructions: ev.currentTarget.value })}
          onBlur={onBlurInstructions}
          placeholder='instructions'
          onKeyDown={onKeyDown}
        />
        <Actions>
          {renderAdopt()}
          <Cta disabled={isRunning} onClick={props.onRun}>
            Run
          </Cta>
        </Actions>
      </Row>
    );
  }

  const className = classnames('PostWriterEditor-wrapper', {
    focused: focusIndex === instructionsId && instructionsId !== undefined,
  });

  return (
    <Wrapper className={className} data-testid='PostWriterEditor-wrapper' onMouseDown={onMouseDown}>
      {renderInstructions()}
      {renderLoader()}
      <InputWrapper>
        <Input
          placeholder={placeholder}
          value={value.body}
          onChange={(ev) => patchValue({ body: ev.currentTarget.value })}
          onBlur={onBlurBody}
        ></Input>
      </InputWrapper>
      <Count>{count}</Count>
      {label && <Label className={label}>{label}</Label>}
    </Wrapper>
  );
}

export default PostWriterEditor;
