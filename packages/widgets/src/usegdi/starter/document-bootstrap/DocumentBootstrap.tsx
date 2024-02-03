import { IDocumentMeta } from '@gdi/store-base';
import { Creatable } from '@gdi/ui';
import { useLocalStorage } from 'react-use';
import { parameters } from './DocumentBootstrap.data';
import { Cta, Label, Li, Ol, Textarea, Wrapper } from './DocumentBootstrap.style';

export type DocumentBootstrapProps = {
  options: any;
  onBootstrap: (meta: IDocumentMeta) => void;
};

export function DocumentBootstrap(props: DocumentBootstrapProps) {
  const { options } = props;
  const [state, patchState] = useLocalStorage('DOCUMENT_BOOTSTRAP', {
    documentType: 'email',
    documentLength: '3 paragraphs',
    documentStyle: 'casually',
    topicAndInstructions: '',
  });

  function onBootstrap() {
    const { documentType, documentLength, documentStyle, topicAndInstructions } = state!;

    props.onBootstrap({
      documentType: documentType as any,
      lengthInstructions: documentLength,
      styleInstructions: documentStyle,
      topicAndInstructions,
    });
  }

  function onKeyDown(ev: any) {
    if (ev.key === 'Enter' && ev.metaKey) {
      onBootstrap();
    }
  }

  const onChange = (fieldId: string) => (value: string[]) => {
    patchState({ ...state!, [fieldId]: value });
  };

  function onChangeTopicAndInstructions(ev: any) {
    patchState({ ...state!, topicAndInstructions: ev.target.value });
  }

  function renderParam(param: Json) {
    let { id, preText, placeholder } = param;
    const value = (state as any)[id];

    if (preText.endsWith(' a') && ['a', 'e', 'i'].includes(value[0])) {
      preText += 'n';
    }

    return (
      <Li key={param.id}>
        <Label>{preText}</Label>
        <Creatable
          options={options[id]}
          value={[value]}
          isMulti={false}
          placeholder={placeholder}
          onChange={onChange(id)}
        />
      </Li>
    );
  }

  function renderParams() {
    return parameters.map((param: Json) => renderParam(param));
  }

  return (
    <Wrapper className='DocumentBootstrap-wrapper' data-testid='DocumentBootstrap-wrapper'>
      <Ol>{renderParams()}</Ol>
      <Textarea
        placeholder='Topic and instructions'
        value={state?.topicAndInstructions}
        onChange={onChangeTopicAndInstructions}
        onKeyDown={onKeyDown}
      />
      <Cta onClick={onBootstrap} className='inverse'>
        Bootstrap Document
      </Cta>
    </Wrapper>
  );
}

export default DocumentBootstrap;
