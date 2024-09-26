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
        <Swatch
          color="yellow"
          setSelectedColorSelectedColor={setSelectedColor}
        />
        <Swatch
          color="green"
          setSelectedColoretSelectedColor={setSelectedColor}
        />
        <Swatch
          color="black"
          setSelectedColoretSelectedColor={setSelectedColor}
        />
      </menu>
    </>
  );
};

export default App;
