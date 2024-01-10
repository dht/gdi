import { Form, Note } from '@gdi/ui';
import { formDefaults, forms } from '../../_definitions/forms';
import BasePage from '../BasePage';
import ReviewNote from './NewReviewNote.note';

export type NewReviewPageProps = {
  callbacks: {
    onSave: (data: Json) => void;
  };
};

export function NewReviewPage(props: NewReviewPageProps) {
  const { callbacks } = props;

  function onSave(values: Json, _all: Json) {
    callbacks.onSave(values);
    return Promise.resolve(true);
  }

  return (
    <BasePage header='New Review'>
      <ReviewNote />
      <Form
        config={forms.keys as any}
        data={formDefaults.keys}
        onSubmit={onSave}
      />
    </BasePage>
  );
}

export default NewReviewPage;
