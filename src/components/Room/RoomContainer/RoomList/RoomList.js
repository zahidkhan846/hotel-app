import React from "react";
import Room from "./../../Room";
import "./RoomList.css";

export default function RoomList({ sortedRooms }) {
  if (sortedRooms.length < 1) {
    return (
      <div className="empty-search">
        <h3>Unfortunately No Rooms matched your search</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {sortedRooms.map((room) => (
          <Room key={room.id} fRoom={room} />
        ))}
      </div>
    </section>
  );
}
