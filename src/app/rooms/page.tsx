import Filter from "@/components/Filter";
import RoomList from "@/components/RoomList";
import Spinner from "@/components/Spinner";
import React, { Suspense } from "react";

interface Props {
  searchParams: Promise<{ capacity?: string }>;
}

export const metadata = {
  title: "rooms",
};

export const revalidate = 10;

export default async function page({ searchParams }: Props) {
  const params = await searchParams;
  const filteredValue = params?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-teal-300 font-medium">
        Our Luxury Rooms
      </h1>
      <p className="text-gray-300 text-lg mb-10">
        Cozy yet luxurious Rooms, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy natures beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>

      <Filter />

      <Suspense fallback={<Spinner />}>
        <RoomList filteredValue={filteredValue} />
      </Suspense>
    </div>
  );
}
