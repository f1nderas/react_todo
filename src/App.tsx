import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { TodoFooter, TodoInput, TodoList } from "./components";
import { FilterType, ITodo } from "./interfaces";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL);

  useEffect(() => {
    fetch("/react_todo/todos.json")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const addTodo = (title: string) => {
    setTodos([...todos, { id: Date.now(), title, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === FilterType.ALL) return true;
    if (filter === FilterType.ACTIVE) return !todo.completed;
    if (filter === FilterType.COMPLETED) return todo.completed;
  });

  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Todo List</h1>
      <div className={styles.wrapperContainer}>
        <div className={styles.wrapper}>
          <TodoInput addTodo={addTodo} />
          <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
          <TodoFooter
            setFilter={setFilter}
            remainingTodos={remainingTodos}
            clearCompletedTodos={clearCompletedTodos}
            currentFilter={filter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
