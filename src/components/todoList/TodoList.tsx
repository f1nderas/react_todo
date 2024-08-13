import { FC } from "react";
import { ITodoList } from "../../interfaces/todo_list.interface";
import { Checkbox } from "../checkbox/Checkbox";
import styles from "./TodoList.module.scss";
import cn from "classnames";
const TodoList: FC<ITodoList> = ({ todos, toggleTodo }) => {
  return (
    <ul className={styles.list}>
      {todos.map(({ id, title, completed }) => (
        <li key={id} className={cn(styles.item, "container py-2")}>
          <Checkbox
            id={id}
            checked={completed}
            onChange={() => toggleTodo(id)}
          />
          <label
            htmlFor={String(id)}
            className={cn(styles.label, completed ? styles.completed : "")}
          >
            {title}
          </label>
        </li>
      ))}
    </ul>
  );
};

export { TodoList };
