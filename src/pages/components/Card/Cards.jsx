import React from "react";
import "./Cards.css";
import menu from "../../../assets/icons//menu.png";
import AvatarImg from "../../../assets/images/avatar.png";
export default function Cards() {
  return (
    <div className="container cards">
      <div className="row justify-content-end">
        <img src={menu} className="menu-img" alt="" />
      </div>
      <div className="row">
        <div className="row">
          <p className="card-title">Project P4423</p>
        </div>
        <div className="row">
          <p className="card-text">01/20/2019</p>
        </div>
      </div>
      <div className="row">
        <div className="row">
          <p className="card-title">Amazon Prime</p>
        </div>
        <div className="row">
          <p className="card-text">Los Angeles, USA</p>
        </div>
      </div>
      <div className="row">
        <div className="row">
          <p className="card-title">Software Development</p>
        </div>
        <div className="row">
          <p className="card-text">Node.JS, C#, Linux</p>
        </div>
      </div>
      <div className="row">
        <div className="row">
          <p className="card-title">Location</p>
        </div>
        <div className="row">
          <p className="blue-text">View map</p>
        </div>
      </div>
      <div className="row upper-side-last-row">
        <div className="col-9">
          <div className="row">
            <p className="card-title">Harinder Mondi</p>
          </div>
          <div className="row">
            <p className="card-text">Senior Developer</p>
          </div>
        </div>
        <div className="col-2">
          <img src={AvatarImg} className="card-img" />
        </div>
      </div>
      <div className="row">
        <div className="row justify-content-center">
          <p className="orange-text">
            <div className="circle"></div>WAITING FOR APPROVE
          </p>
        </div>
        <div className="row">
          <p className="card-text" style={{ marginLeft: "17px" }}>
            UNDER DEVELOPMENT
          </p>
        </div>
      </div>
    </div>
  );
}
