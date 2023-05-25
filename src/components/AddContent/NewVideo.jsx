import { useState, useEffect } from "react";
import styles from "../../assets/css/AddElements.module.css";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import {
  validateDate,
  validateTitle,
  validateTrailer,
} from "../../validators/validateMovie";
import Card from "./Card";
import { search } from "../../api/Api";

const NewVideo = ({ categoryList }) => {
  const [title, setTitle] = useState({ value: "", valid: null });
  const [poster, setPoster] = useState({ value: "", valid: null });
  const [dateOfRel, setDateOfRel] = useState({ value: "", valid: null });
  const [trailer, setTrailer] = useState({ value: "", valid: null });
  const [category, setCategory] = useState([]);
  const [updcategoryList, setUpdCatList] = useState([]);

  useEffect(() => {
    categoryList.map((data) => setCategory(data));
    search("/updatableMovies", setUpdCatList);
  }, []);
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

  const isOptionEqualTovalue = (option, value) => {
    return option.label === value.label;
  };

  //Categorie for movies.
  const categories = category.map((data) => {
    return { label: data.nombre };
  });

  const moreCategories = updcategoryList.map((data) => {
    return { label: data.nombre };
  });

  const allCat = [...categories, ...moreCategories];
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
          options={allCat}
          margin="normal"
          sx={{
            color: "#e5e5e5",
            marginBlockEnd: "0px",
            marginBlockStart: "6px",
          }}
          isOptionEqualToValue={isOptionEqualTovalue}
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
