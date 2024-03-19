import { useLocalStorage } from 'react-use';
import Creatable from '../Creatable/Creatable';
import { Cta, Label, Li, Ol, Textarea, Wrapper } from './BootstrapParams.style';
import classnames from 'classnames';

export type BootstrapParamsProps = {
  id: string;
  initialState: Json;
  options: any;
  parameters: any[];
  onCta: (data: Json) => void;

  onChange?: (data: Json) => void;
  customInstructionsId?: string;
  customInstructionsPlaceholder?: string;
  ctaButtonText?: string;
  hideLabel?: boolean;
  transparent?: boolean;
};

export function BootstrapParams(props: BootstrapParamsProps) {
  const {
    id,
    initialState,
    parameters,
    options,
    customInstructionsId,
    customInstructionsPlaceholder,
    ctaButtonText,
    hideLabel,
    transparent,
  } = props;
  const [state, patchState] = useLocalStorage(`bootstrap_${id}`, initialState);

  const onChange = (fieldId: string) => (value: string[]) => {
    const newValue = { ...state!, [fieldId]: value };
    patchState(newValue);

    if (!props.onChange) return;

    props.onChange(newValue);
  };

  function onCta() {
    if (!ctaButtonText) return;

    props.onCta(state!);
  }

  function onKeyDown(ev: any) {
    if (ev.key === 'Enter' && ev.metaKey) {
      onCta();
    }
  }

  function onChangeBody(ev: any) {
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
        {!hideLabel && <Label>{preText}</Label>}
        <Creatable
          options={options[id]}
          value={[value]}
          isMulti={false}
          placeholder={placeholder}
          onChange={onChange(id)}
          darkMode
          autoFocus={false}
        />
      </Li>
    );
  }

  function renderParams() {
    return parameters.map((param: Json) => renderParam(param));
  }

  function renderInstructions() {
    if (!customInstructionsId) return null;

    return (
      <Textarea
        placeholder={customInstructionsPlaceholder}
        value={state![customInstructionsId] ?? ''}
        onChange={onChangeBody}
        onKeyDown={onKeyDown}
      />
    );
  }

  function renderCta() {
    if (!ctaButtonText || !props.onCta) return;
    return <Cta onClick={onCta}>{ctaButtonText}</Cta>;
  }

  const className = classnames('BootstrapParams-wrapper', {
    transparent,
  });

  return (
    <Wrapper className={className} data-testid='BootstrapParams-wrapper'>
      <Ol>{renderParams()}</Ol>
      {renderInstructions()}
      {renderCta()}
    </Wrapper>
  );
}

export default BootstrapParams;
