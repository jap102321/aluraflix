import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { search } from "../api/Api";
import Header from "../components/header/Header";
import NewVideo from "../components/AddContent/NewVideo";
import NewCategory from "../components/AddContent/NewCategory";

const NewContent = ({ path }) => {
  const [categoryList, setCatList] = useState([]);
  const url = useLocation().pathname;
  const moviesUrl = "/movies";
  let catTest = <p>Page undefined</p>;

  useEffect(() => {
    search(moviesUrl, setCatList);
  }, []);

  //Input video
  if (url === "/new/video") {
    catTest = (
      <NewVideo
        categoryList={
          categoryList && categoryList.map((data) => data.categories)
        }
      />
    );
    //Inputs category
  } else if (url === "/new/category") {
    catTest = (
      <NewCategory
        categoryList={
          categoryList && categoryList.map((data) => data.categories)
        }
      />
    );
  }

  return (
    <>
      <Header />
      {catTest}
    </>
  );
};

export default NewContent;
