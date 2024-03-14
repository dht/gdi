import React from 'react';
import { Wrapper } from './Contacts.style';
import { Multi } from 'multi';
import { multi, initialView, views } from './_multi';
import ContactsSummary from './_parts/ContactsSummary/ContactsSummary';

export type ContactsProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
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
        config={multi}
        data={data}
        callbacks={callbacks}
        darkMode
      >
        <ContactsSummary />
      </Multi>
    </Wrapper>
  );
}

export default Contacts;
