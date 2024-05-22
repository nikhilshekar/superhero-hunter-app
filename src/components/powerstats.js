const Powerstats = ({ heroDetail }) => {
  return (
    <div className="powerstats">
      <div className="powerstats-row">
        <div>
          <i className="fa-brands fa-jedi-order mx-2 red"></i>Power
        </div>
        <div>{heroDetail.powerstats.power}</div>
      </div>
      <div className="powerstats-row">
        <div>
          <i className="fa-brands fa-old-republic mx-2 red"></i>Combat
        </div>
        <div>{heroDetail.powerstats.combat}</div>
      </div>
      <div className="powerstats-row">
        <div>
          <i className="fa-solid fa-brain mx-2 red"></i>Intelligence
        </div>
        <div>{heroDetail.powerstats.intelligence}</div>
      </div>
      <div className="powerstats-row">
        <div>
          <i className="fa-solid fa-shield-halved mx-2 red"></i>Strength
        </div>
        <div>{heroDetail.powerstats.strength}</div>
      </div>
      <div className="powerstats-row">
        <div>
          <i className="fa-brands fa-galactic-senate mx-2 red"></i>Speed
        </div>
        <div>{heroDetail.powerstats.speed}</div>
      </div>
      <div className="powerstats-row">
        <div>
          <i className="fa-brands fa-galactic-republic mx-2 red"></i>Durability
        </div>
        <div>{heroDetail.powerstats.durability}</div>
      </div>
    </div>
  );
};

export default Powerstats;
