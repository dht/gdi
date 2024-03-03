import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Contacts } from './Contacts';
import { data } from './Contacts.multi';

export type ContactsContainerProps = {
  data: any;
};

export function ContactsContainer(props: ContactsContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onAction: (params: any) => {},
      onItemAction: (params: any) => {
        const { verb, item } = params;
        const { url } = item;

        switch (verb) {
          case 'click':
            dispatch({ type: 'NAVIGATE', to: url });
            break;
        }
      },
    }),
    []
  );

  return <Contacts data={data} callbacks={callbacks} />;
}

export default ContactsContainer;
