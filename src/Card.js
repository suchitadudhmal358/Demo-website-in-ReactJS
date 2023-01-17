import React from "react";

const Card = ({
  title = "Card title",
  cardText = "Anything",
  btnText = "Go somewhere",
}) => (
  <div className="card" style={{ width: "18rem" }}>
    <img
      src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      className="card-img-top"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{cardText}</p>
      <a href="#" className="btn btn-success">
        {btnText}
      </a>
    </div>
  </div>
);

export default Card;
