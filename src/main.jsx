import React from  "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import Context from "./Components/context/Context"

createRoot(document.getElementById("root")).render(<Context><App></App></Context>)