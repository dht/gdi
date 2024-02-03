import { Icon, Select } from '@gdi/ui';
import classnames from 'classnames';
import { useMemo, useState } from 'react';
import ElementCode from '../element-code/ElementCode';
import { elementFamilies } from './NewElement.data';
import { Editor, ElementFamily, Left, Title, Top, Wrapper } from './NewElement.style';

export type NewElementProps = {
  code: string;
  familyId: string;
  elementTypeId: string;
  allOptions: Json;
  callbacks: {
    onSave: () => void;
    onCodeChange: (code?: string) => void;
    onDelete: () => void;
    onCancel: () => void;
    onFamilyChange: (familyId: string) => void;
    onTypeChange: (typeId: string) => void;
  };
};

export function NewElement(props: NewElementProps) {
  const { familyId, elementTypeId, code, allOptions = {}, callbacks } = props;

  const options = useMemo(() => {
    return allOptions[familyId] || [];
  }, [familyId]);

  function renderFamily(family: Json) {
    const { id, iconName, name } = family;

    const className = classnames({
      selected: familyId === family.id,
    });

    return (
      <ElementFamily
        key={family.id}
        className={className}
        onClick={() => callbacks.onFamilyChange(id)}
      >
        <Icon className='icon' name={iconName} />
        <Title>{name}</Title>
      </ElementFamily>
    );
  }

  function renderFamilies() {
    return elementFamilies.map((t: Json) => renderFamily(t));
  }

  function renderTop() {
    return (
      <Select
        options={options}
        value={elementTypeId}
        placeholder='Select a subtype'
        onChange={(typeId: string) => callbacks.onTypeChange(typeId)}
      />
    );
  }

  return (
    <Wrapper className='NewElement-wrapper' data-testid='NewElement-wrapper'>
      <Left>{renderFamilies()}</Left>
      <Top>{renderTop()}</Top>
      <Editor>
        <ElementCode verb='Add' code={code} allowDelete callbacks={callbacks} />
      </Editor>
    </Wrapper>
  );
}

export default NewElement;
