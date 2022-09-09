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

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We do not have this value in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  
  return (
    <div className="App">
      
      <h1>Anicon</h1>
      
      <input
        placeholder="Type your emoji here"
        onChange={emojiInputHandler}
      ></input>
      
      <h2>{meaning}</h2>
      
      <h3>Emojis we know</h3>
      
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}