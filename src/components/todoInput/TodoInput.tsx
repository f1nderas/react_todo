import { ChevronDown } from "lucide-react";
import { FC, FormEvent, useState } from "react";
import { ITodoInput } from "../../interfaces/todo_input.interface";
import styles from "./TodoInput.module.scss";
import cn from "classnames";

const TodoInput: FC<ITodoInput> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn(styles.form, "container py-2")}>
      <div className={styles.arrow}>
        <ChevronDown size={20} />
      </div>
      <input
        className={styles.input}
        type="text"
        placeholder="What need to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export { TodoInput };
