import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/scss/style.scss";
import axios from "axios";

setInterval(() => {
  axios.get("https://api-portfolio-leoruhl.herokuapp.com/server-up")
    .then(data => console.log(data.data))
},1000000)

ReactDOM.render(
  <App />,
  document.getElementById("root"),
  document.body.classList.add("loaded")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
