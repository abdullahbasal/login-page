import React from "react";
import loadingImg from "../../../assets/icons/loading.png";
import plus from "../../../assets/icons/plus.png";
import "./Button.css";
export default function Button() {
  return (
    <div className="container  button-container">
      <div className="row justify-content-center">
        <button className="example-button normal">
          <span>Normal</span>
        </button>
      </div>

      <div className="row justify-content-center">
        <button className="example-button normal">
          <img src={plus} className="plus" />
          Glyph
        </button>
      </div>

      <div className="row justify-content-center">
        <button className="example-button hover">Hover</button>
      </div>

      <div className="row justify-content-center">
        <button className="example-button waiting-button">
          <img src={loadingImg} className="waiting-img" alt="" srcset="" />
        </button>
      </div>

      <div className="row justify-content-center">
        <button className="example-button special">Special</button>
      </div>

      <div className="row justify-content-center">
        <button className="example-button disabled">Disabled</button>
      </div>
    </div>
  );
}
