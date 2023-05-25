import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/css/AddElements.module.css";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "../button/Button";
import { validateTitle } from "../../validators/validateCategory";
import Card from "./Card";
import { search, updateCategories } from "../../api/Api";

const NewCategory = ({ categoryList }) => {
  const [title, setTitle] = useState({ value: "", valid: null });
  const [description, setDescription] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [formData, setFormData] = useState([]);
  const [newCat, setNewCat] = useState([]);
  const url = "/updatableMovies";

  //Data Table
  useEffect(() => {
    categoryList.map((cat) => setMovieList(cat));
  });
  useEffect(() => {
    search(url, setNewCat);
  }, []);

  //Styling
  const styleReplacement = {
    style: {
      color: "#e5e5e5",
      marginInline: "10px",
    },
  };

  const handleSubmit = async () => {
    if (!formData === []) {
      try {
        const resp = await updateCategories(url, formData);
        console.log(resp);
      } catch (err) {
        throw err;
      }
    } else {
      setTimeout(() => {}, 300);
    }
  };

  return (
    <div className={styles.addNewContent}>
      <form
        className={styles.form}
        onSubmit={async (e) => {
          e.preventDefault();
          setFormData({ id: title.value, nombre: title.value, mov: [] });
          handleSubmit();
        }}
      >
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
        <Card />
      </form>

      <TableContainer
        component={Paper}
        className={`${styles.input} ${styles.table}`}
        sx={{ marginBlockStart: "1rem", maxInlineSize: "80%" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Descripción</TableCell>
              <TableCell align="right">Editar</TableCell>
              <TableCell align="right">Remover</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movieList.map((data, i) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.nombre}
                </TableCell>
                <TableCell align="right">
                  {data.description
                    ? data.description
                    : "No description available"}
                </TableCell>
                <TableCell align="right">
                  <p>No es posible editar.</p>
                </TableCell>
                <TableCell align="right">
                  <p>No es posible eliminar.</p>
                </TableCell>
              </TableRow>
            ))}
            {newCat.map((data, i) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.nombre}
                </TableCell>
                <TableCell align="right">
                  {data.description
                    ? data.description
                    : "No description available"}
                </TableCell>
                <TableCell align="right">
                  <Link to={`/edit/category/${data.id}`}>
                    <Button styling="gray" description="Editar"></Button>
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <Button styling="gray" description="Remover"></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NewCategory;
