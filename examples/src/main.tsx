import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorld } from "nozo-markdown-editor";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelloWorld title="hoge" />
  </React.StrictMode>
);
