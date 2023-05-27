import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const search = async (url, setData) => {
  const res = await api.get(url);
  setData(res.data);
};

export const updateCategories = async (url, setData) => {
  try {
    const response = await api.post(url, setData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const updateData = async (url, data) => {
  try {
    const resp = await api.put(url, data);
    return resp.data;
  } catch (err) {
    throw err;
  }
};

export const deleteData = async (url) => {
  try {
    const resp = await api.delete(url);
    return resp.data;
  } catch (err) {
    throw err;
  }
};

export const addMovieToMovArray = async (movieId, movieData) => {
  try {
    const response = await api.get(`/updatableMovies/${movieId}`);
    const movie = response.data;

    console.log(movie);

    movie.mov.push(movieData);

    await api.patch(`/updatableMovies/${movieId}`, movie);

    console.log("Película agregada exitosamente");
  } catch (error) {
    console.error("Error al agregar la película:", error);
    throw error;
  }
};
