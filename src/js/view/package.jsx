export default function Packages(props) {
  return (
    <>
      <div className="single-card">
        <div className="card-front cardSide">
          <img
            src={props.img}
            alt="image not found"
            className="imageCard"
          />
          <div className="CardInfo">
            <h3 className="cardTitle">{props.title}</h3>
            <p className="card-info">
              {props.description}
            </p>
            <div className="card-change">
              <h2>{props.tripDate}days</h2>
              <h2>${props.price}</h2>
            </div>
            <div className="icon-card">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
          </div>
        </div>
        <div className="card-back cardSide">
          <a href={props.link} className="btn">
            show more
          </a>
        </div>
      </div>
    </>
  );
}
