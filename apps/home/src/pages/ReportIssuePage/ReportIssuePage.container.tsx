import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { invokeEvent } from 'shared-base';
import { ReportIssuePage } from './ReportIssuePage';

export type ReportIssuePageContainerProps = {};

export function ReportIssuePageContainer(
  _props: ReportIssuePageContainerProps
) {
  const dispatch = useDispatch();
  const settings = useSelector(selectors.raw.$rawSettings);

  const callbacks = useMemo(
    () => ({
      onSave: (data: Json) => {
        const { description } = data;

        if (!description) return;

        invokeEvent('report/issue', data);
        dispatch({ type: 'NAVIGATE', to: '/home' });
      },
    }),
    []
  );

  return <ReportIssuePage callbacks={callbacks} />;
}

export default ReportIssuePageContainer;
