import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA6iXDq5FpL8bUZJTsI7KGDPzao4IaYjfU",
  authDomain: "doodlenotes-4dd7e.firebaseapp.com",
  projectId: "doodlenotes-4dd7e",
  storageBucket: "doodlenotes-4dd7e.appspot.com",
  messagingSenderId: "450247543877",
  appId: "1:450247543877:web:39050a53adb67e8480672c",
  measurementId: "G-CE98B2R6B9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
