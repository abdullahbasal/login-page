import React from "react";
import Button from "./Button/Button";
import Cards from "./Card/Cards";
import Menu from "./Menu/Menu";
export default function Components() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Menu />
        </div>
        <div className="col-6">
          <Button />
        </div>
      </div>
      <div className="row">
        <div className="col-12 cards-container">
          <Cards />
        </div>
      </div>
    </div>
  );
}
