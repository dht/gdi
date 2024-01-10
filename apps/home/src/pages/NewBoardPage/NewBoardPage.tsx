import { Form, Note } from '@gdi/ui';
import { formDefaults, forms } from '../../_definitions/forms';
import BasePage from '../BasePage';
import NewBoardNote from './NewBoardPage.note';
import { H1 } from './NewBoardPage.style';

export type NewBoardPageProps = {
  callbacks: {
    onSave: (data: Json) => void;
  };
};

export function NewBoardPage(props: NewBoardPageProps) {
  const { callbacks } = props;

  function onSave(values: Json, _all: Json) {
    callbacks.onSave(values);
    return Promise.resolve(true);
  }

  return (
    <BasePage header='Submit a New Board'>
      <NewBoardNote />
      <Form
        config={forms.newBoard as any}
        data={formDefaults.newBoard}
        onSubmit={onSave}
      />
    </BasePage>
  );
}

export default NewBoardPage;
