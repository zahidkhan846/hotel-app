import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="loading">
      <h4>rooms are loading...</h4>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
