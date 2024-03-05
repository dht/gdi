import { useState } from 'react';
import { Note } from '../Note/Note';
import { options } from './UsageOptions.data';
import { Actions, Cta, Description, Options, Wrapper } from './UsageOptions.style';
import { RunLocally } from './_parts/RunLocally/RunLocally';
import { SupplyKeys } from './_parts/SupplyKeys/SupplyKeys';
import { UsageOption } from './_parts/UsageOption/UsageOption';

export type UsageOptionsProps = {
  onCta: (id: string) => void;
  onCancel: () => void;
};

export function UsageOptions(props: UsageOptionsProps) {
  const [selectedId, setSelectedId] = useState('');

  function onSelect(id: string) {
    setSelectedId(id);
  }

  function renderOption(option: Json) {
    return <UsageOption key={option.id} value={option} onSelect={onSelect} />;
  }

  function renderOptions() {
    return options.map((option: Json) => renderOption(option));
  }

  function renderMain() {
    return (
      <>
        <Description>You can either run GDI locally on your machine or use the cloud:</Description>
        <Options>{renderOptions()}</Options>

        <Note>
          <p>
            You can read more about each option in the{' '}
            <a target='_blank' href='/docs'>
              docs
            </a>
          </p>
        </Note>
        <Actions>
          <Cta className='link' onClick={props.onCancel}>
            Do it later
          </Cta>
        </Actions>
      </>
    );
  }

  function renderInner() {
    switch (selectedId) {
      case 'your-machine':
        return <RunLocally onBack={() => setSelectedId('')} onDone={props.onCancel} />;
      case 'cloud':
        return <SupplyKeys onBack={() => setSelectedId('')} onCta={props.onCta} />;
      default:
        return renderMain();
    }
  }

  return (
    <Wrapper className='UsageOptions-wrapper' data-testid='UsageOptions-wrapper'>
      {renderInner()}
    </Wrapper>
  );
}

export default UsageOptions;
