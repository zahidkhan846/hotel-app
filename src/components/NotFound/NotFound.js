import React from "react";
import Hero from "../Hero/Hero";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";

export default function NotFound() {
  return (
    <Hero hero="roomsHero">
      <Banner title="404" subtitle="Page Not Found">
        <div />
        <Link to="/" className="btn-primary">
          Home
        </Link>
      </Banner>
    </Hero>
  );
}
