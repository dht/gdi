import React from 'react';
import { IFormGroup } from '../Form/Form.types';
import { Content, Header, Label, Wrapper } from './Group.style';

export type GroupProps = {
  group: IFormGroup;
  children: React.ReactNode;
};

export function Group(props: GroupProps) {
  const { group } = props;
  const { title } = group;

  function renderHeader() {
    if (!title) {
      return null;
    }

    return (
      <Header>
        <Label>{title}</Label>
      </Header>
    );
  }

  function renderContent() {
    return <Content>{props.children}</Content>;
  }

  return (
    <Wrapper className='Group-wrapper' data-testid='Group-wrapper'>
      {renderHeader()}
      {renderContent()}
    </Wrapper>
  );
}

export default Group;
