import React from 'react';
import { Iframe, Wrapper } from './ContactUsPage.style';

export type ContactUsPageProps = {};

export function ContactUsPage(_props: ContactUsPageProps) {
  return (
    <Wrapper className='ContactUsPage-wrapper' data-testid='ContactUsPage-wrapper'>
      <Iframe
        src='https://docs.google.com/forms/d/e/1FAIpQLScpguscEZxWqTCsqHFaI-2Lbi9uY51YVWDRDg9ZLDJYXlrODw/viewform?embedded=true'
        width='640'
        height='1200'
        frameBorder='0'
        marginHeight='0'
        marginWidth='0'
      >
        Loading…
      </Iframe>
    </Wrapper>
  );
}

export default ContactUsPage;
