import React from "react";
import "./Banner.css";

export default function Banner(props) {
  return (
    <div className="banner">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      {props.children}
    </div>
  );
}
