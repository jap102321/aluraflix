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
    console.log("osi");
    return response.data;
  } catch (err) {
    throw err;
  }
};
