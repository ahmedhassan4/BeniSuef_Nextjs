import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-24">
      <Image
        src="/bg-home.jpg"
        alt="hero"
        fill
        className="object-cover filter brightness-50"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-7xl text-primary-50 mb-10 -tracking-tight font-normal text-white">
          Welcome to RentRooms.
        </h1>
        <Link
          href="/rooms"
          className="bg-teal-400 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all rounded-full"
        >
          Find Rooms
        </Link>
      </div>
    </div>
  );
}
