import { Multi } from 'multi';
import { Wrapper } from './Todos.style';
import { initialView, multi, views } from './_multi';
import TodoFocusContainer from './_parts/TodoFocus/TodoFocus.container';
import { TodosSummaryContainer } from './_parts/TodosSummary/TodosSummary.container';

export type TodosProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Todos(props: TodosProps) {
  const { data, callbacks } = props;

  function renderSummary() {
    return <TodosSummaryContainer />;
  }

  function renderFocus(id: string) {
    return <TodoFocusContainer id={id} />;
  }

  return (
    <Wrapper className='Todos-wrapper' data-testid='Todos-wrapper'>
      <Multi //
        initialView={initialView}
        views={views}
        config={multi}
        data={data}
        callbacks={callbacks}
        darkMode
        renderSummary={renderSummary}
        renderFocus={renderFocus}
      />
    </Wrapper>
  );
}

export default Todos;
