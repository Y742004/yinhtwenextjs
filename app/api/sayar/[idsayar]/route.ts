import { db } from "@/lib/db";
import { get } from "http";
import { NextRequest, NextResponse } from "next/server";
export async function GET(res: NextRequest, { params }: any) {
    const getData = await db.sayar.findFirst({
      where: {
        id: params.idsayar,
      },
    });
    return NextResponse.json(getData);
  }

  export async function DELETE(req: NextRequest, res: NextResponse) {
    const wow = await req.json();
    const toDelete = await db.sayar.delete({
      where: {
        id: wow.id,
      },
    });
    return NextResponse.json(toDelete);
  }
  