import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer bg-danger text-white p-3">
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <h3>Made with react.js</h3>
          <h3>&copy;{new Date().getFullYear()} copy right</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
