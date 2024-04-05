import { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (!isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (event.key === "Enter") {
        onChangeName(symbol, playerName);
      }
    }
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        className="player-name"
        type="text"
        value={playerName}
        onChange={handleChange}
        required
        onKeyDown={handleKeyPress}
        onBlur={() => onChangeName(symbol, playerName)}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
