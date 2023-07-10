import "./Card.css";

const Card = (props) => {
  const { cardImg, name, population, region, capital } = props;
  return (
    <li className="item-card">
    <a className="link" href="#">
      <img className="" width={267} height={167} src={props.cardImg} />
    </a>
      <div className="wrapper">
      <h2 className="countries__name">{name}</h2>
      <p className="desc">
        <strong className="desc__info">Population:</strong>
        {population}
      </p>
      <p className="desc">
        <strong className="desc__info">Region:</strong>
        {region}
      </p>
      <p className="desc">
        <strong className="desc__info">Capital:</strong>
        {capital}
      </p>

      </div>
    </li>
  );
};
export default Card;
