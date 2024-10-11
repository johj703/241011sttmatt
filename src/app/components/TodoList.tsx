interface Todo {
  id: number;
  title: string;
  contents: string;
  isDone: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onUpdateTodo: (updateTodo: Todo) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }: TodoListProps) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul></ul>
    </div>
  );
};

export default TodoList;
