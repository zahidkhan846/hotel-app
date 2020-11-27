import React from "react";
import "./Hero.css";

export default function Hero(props) {
  return <header className={props.hero}>{props.children}</header>;
}

Hero.defaultProps = {
  hero: "defaultHero",
};
