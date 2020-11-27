import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import RoomContainer from "../../components/Room/RoomContainer/RoomContainer";

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <div />
          <Link to="/" className="btn-primary">
            Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
}
