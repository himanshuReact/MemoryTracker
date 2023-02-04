import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BoxesRow from "./BoxesRow";

function getInitialState(config) {
  return config.map((row) => {
    return row.map((isBoxVisible) => {
      if (isBoxVisible) {
        return { id: uuidv4(), isClicked: false };
      }
      return null;
    });
  });
}

export default function BoxesContainer({ config }) {
  const [boxesState, setBoxesState] = useState(() => getInitialState(config));
  return (
    <div className="boxesContainer">
      {boxesState.map((row, index) => {
        return <BoxesRow key={index} rowBoxesState={row} />;
      })}
    </div>
  );
}
