import { useLocation } from "react-router-dom";
import Card from "../components/AddContent/Card";
import Header from "../components/header/Header";
import NewVideo from "../components/AddContent/NewVideo";
import NewCategory from "../components/AddContent/NewCategory";

const NewContent = ({ path }) => {
  const url = useLocation().pathname;
  let catTest = <p>Page undefined</p>;

  //Input video
  if (url === "/new/video") {
    catTest = <NewVideo />;
    //Inputs category
  } else if (url === "/new/category") {
    catTest = <NewCategory />;
  }

  return (
    <>
      <Header />
      {catTest}
      <Card />
    </>
  );
};

export default NewContent;
