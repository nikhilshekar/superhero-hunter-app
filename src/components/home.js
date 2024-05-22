import Navbar from "./navbar";
import BackgroundVideo from "./background";
import SuperHeroList from "./superHeroList";


function Home({ allHeroes, search, setSearch }) {
  return (
    <>
      <BackgroundVideo />
      <Navbar search={search} setSearch={setSearch} />
      {allHeroes && <SuperHeroList allHeroes={allHeroes} />}
    </>
  );
}

export default Home;
