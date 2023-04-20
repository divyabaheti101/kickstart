import React from "react";
import { Header } from "./Header";

export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
      {/* <h3>Footer<h3/> */}
    </div>
  );
};
