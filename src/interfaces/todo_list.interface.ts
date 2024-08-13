import { ITodo } from "./todo.interface";

export interface ITodoList {
  todos: ITodo[];
  toggleTodo: (id: number) => void;
}
