const Biography = ({ heroDetail }) => {
  return (
    <div className="biography">
      <div className="biography-row">
        <span className="biography-label">Full Name </span>
        <span>{heroDetail.biography["full-name"]}</span>
      </div>
      <div className="biography-row">
        <span className="biography-label">Place of Birth </span>
        <span>{heroDetail.biography["place-of-birth"]}</span>
      </div>
      <div className="biography-row">
        <span className="biography-label">Alter-Egos </span>
        <span>{heroDetail.biography["alter-egos"]}</span>
      </div>
      <div className="biography-row">
        <span className="biography-label me-3" >Aliases </span>
        <span style={{textAlign:"justify"}}>{heroDetail.biography["aliases"].join(", ")}</span>
      </div>
      <div className="biography-row">
        <span className="biography-label me-3">First Appearance </span>
        <span>{heroDetail.biography["first-appearance"]}</span>
      </div>
      <div className="biography-row">
        <span className="biography-label">Publisher</span>
        <span>{heroDetail.biography["publisher"]}</span>
      </div>
      <div className="biography-row">
        <span className="biography-label">Alignment</span>
        <span>{heroDetail.biography["alignment"]}</span>
      </div>
    </div>
  );
};

export default Biography;
