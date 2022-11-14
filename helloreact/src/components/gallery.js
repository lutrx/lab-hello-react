//First importing the pictures I need:

import ImageOne from "./icon1";
import ImageTwo from "./icon2";
import ImageThree from "./icon3";
import ImageFour from "./icon4";

//React Component <Gallery />

function Gallery() {
    return (
        <div id="gallery">
            <div className="inline">
                <ImageOne />
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="inline">
                <ImageTwo />
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="inline">
                <ImageThree />
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the components.</p>
            </div>
            <div className="inline">
                <ImageFour />
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    );
}

export default Gallery;