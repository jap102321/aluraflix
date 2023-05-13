import styles from "../../assets/css/AddElements.module.css";
import TextField from "@mui/material/TextField";

const NewCategory = () => {
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
          variant="standard"
          InputLabelProps={{
            style: styleReplacement.style,
          }}
          inputProps={{
            style: styleReplacement.style,
          }}
          margin="normal"
        />
        <TextField
          className={styles.input}
          id="description"
          label="Descripción"
          variant="standard"
          InputLabelProps={{
            style: styleReplacement.style,
          }}
          inputProps={{
            style: styleReplacement.style,
          }}
          margin="normal"
        />
      </form>
    </div>
  );
};

export default NewCategory;
