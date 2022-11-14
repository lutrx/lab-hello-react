import myImageLogo from "../images/ironhack-logo-xs.png";
import myImageButton from "../images/menu-top-xs.png";

export function Logo() {
    return (
        <img 
            src={myImageLogo}
            alt="Logo"
        />
    );
}

export function Menu() {
    return (
        <img 
            src={myImageButton}
            alt="Menu"
        />
    );
}

