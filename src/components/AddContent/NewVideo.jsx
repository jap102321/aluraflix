import { useState } from "react";
import styles from "../../assets/css/AddElements.module.css";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import {
  validateDate,
  validateTitle,
  validateTrailer,
} from "../../validators/validateMovie";
import Card from "./Card";

const NewVideo = (props) => {
  const [title, setTitle] = useState({ value: "", valid: null });
  const [poster, setPoster] = useState({ value: "", valid: null });
  const [dateOfRel, setDateOfRel] = useState({ value: "", valid: null });
  const [trailer, setTrailer] = useState({ value: "", valid: null });

  //Stying
  const styleReplacement = {
    style: {
      color: "#e5e5e5",
      marginInline: "10px",
    },
    styleOpt: {
      color: "#e5e5e5",
      marginInline: "10px",
      height: "48px",
    },
  };
  //Categorie for movies.
  const categories = [
    { label: "starwars", id: 1 },
    { label: "adventure", id: 2 },
  ];

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
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={categories}
          margin="normal"
          sx={{
            color: "#e5e5e5",
            marginBlockEnd: "0px",
            marginBlockStart: "6px",
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Categoria"
              className={styles.input}
              InputLabelProps={{
                style: styleReplacement.styleOpt,
              }}
            />
          )}
        />
        <TextField
          className={styles.input}
          id="poster"
          label="Portada"
          variant="outlined"
          value={poster.value}
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
            setPoster({ value, valid });
          }}
          error={poster.valid === false}
          helperText={poster.valid === false && "Ingresa un enlace válido"}
        />
        <TextField
          className={styles.input}
          id="releaseDate"
          label="Año de salida"
          variant="outlined"
          type="number"
          value={dateOfRel.value}
          InputLabelProps={{
            style: styleReplacement.style,
          }}
          inputProps={{
            style: styleReplacement.style,
          }}
          margin="normal"
          onChange={(e) => {
            const value = e.target.value;
            const valid = validateDate(value);
            setDateOfRel({ value, valid });
          }}
          error={dateOfRel.valid === false}
          helperText={dateOfRel.valid === false && "Ingresa una fecha válida"}
        />
        <TextField
          className={styles.input}
          id="trailer"
          label="Trailer"
          variant="outlined"
          value={trailer.value}
          InputLabelProps={{
            style: styleReplacement.style,
          }}
          inputProps={{
            style: styleReplacement.style,
          }}
          margin="normal"
          onChange={(e) => {
            const value = e.target.value;
            const valid = validateTrailer(value);
            setTrailer({ value, valid });
          }}
          error={trailer.valid === false}
          helperText={trailer.valid === false && "Ingresa un enlace válido"}
        />
      </form>
      <Card />
    </div>
  );
};

export default NewVideo;
