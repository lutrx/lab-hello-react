import myImageLogo from "../images/ironhack-logo-xs.png";
import myImageButton from "../images/menu-top-xs.png";

function Logo() {
    return (
        <img 
            src={myImageLogo}
            alt="Logo"
        />
    );
}

function Menu() {
    return (
        <img 
            src={myImageButton}
            alt="Logo"
        />
    );
}

export {Logo, Menu};