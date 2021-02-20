import React from "react";
import headerLogo from "../../img/logo.png";
import ForbesLogo from "../../img/logo-forbes.png";
import TechLogo from "../../img/logo-techcrunch.png";
import BBCLogo from "../../img/logo-bbc.png";
import BisLogo from "../../img/logo-bi.png";

const Header = () => {
  return (
    <header className="header">
      <img src={headerLogo} alt="Logo" className="header_logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header_btn">View our properties</button>
      <div className="header_seenon-text">Seen on</div>
      <div className="header_seenon-logos">
        <img src={BBCLogo} alt="Seen on logo 1" />
        <img src={ForbesLogo} alt="Seen on logo 2" />
        <img src={TechLogo} alt="Seen on logo 3" />
        <img src={BisLogo} alt="Seen on logo 4" />
      </div>
    </header>
  );
};

export default Header;
