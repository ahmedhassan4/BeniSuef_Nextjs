import RoomType from "@/types/roomType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  rooms: RoomType;
}

export default function RoomCard({ rooms }: Props) {
  return (
    <div>
      <Image src={rooms.image} alt={rooms.name} width={300} height={300} />
      <p>{rooms.name}</p>
      <p>{rooms.regularPrice}</p>
      <Link href={`/rooms/${rooms.id}`}>View Room</Link>
    </div>
  );
}
