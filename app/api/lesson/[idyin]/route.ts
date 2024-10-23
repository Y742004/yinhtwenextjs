import { db } from "@/lib/db";
import { get } from "http";
import { NextRequest, NextResponse } from "next/server";

export async function GET(res: NextRequest, { params }: any) {
  const getData = await db.lesson.findFirst({
    where: {
      id: params.idyin,
    },
  });
  return NextResponse.json(getData);
}
