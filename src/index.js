import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sortly, { ContextProvider, useDrag, useDrop } from "react-sortly";

const ItemRenderer = (props) => {
  const {
    data: { name, depth },
  } = props;

  const [, drag] = useDrag();
  const [, drop] = useDrop();

  return (
    <div ref={drop}>
      <div ref={drag} style={{ marginLeft: depth * 20 }}>
        {name}
      </div>
    </div>
  );
};

const MySortableTree = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Priscilla Cormier", depth: 0 },
    { id: 2, name: "Miss Erich Bartoletti", depth: 0 },
    { id: 3, name: "Alison Friesen", depth: 1 },
    { id: 4, name: "Bernita Mayert", depth: 2 },
    { id: 5, name: "Garfield Berge", depth: 0 },
  ]);
  const handleChange = (newItems) => {
    setItems(newItems);
  };

  return (
    <Sortly items={items} onChange={handleChange}>
      {(props) => <ItemRenderer {...props} />}
    </Sortly>
  );
};

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <ContextProvider>
      <MySortableTree />
    </ContextProvider>
  </DndProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
