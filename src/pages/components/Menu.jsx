import React from 'react';
import JohnImg from '../../assets/images/John.png';
import location from '../../assets/icons/location.png';
import logout from '../../assets/icons/logout.png';
import settings from '../../assets/icons/settings.png';
import users from '../../assets/icons/users.png';
import './Menu.css';
export default function Menu() {
  return (
    <>
      <div className="card">
        <div className="card-img-top">
          <img src={JohnImg} className="profil-img" alt="Card image cap" />
          <p>John M. Doe</p>
          <p>john.doe@lenasoftware.com</p>
        </div>
        <div className="card-body">
          <div className="row">
            <span className="icon-span">
              <img src={users} className="icons" /> Users
            </span>
          </div>
          <div className="row">
            <span className="icon-span">
              <img src={location} className="icons" /> Location
            </span>
          </div>
          <div className="row">
            <span className="icon-span">
              <img src={settings} className="icons" /> Settings
            </span>
          </div>
          <div className="row">
            <span className="icon-span">
              <img src={logout} className="icons" /> Logout
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
