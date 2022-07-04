import React from "react";
import { useFormContext } from "react-hook-form";
import { OptionsField } from "forms/form.types";
import styles from "./FileInput.module.scss";

const FileInput: React.FC<OptionsField> = ({
  name,
  label,
  required,
  placeholder,
}) => {
  const methods = useFormContext();

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <div className={styles["input-container"]}>
        <div className={styles["file-picker-container"]}>
          {!methods.watch(name) || methods.watch(name).length === 0 ? (
            placeholder
          ) : (
            <div className={styles.file}>{methods.watch(name)[0].name}</div>
          )}
          <input
            {...methods.register(name, { required })}
            className={styles.input}
            type="file"
            id="filePicker"
          />
          <label htmlFor="filePicker" className={styles["file-picker"]}>
            Cargar Archivo
          </label>
        </div>
      </div>
    </div>
  );
};

export default FileInput;
