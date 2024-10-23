import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const youtubeId = req.nextUrl.searchParams.get("youtubeId");

  const toRead = await db.reaction.findMany({
    where: { youtubeId,
      
    },
    include: { user: true, youtube: true },
  });
  return NextResponse.json(toRead);
}

 