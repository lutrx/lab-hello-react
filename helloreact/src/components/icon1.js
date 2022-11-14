//Import the picture from the source:

import myImage from "../images/icon1.png"

function ImageOne() {
    return (
        <img 
            src={myImage}
            alt="icon1"
        />
    );
}

export default ImageOne;