import logo from "./assets/logo.jpg.svg";
import './NavBar.css'


const NavBar = () =>
    <div className="header">
        <div className="logo-container">
            <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className="button-container">
            <button onClick={handleAboutUsClick} className="about-us">about us</button>
            <button onClick={handleContactClick} className="contact">contact</button>
            <button onClick={handleSomethingClick} className="something">something</button>
        </div>
    </div>

const handleAboutUsClick = () => {
    const SecondSection = document.getElementById("SecondSection");
    if (SecondSection) {
        SecondSection.scrollIntoView({behavior: "smooth"});
    }
}

const handleContactClick = () => {
}

const handleSomethingClick = () => {
}

export default NavBar;
