import { selectors, IContact, actions } from '@gdi/store-base';
import { put, fork, select, takeEvery, call } from 'saga-ts';
import { fixPhone, parseChange } from './Contacts.utils';
import { isEmpty } from 'lodash';
import { guid4, invokeEvent } from 'shared-base';
import { verifyPhone } from '../../../helpers/phone';
import { format, toast } from '@gdi/ui';

type Verb =
  | 'contact' //
  | 'meeting'
  | 'reminder'
  | 'todo'
  | 'document'
  | 'list'
  | 'event'
  | 'read'
  | 'message';

type Action = {
  type: 'CONTACT_CTA';
  id: string;
  verb: Verb;
  payload: Json;
};

const map: Partial<Record<Verb, any>> = {
  contact: google,
  message: sendWhatsapp,
  meeting: setMeeting,
  reminder: setMeeting,
};

export function* sendWhatsapp(_action: Action, item: IContact) {
  const { phone } = item;

  if (!phone) return;

  const text = 'Hi';

  const fixedPhone = yield* call(verifyPhone, phone);

  if (!fixedPhone) {
    toast.show('Invalid phone number', 'error');
    return;
  }

  const encodedText = encodeURIComponent(text);
  const whatsappURL = `https://wa.me/${fixedPhone}?text=${encodedText}`;

  window.open(whatsappURL, '_blank');
}

export function* google(_action: Action, item: IContact) {
  const { name } = item;

  if (!name) return;

  var encodedQuery = encodeURIComponent(name);
  var googleSearchURL = 'https://www.google.com/search?q=' + encodedQuery;
  window.open(googleSearchURL, '_blank');
}

export function* setMeeting(_action: Action, item: IContact) {
  const { name, email } = item;

  if (!name) return;

  const now = new Date();

  // Event details
  const eventTitle = encodeURIComponent('Meeting with ' + name);
  const startDate = format.date.googleCalendar(now);
  const endDate = format.date.googleCalendar(now);
  const details = encodeURIComponent('Meeting details go here');
  const location = encodeURIComponent('Office or Zoom/Meet link');

  const googleCalendarUrl = `http://www.google.com/calendar/event?action=TEMPLATE&text=${eventTitle}&dates=${startDate}/${endDate}&details=${details}&location=${location}&add=${email}`;

  window.open(googleCalendarUrl, '_blank');
}

export function* contactCta(action: any) {
  const { verb, id } = action;

  const verbClean = verb.replace('cta_', '');
  const saga = (map as any)[verbClean];

  if (!saga) {
    return;
  }

  const contacts = yield* select(selectors.raw.$rawContacts);
  const item = contacts[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('CONTACT_CTA', contactCta);
}

export const saga = {
  id: 'widgets.contactCtas',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['CONTACT_CTA'],
  },
};
