const Connections = ({ heroDetail }) => {
  return (
    <div
      className="connections"
      style={{ maxWidth: "586.48px", margin: "auto" }}
    >
      <div className="connection-label mt-2">Group Affiliation</div>
      <div style={{ textAlign: "justify" }}>
        {heroDetail.connections["group-affiliation"]}
      </div>
      <div className="connection-label mt-4">Relatives</div>
      <div style={{ textAlign: "justify" }}>
        {heroDetail.connections["relatives"]}
      </div>
      <div className="connection-label mt-4">Occupation</div>
      <div style={{ textAlign: "justify" }}>
        {heroDetail.work["occupation"]}
      </div>
      <div className="connection-label mt-4">Base</div>
      <div style={{ textAlign: "justify" }}>
        {heroDetail.work["base"]}
      </div>
    </div>
  );
};

export default Connections;
