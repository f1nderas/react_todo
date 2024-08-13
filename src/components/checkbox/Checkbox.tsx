import { FC } from "react";
import styles from "./Checkbox.module.scss";
import { ICheckbox } from "../../interfaces/checkbox.interface";
const Checkbox: FC<ICheckbox> = ({ id, checked, onChange }) => {
  return (
    <>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id={String(id)}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={String(id)}></label>
      </div>
    </>
  );
};

export { Checkbox };
