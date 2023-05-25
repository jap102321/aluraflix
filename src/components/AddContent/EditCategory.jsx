import { useEffect, useState } from "react";
import styles from "../../assets/css/AddElements.module.css";
import TextField from "@mui/material/TextField";
import { validateTitle } from "../../validators/validateCategory";
import Card from "./Card";
import { search, updateData } from "../../api/Api";
import { useParams } from "react-router-dom";
import Header from "../header/Header";

const EditCategory = ({ categoryList }) => {
  const [title, setTitle] = useState({ value: "", valid: null });
  const [description, setDescription] = useState("");
  const [updateInfo, setUpdateInfo] = useState({ title: "", description: "" });
  const { id } = useParams();

  //Data Table
  useEffect(() => {
    search(`/updatableMovies/${id}`, (data) => {
      setUpdateInfo(data);
      setTitle({ value: data.nombre || "", valid: null });
      setDescription(data.description);
    });
  }, [id]);

  //Styling
  const styleReplacement = {
    style: {
      color: "#e5e5e5",
      marginInline: "10px",
    },
  };
  const updateCategoryData = async () => {
    const data = {
      nombre: title.value,
      description: description,
    };
    try {
      const updatedData = await updateData(`/updatableMovies/${id}`, data);
      return updatedData;
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <Header />
      <div className={styles.addNewContent}>
        <form
          className={styles.form}
          onSubmit={async (e) => {
            e.preventDefault();
            updateCategoryData();
          }}
        >
          <TextField
            className={styles.input}
            id="title"
            label="Titulo"
            variant="outlined"
            value={title.value || ""}
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
            value={description || ""}
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
          <Card />
        </form>
      </div>
    </>
  );
};

export default EditCategory;
