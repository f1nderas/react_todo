import { FC } from "react";
import { ITodoFooter } from "../../interfaces/todo_footer.interface";
import { FilterType } from "../../interfaces/filter_type.enum";

import styles from "./TodoFooter.module.scss";
const TodoFooter: FC<ITodoFooter> = ({
  setFilter,
  remainingTodos,
  clearCompletedTodos,
  currentFilter,
}) => {
  return (
    <div className={styles.footer}>
      <div className="container py-1">
        <div className={styles.inner}>
          <span>{remainingTodos} items left</span>
          <div className={styles.buttons}>
            <button
              onClick={() => setFilter(FilterType.ALL)}
              className={currentFilter === FilterType.ALL ? styles.active : ""}
            >
              All
            </button>
            <button
              onClick={() => setFilter(FilterType.ACTIVE)}
              className={
                currentFilter === FilterType.ACTIVE ? styles.active : ""
              }
            >
              Active
            </button>
            <button
              onClick={() => setFilter(FilterType.COMPLETED)}
              className={
                currentFilter === FilterType.COMPLETED ? styles.active : ""
              }
            >
              Completed
            </button>
          </div>
          <button onClick={clearCompletedTodos}>Clear completed</button>
        </div>
      </div>
    </div>
  );
};

export { TodoFooter };
