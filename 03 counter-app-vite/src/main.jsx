import React from "react";
import ReactDOM from "react-dom/client";
import { AppInit } from "./HelloWorldApp";
import { AppTwo } from "./FirstApp";
import { AppThree } from "./SecondApp";
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <AppInit />
      <AppTwo title='Hola soy Jordan' subTitle='my subtitle' idNumber={1234} />
      <AppThree />
    </React.StrictMode>,
  )
  