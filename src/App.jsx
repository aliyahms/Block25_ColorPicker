import { useState } from "react";

const Swatch = ({ color, setSelectedColor }) => {
  return (
    <li
      className={color}
      onClick={() => {
        setSelectedColor(color);
      }}
    ></li>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <>
      <header id="header">
        <dl id="descriptionList">
          <dt>Currently selected: </dt>
          <dd className={selectedColor}>{selectedColor}</dd>
        </dl>
      </header>
      <menu id="colors-list">
        <Swatch color="yellow" setSelectedColor={setSelectedColor} />
        <Swatch color="green" setSelectedColor={setSelectedColor} />
        <Swatch color="black" setSelectedColor={setSelectedColor} />
      </menu>
    </>
  );
};

export default App;
