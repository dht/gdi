import React from 'react';
import { Wrapper } from './Todos.style';
import { Multi } from 'multi';
import { multi, initialView, views } from './_multi';
import TodosSummary from './_parts/TodosSummary/TodosSummary.container';

export type TodosProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Todos(props: TodosProps) {
  const { data, callbacks } = props;

  return (
    <Wrapper className='Todos-wrapper' data-testid='Todos-wrapper'>
      <Multi //
        initialView={initialView}
        views={views}
        config={multi}
        data={data}
        callbacks={callbacks}
        darkMode
      >
        <TodosSummary />
      </Multi>
    </Wrapper>
  );
}

export default Todos;
