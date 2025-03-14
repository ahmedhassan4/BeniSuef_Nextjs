import { getRoom } from "@/services/roomApi";

interface Props {
  params: Promise<{ roomid: string }>;
}
export async function GET(request: Request, { params }: Props) {
  const { roomid } = await params;
  const room = await getRoom(Number(roomid));
  return Response.json({ room }, { status: 200 });
}
