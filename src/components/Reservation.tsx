import RoomType from "@/types/roomType";
import ReservationForm from "./ReservationForm";

interface Props {
  room: RoomType;
}

async function Reservation({ room }: Props) {
  return (
    <div className=" border border-gray-800 min-h-[400px]">
      <ReservationForm room={room} />
    </div>
  );
}

export default Reservation;
