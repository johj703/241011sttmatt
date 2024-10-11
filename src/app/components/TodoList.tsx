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
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>Complete</span>
            <span>Delete</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
