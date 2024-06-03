import Movie from "./Movie";
import Search from "./Search";
import Navbar from "./pages/Navbar";

const Home = () => {
  return (
    <>
    
      <div className="container">
        
        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;
