import React from 'react';
import { Wrapper } from './Contacts.style';
import { Multi } from 'multi';
import { config, initialView, views } from './Contacts.multi';

export type ContactsProps = {
  callbacks: {
    onAction: (params: any) => void;
    onItemAction: (params: any) => void;
  };
  data: Json[];
};

export function Contacts(props: ContactsProps) {
  const { data, callbacks } = props;

  return (
    <Wrapper className='Contacts-wrapper' data-testid='Contacts-wrapper'>
      <Multi //
        initialView={initialView}
        views={views}
        config={config}
        data={data}
        callbacks={callbacks}
        darkMode
      />
    </Wrapper>
  );
}

export default Contacts;
