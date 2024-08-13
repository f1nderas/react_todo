import { ChangeEvent } from "react";

export interface ICheckbox {
  id: number;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
