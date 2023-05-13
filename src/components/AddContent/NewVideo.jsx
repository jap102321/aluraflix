import styles from "../../assets/css/AddElements.module.css";
import TextField from "@mui/material/TextField";

const NewVideo = (props) => {
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
          id="category"
          label="Categoría"
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
          id="poster"
          label="Portada"
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
          id="releaseDate"
          label="Año de salida"
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
          id="trailer"
          label="Trailer"
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

export default NewVideo;
