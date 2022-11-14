import './App.css';
import {Logo, Menu} from "./components/navbar";
import Maintext from "./components/maintext";
import Button from "./components/button";
import Gallery from "./components/gallery";

function App() {
  return (
    <div className="App">
    <div className="Toparea">
      <nav>
        <Logo />
        <Menu />
      </nav>
      <Maintext />
      <Button />
    </div>
    <div className="Bottomarea">
      <Gallery />
    </div>
    </div>
  );
}

export default App;
