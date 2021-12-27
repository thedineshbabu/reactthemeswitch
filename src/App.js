import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./context";
import Toggle from "./components/Toggle";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#282c34" : "#fff",
        color: darkMode ? "#fff" : "#282c34",
      }}
    >
      <Toggle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
