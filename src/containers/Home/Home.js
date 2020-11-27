import React from "react";
import Banner from "../../components/Banner/Banner";
import Hero from "../../components/Hero/Hero";
import { Link } from "react-router-dom";
import Services from "../Serveices/Services";
import FeaturedRoom from "../../components/FeaturedRooms/FeaturedRoom";

export default function Home(props) {
  return (
    <>
      <Hero>
        <Banner title="LUXURIOUS ROOMS" subtitle="delux rooms starting at 299">
          <div />
          <Link to="rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </>
  );
}
