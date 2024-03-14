import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Contacts } from './Contacts';
import { data } from './Contacts.multi';
import { useSagas } from '../../../helpers/useSaga';

export type ContactsContainerProps = {
  data: any;
};

export function ContactsContainer(props: ContactsContainerProps) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.base.$contacts);

  useSagas([
    'widgets.contacts', //
    'widgets.contact',
  ]);

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, params?: Json) => {
        dispatch({
          type: 'CONTACTS',
          verb,
          payload: params,
        });
      },
      onItemAction: (id: string, verb: string, payload?: Json) => {
        dispatch({
          type: 'CONTACT',
          verb,
          id,
          payload,
        });
      },
    }),
    []
  );

  return <Contacts data={contacts} callbacks={callbacks} />;
}

export default ContactsContainer;
