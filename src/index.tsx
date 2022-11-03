import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import './style.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
ReactDOM.render(<Footer />, document.getElementById("footer"));
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<MainContent />, document.getElementById("maincontent"));
