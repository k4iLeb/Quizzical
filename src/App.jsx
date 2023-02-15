import React, { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Start from "./components/Start";

export default function App() {
  // ! TURN TO FALSE WHEN DONE
  const [game, setGame] = useState(false);

  function toggleGame() {
    setGame(true);
  }

  return (
    <div className="container">
      {!game && <Start startGame={toggleGame} />}
      {game && <Quiz />}
    </div>
  );
}
