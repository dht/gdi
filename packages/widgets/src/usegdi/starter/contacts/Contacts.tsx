import { Multi } from 'multi';
import { Wrapper, Icon } from './Contacts.style';
import { initialView, multi, views } from './_multi';
import ContactFocusContainer from './_parts/ContactFocus/ContactFocus.container';
import ContactsSummaryContainer from './_parts/ContactsSummary/ContactsSummary.container';

export type ContactsProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Contacts(props: ContactsProps) {
  const { data, callbacks } = props;

  function renderSummary() {
    return <ContactsSummaryContainer />;
  }

  function renderFocus(id: string) {
    return <ContactFocusContainer id={id} />;
  }

  function renderTools(id: string) {
    return (
      <>
        <Icon
          className='material-symbols-outlined'
          onClick={() => callbacks.onItemAction(id, 'merge')}
        >
          merge
        </Icon>
      </>
    );
  }

  return (
    <Wrapper className='Contacts-wrapper' data-testid='Contacts-wrapper'>
      <Multi //
        initialView={initialView}
        views={views}
        config={multi}
        data={data}
        callbacks={callbacks}
        darkMode
        renderSummary={renderSummary}
        renderFocus={renderFocus}
        renderTools={renderTools}
      />
    </Wrapper>
  );
}

export default Contacts;
