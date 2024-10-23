import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const toRead = await db.reaction.findMany({
    include: { user: true, youtube: true },
  });
  return NextResponse.json(toRead);
}

export async function POST(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toCreate = await db.reaction.create({
    data: { type: wow.type, userId: wow.userId, youtubeId: wow.youtubeId },
  });
  return NextResponse.json(toCreate);
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toDelete = await db.reaction.delete({
    where: {
      id: wow.id,
    },
  });
  return NextResponse.json(toDelete);
}
