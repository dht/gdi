import { runFunction } from '@gdi/firebase';
import { ISaga } from '@gdi/store-base';
import { prompt, IssueSubmitted } from '@gdi/ui';
import { call, delay, takeEvery } from 'saga-ts';
import { customEvenChannel } from './channels/channel.customEvent';

export function* onReportIssue(ev: any) {
  const { data } = ev;
  const { description } = data;

  const response = yield* call(runFunction, '/api/issues/report', {
    description,
  });

  if (!response.success) return;

  const { id } = response;

  yield prompt.custom({
    title: 'Issues Submitted',
    component: IssueSubmitted,
    componentProps: {
      id,
    },
  });
}

export function* root() {
  yield delay(0);
  const channel = customEvenChannel('report/issue');
  yield takeEvery(channel, onReportIssue);
}

export const saga: ISaga = {
  id: 'root.issues',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['report/issue'],
  },
};
