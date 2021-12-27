import React, { useContext } from "react";
import { ThemeContext } from "../context";
import Sun from "../img/sun.png";
import Moon from "../img/moon.png";
import "./Toggle.css";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div
      className="t"
      style={{
        border: !theme.state.darkMode ? "1px solid #999" : "1px solid #fff",
      }}
    >
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        style={{ left: theme.state.darkMode ? 0 : 25 }}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Toggle;
