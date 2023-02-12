import React, { useState } from "react";

export default function Start(props) {
  return (
    <div className="start">
      <img
        className="yellow blob"
        src="/images/yellow blob.png"
        alt="yellow blob"
      />
      <img className="blue blob" src="/images/blue blob.png" alt="blue blob" />
      <div className="intro--container">
        <h1 className="title">Quizzical</h1>
        <button
          onClick={props.startGame}
          className="btn-start"
          name="Start quiz"
        >
          Start quiz
        </button>
      </div>
    </div>
  );
}
