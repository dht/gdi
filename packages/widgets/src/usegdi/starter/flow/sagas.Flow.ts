import { EditorSchema, prompt } from '@gdi/ui';
import { takeEvery } from '../../../helpers';
import { customEvenChannel } from '../../../helpers/channels/channel.customEvent';

export function* flow(action: any) {
  const { data } = action;

  const { value, didCancel } = yield prompt.custom({
    title: 'Node Definition',
    component: EditorSchema,
    componentProps: {
      value: JSON.stringify(data?.data ?? {}, null, 2),
      width: 800,
      height: 500,
      actions: ['content_copy', 'download', 'code'],
      schemaId: 'INode',
    },
  });
}

export function* root() {
  let channel;

  channel = customEvenChannel('flow');
  yield takeEvery(channel, flow);
}

export const saga = {
  id: 'widgets.flow',
  type: 'component',
  root: root,
  trigger: {
    eventNames: ['flow'],
  },
};
