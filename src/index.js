import React from "react"
import ReactDOM from "react-dom"
import {Corner } from "./components/Corner"
import {BrowserRouter as Router} from "react-router-dom"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Corner />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')

)