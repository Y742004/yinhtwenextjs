import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {

const toRead = await db.loom.findMany(
//     {
//   include: { user: true,  },}
);
return NextResponse.json(toRead);
}
 
 

export async function POST(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toCreate = await db.loom.create({
    data: {
      title: wow.title,
       videoId: wow.videoId,
      userId: wow.userId,
    },
  });
  return NextResponse.json(toCreate);
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toDelete = await db.loom.delete({
    where: {
      id: wow.id,
    },
  });
  return NextResponse.json(toDelete);
}
