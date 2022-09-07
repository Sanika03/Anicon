import "./styles.css";

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