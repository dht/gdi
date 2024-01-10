import React from 'react';
import { Info, Wrapper } from './AssistantsPanel.style';
import { Auto, JsonTable } from '@gdi/ui';
import { IAssistant } from '@gdi/store-base';

export type AssistantsPanelProps = {
  assistant: IAssistant;
  options: any[];
  onChange: (assistantId: string) => void;
};

export function AssistantsPanel(props: AssistantsPanelProps) {
  const { assistant, options } = props;

  function renderAssistant() {
    if (!assistant) {
      return null;
    }

    const { description, instructions, model } = assistant;

    return <JsonTable value={{ description, instructions, model }} />;
  }

  return (
    <Wrapper className='AssistantsPanel-wrapper' data-testid='AssistantsPanel-wrapper'>
      <Auto
        options={options}
        value={assistant?.id}
        placeholder='Select an assistant'
        onChange={props.onChange}
      />
      <Info>{renderAssistant()}</Info>
    </Wrapper>
  );
}

export default AssistantsPanel;
