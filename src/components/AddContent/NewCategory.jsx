import { useState } from "react";
import styles from "../../assets/css/AddElements.module.css";
import TextField from "@mui/material/TextField";
import { validateTitle } from "../../validators/validateCategory";

const NewCategory = () => {
  const [title, setTitle] = useState({ value: "", valid: null });
  const [description, setDescription] = useState("");
  const styleReplacement = {
    style: {
      color: "#e5e5e5",
      marginInline: "10px",
    },
  };
  return (
    <div className={styles.addNewContent}>
      <form className={styles.form}>
        <TextField
          className={styles.input}
          id="title"
          label="Titulo"
          variant="outlined"
          value={title.value}
          InputLabelProps={{
            style: styleReplacement.style,
          }}
          inputProps={{
            style: styleReplacement.style,
          }}
          margin="normal"
          onChange={(e) => {
            const value = e.target.value;
            const valid = validateTitle(value);
            setTitle({ value, valid });
          }}
          error={title.valid === false}
          helperText={title.valid === false && "Ingresa un titulo válido"}
        />
        <TextField
          className={styles.input}
          id="description"
          label="Descripción"
          variant="outlined"
          value={description}
          InputLabelProps={{
            style: styleReplacement.style,
          }}
          inputProps={{
            style: styleReplacement.style,
          }}
          margin="normal"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default NewCategory;
