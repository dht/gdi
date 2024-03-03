import { Form } from '@gdi/ui';
import { formDefaults, forms } from '../../_definitions/forms';
import { H1, Wrapper } from './ReportIssuePage.style';

export type ReportIssuePageProps = {
  callbacks: {
    onSave: (data: Json) => void;
  };
};

export function ReportIssuePage(props: ReportIssuePageProps) {
  const { callbacks } = props;

  function onSave(values: Json, _all: Json) {
    callbacks.onSave(values);
    return Promise.resolve(true);
  }

  return (
    <Wrapper>
      <H1>Report an Issue</H1>
      <Form
        config={forms.reportIssue as any}
        data={{ ...formDefaults.reportIssue }}
        onSubmit={onSave}
      />
    </Wrapper>
  );
}

export default ReportIssuePage;
