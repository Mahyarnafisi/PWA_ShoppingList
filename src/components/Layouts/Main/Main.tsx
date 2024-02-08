import React from "react";
import Styles from "./Main.module.css";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className={Styles.main}>
      <Outlet />
    </div>
  );
}

export default Main;
