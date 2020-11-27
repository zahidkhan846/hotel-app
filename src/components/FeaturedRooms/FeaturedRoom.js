import React, { useContext } from "react";
import { RoomContext } from "../../Utility/Context";
import Spinner from "../../UI/Spinner/Spinner";
import Room from "../Room/Room";
import Title from "../Title/Title";
import "./FeaturedRoom.css";

export default function FeaturedRooms() {
  const { loading, featuredRooms } = useContext(RoomContext);

  const fRooms = featuredRooms.map((fRoom) => (
    <Room key={fRoom.id} fRoom={fRoom} />
  ));

  return (
    <section className="featured-rooms">
      <Title title="featured Rooms" />
      <div className="featured-rooms-center">
        {loading ? <Spinner /> : fRooms}
      </div>
    </section>
  );
}
