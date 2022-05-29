import React from 'react';

import Menu from './Menu';
export default function Components() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Menu />
        </div>
        <div className="col-6">b</div>
      </div>
      <div className="row">
        <div className="col-6">c</div>
        <div className="col-6">d</div>
      </div>
    </div>
  );
}
