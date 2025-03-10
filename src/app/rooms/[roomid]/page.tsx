import { getRoom } from "@/services/roomApi";
import Image from "next/image";
import React from "react";

interface Props {
  params: Promise<{ roomid: string }>;
}

export const generateMetadata = async ({ params }: Props) => {
  const { roomid } = await params;
  const room = await getRoom(Number(roomid));
  return {
    title: room.name,
  };
};

export default async function page({ params }: Props) {
  const { roomid } = await params;
  const room = await getRoom(Number(roomid));
  console.log(room);
  return (
    <div>
      <Image src={room.image} alt={room.name} width={300} height={300} />
      <h1>{room.name}</h1>
    </div>
  );
}
