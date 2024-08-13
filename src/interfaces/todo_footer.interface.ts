import { FilterType } from "./filter_type.enum";

export interface ITodoFooter {
  setFilter: (filter: FilterType) => void;
  remainingTodos: number;
  clearCompletedTodos: () => void;
  currentFilter: FilterType;
}
