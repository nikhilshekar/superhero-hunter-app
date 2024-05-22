const Appearance = ({ heroDetail }) => {
  return (
    <div className="appearance">
      <div className="appearance-row">
        <div>
          <i className="fa-solid fa-star mx-2 yellow"></i>Gender
        </div>
        <div>{heroDetail.appearance.gender}</div>
      </div>
      <div className="appearance-row">
        <div>
          <i className="fa-solid fa-star mx-2 yellow"></i>Race
        </div>
        <div>{heroDetail.appearance.race}</div>
      </div>
      <div className="appearance-row">
        <div>
          <i className="fa-solid fa-star mx-2 yellow"></i>Height
        </div>
        <div>{heroDetail.appearance.height[0]}</div>
      </div>
      <div className="appearance-row">
        <div>
          <i className="fa-solid fa-star mx-2 yellow"></i>Weight
        </div>
        <div>{heroDetail.appearance.weight[1]}</div>
      </div>
      <div className="appearance-row">
        <div>
          <i className="fa-solid fa-star mx-2 yellow"></i>Eye Color
        </div>
        <div>{heroDetail.appearance['eye-color']}</div>
      </div>
      <div className="appearance-row">
        <div>
          <i className="fa-solid fa-star mx-2 yellow"></i>Hair Color
        </div>
        <div>{heroDetail.appearance['hair-color']}</div>
      </div>
    </div>
  );
};

export default Appearance;
