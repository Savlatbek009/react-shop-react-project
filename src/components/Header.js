import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-danger p-3 bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand text-white">
            <h3>SHOP</h3>
          </a>
          <div className="d-flex text-white">
            <h3>REPO</h3>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
