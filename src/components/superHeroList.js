import SuperHero from "./superHero";

function SuperHeroList({ allHeroes }) {
  return (
    <main className="container">
      <div className="cards">
        {allHeroes &&
          allHeroes.map((heroCard, i) => (
            <SuperHero heroCard={heroCard} key={i} />
          ))}
      </div>
    </main>
  );
}

export default SuperHeroList;
