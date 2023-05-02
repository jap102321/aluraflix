import MovieRoulette from "../components/Movies/MovieRoulette.jsx";
import Banner from "../components/banner/Banner.js";
import Header from "../components/header/Header.js";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <MovieRoulette url={"/movies"} />
    </div>
  );
};

export default Home;
