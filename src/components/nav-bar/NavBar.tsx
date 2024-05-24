import React from "react";
import logo from "./assets/logo.jpg.svg";
import './NavBar.css'

interface NavBarProps  {
  onAboutUsClick: () => void;
  onContactClick: () => void;
  onSomethingClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  onAboutUsClick,
  onContactClick,
  onSomethingClick,
}) => {
  const handleAboutUsClick = () => {
    const SecondSection = document.getElementById("SecondSection");
    if (SecondSection) {
      SecondSection.scrollIntoView({behavior: "smooth"});
    }
    onAboutUsClick();
  };

  return (
    <div className="header" style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1 }}>
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="button-container">
        <button onClick={handleAboutUsClick} style={{ position: "absolute", top: "10px", left: "calc(50% - 60px)", transform: "translateX(-200%)" }}>about us</button>
        <button onClick={onContactClick} style={{ position: "absolute", top: "10px", left: "50%", transform: "translateX(50%)" }}>contact</button>
        <button onClick={onSomethingClick} style={{ position: "absolute", top: "10px", left: "calc(50% + 60px)", transform: "translateX(250%)" }}>something</button>
      </div>
    </div>
  );
};

export default NavBar;

