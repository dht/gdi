import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { useSagas } from '../../../helpers/useSaga';
import { Contacts } from './Contacts';

export type ContactsContainerProps = {
  data: any;
};

export function ContactsContainer(props: ContactsContainerProps) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.md.$contacts);

  useSagas([
    'widgets.contacts', //
    'widgets.contact',
    'widgets.contactCtas',
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
          type: verb.startsWith('cta_') ? 'CONTACT_CTA' : 'CONTACT',
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
