import React from "react";
import Card from "./Card";

const CardSection = () => (
  <section className="contact bg-success pb-4 ">
    <div className="container ">
      <h2 className="text-white">We love new friends!</h2>
      <div className="row">
        <div className="col-4">
          <Card
            title="Suchita Manohare"
            cardText="Some quick example text to build on the card title and make up
                the bulk of the card's content."
            btnText="View More"
          />
        </div>
        <div className="col-4">
          <Card
            title="Dinesh Manohare"
            cardText="Some quick example text to build on the card title and make up
                the bulk of the card's content."
            btnText="View More"
          />
        </div>
        <div className="col-4">
          <Card
            title="Vivek Manohare"
            cardText="Some quick example text to build on the card title and make up
                the bulk of the card's content."
            btnText="View More"
          />
        </div>
      </div>
    </div>
  </section>
);

export default CardSection;
