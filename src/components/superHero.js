import { Link } from "react-router-dom";

function SuperHero({ heroCard }) {
  return (
    heroCard && (
      <Link className="" to={"/details/" + heroCard.id}>
        <div
          className="card"
          style={{ backgroundImage: "url(" + heroCard.image.url + ")" }}
        >
          <span className="card-text" to={"/details/" + heroCard.id}>
            {heroCard.name}
          </span>
        </div>
      </Link>
    )
  );
}

export default SuperHero;
