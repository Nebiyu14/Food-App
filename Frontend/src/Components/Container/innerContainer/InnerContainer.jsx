import React from "react";
import style from "./innerContainer.module.css"

function InnerContainer({children}) {
  return <div className={style.innerContainer}>
    {children}
  </div>;
}
export default InnerContainer;
