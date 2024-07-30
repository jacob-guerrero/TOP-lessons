import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";
import RenderName from "./components/RenderName";

function App() {
  return (
    <>
      <RenderName name={"Jhon Doe"}></RenderName>
      <RenderName></RenderName>
    </>
  );
}

export default App;
