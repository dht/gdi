import { guid4 } from 'shared-base';
import {
  Actions,
  Button,
  Input,
  List,
  Todo,
  TodoActions,
  TodoCheckbox,
  TodoTitle,
  Wrapper,
} from './Todos.style';
import { ITodos } from '@gdi/store-base';

export type TodosProps = {
  todos: ITodos;
  callbacks: {
    onAddTodo: (todo: Json) => void;
    onRemoveTodo: (todo: Json) => void;
    onEditTodo: (todo: Json, change: Json) => void;
    onRandomTodo: () => void;
  };
};

export function Todos(props: TodosProps) {
  const { todos, callbacks } = props;

  function onToggleTodo(todo: Json) {
    callbacks.onEditTodo(todo, {
      completed: !todo.completed,
    });
  }

  function onEdit(todo: Json) {
    const value = prompt('Enter new value', todo.title);

    if (!value) {
      return;
    }

    callbacks.onEditTodo(todo, {
      title: value,
    });
  }

  function onDelete(todo: Json) {
    callbacks.onRemoveTodo(todo);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (event.key !== 'Enter') {
      return;
    }

    callbacks.onAddTodo({
      id: guid4(),
      title: value,
      completed: false,
    });

    target.value = '';
    target.focus();
  }

  function renderTodo(todo: Json) {
    const { title, completed } = todo;
    return (
      <Todo key={todo.id} className='todo'>
        <TodoTitle>{title}</TodoTitle>
        <TodoActions>
          <Button onClick={() => onEdit(todo)}>Edit</Button>
          <Button onClick={() => onDelete(todo)}>Del</Button>
        </TodoActions>
        <TodoCheckbox type='checkbox' checked={completed} onChange={() => onToggleTodo(todo)} />
      </Todo>
    );
  }

  function renderTodos() {
    return Object.values(todos ?? {}).map((todo: Json) => renderTodo(todo));
  }

  return (
    <Wrapper className='TodosPage-wrapper' data-testid='TodosPage-wrapper'>
      <Actions>
        <Button onClick={callbacks.onRandomTodo}>Random todo</Button>
      </Actions>
      <Input onKeyDown={onKeyDown} />
      <List>{renderTodos()}</List>
    </Wrapper>
  );
}

export default Todos;
