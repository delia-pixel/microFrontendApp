import React from "react";
import ReactDOM from "react-dom/client";
import TestPage from "remote/TestPage";
import Button from "./components/Button";

import "./index.css";

const App = () => (
  <div className="container flex">
    <div>Name: container</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button />
    <TestPage />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
