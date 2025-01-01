import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//import Library from "./chapter_03/Library"; // Library.jsx import 추가
// import Clock from "./chapter_04/Clock";
// import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";

// ReactDOM을 사용하여, root DOM 내부에 Library, Clock.jsx...를 사용하도록 수정
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
