import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <img src={process.env.PUBLIC_URL + "/logo-white.png"} alt="Logo white" className="footer_img" />
      <p className="footer_text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
