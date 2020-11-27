import React, { useContext } from "react";
import RoomFilter from "./RoomFilter/RoomFilter";
import RoomList from "./RoomList/RoomList";
import { RoomContext } from "../../../Utility/Context";
import Spinner from "../../../UI/Spinner/Spinner";

export default function RoomContainer() {
  const { rooms, sortedRooms, loading } = useContext(RoomContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList sortedRooms={sortedRooms} />
    </div>
  );
}
