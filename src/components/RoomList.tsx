import { getrooms } from "@/services/roomApi";
import RoomType from "@/types/roomType";
import React from "react";
import RoomCard from "./RoomCard";

interface Props {
  filteredValue: string;
}

export default async function RoomList({ filteredValue }: Props) {
  const rooms = await getrooms();

  let filteredRooms: RoomType[] = [];

  if (filteredValue === "all") {
    filteredRooms = rooms;
  }

  if (filteredValue === "small") {
    filteredRooms = rooms.filter((room) => room.maxCapacity <= 2);
  }
  if (filteredValue === "medium") {
    filteredRooms = rooms.filter(
      (room) => room.maxCapacity > 2 && room.maxCapacity <= 4
    );
  }
  if (filteredValue === "large") {
    filteredRooms = rooms.filter((room) => room.maxCapacity > 4);
  }

  console.log(filteredRooms);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredRooms.map((rooms: RoomType) => (
        <RoomCard key={rooms.id} rooms={rooms} />
      ))}
    </div>
  );
}
