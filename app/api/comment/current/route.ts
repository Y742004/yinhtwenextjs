import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const loomId = req.nextUrl.searchParams.get("loomId");

  const toRead = await db.comment.findMany({
    where: { loomId,
      
    },
    include: { user: true, loom: true },
  });
  return NextResponse.json(toRead);
}

 