import React from "react";

function Log({ turns ,appear}) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row} ${turn.square.col}`}>
          {appear[turn.player]} selected {turn.square.col} , {turn.square.row}
        </li>
      ))}
    </ol>
  );
}

export default Log;
