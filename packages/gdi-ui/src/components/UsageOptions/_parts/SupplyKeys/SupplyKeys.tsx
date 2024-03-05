import { useState } from 'react';
import Input from '../../../Input/Input';
import AccountNote from './SupplyKeys.components';
import { Actions, Content, Cta, Field, Label, Wrapper } from './SupplyKeys.style';

export type SupplyKeysProps = {
  onBack: () => void;
  onCta: (key: string) => void;
};

export function SupplyKeys(props: SupplyKeysProps) {
  const [key, setKey] = useState('');

  const disabled = !key || key.length !== 51;

  function onCta() {
    props.onCta(key);
  }

  function onChange(ev: any) {
    setKey(ev.target.value);
  }

  return (
    <Wrapper className='SupplyKeys-wrapper' data-testid='SupplyKeys-wrapper'>
      <Content>
        <Field>
          <Label>OpenAI Key:</Label>
          <Input isPassword placeholder='API key' value={key} onChange={onChange}></Input>
        </Field>
        <AccountNote></AccountNote>
      </Content>
      <Actions>
        <Cta className='link' onClick={props.onBack}>
          Back
        </Cta>
        <Cta disabled={disabled} onClick={onCta}>
          Save key
        </Cta>
      </Actions>
    </Wrapper>
  );
}

export default SupplyKeys;
