import './App.css';
import {Logo, Menu} from "./components/navbar";
import Maintext from "./components/maintext";
import Button from "./components/button";
import Gallery from "./components/gallery";

function App() {
  return (
    <div className="App">
      <Logo />
      <Menu />
      <Maintext />
      <Button />
      <Gallery />
    </div>
  );
}

export default App;
