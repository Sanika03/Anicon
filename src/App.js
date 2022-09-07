import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🐕": "Dog",
  "🐈": "Cat",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐄": "Cow",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🐎": "Horse",
  "🦌": "Deer"
};

export default function App() {
  return (
    <div className="App">
      <h1>Anicon</h1>
      <input
        placeholder="Type your emoji here"
        onChange={emojiInputHandler}
      ></input>
    </div>
  );
}