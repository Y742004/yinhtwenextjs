import { db } from "@/lib/db";
import { get } from "http";
import { NextRequest, NextResponse } from "next/server";
export async function GET(res: NextRequest, { params }: any) {
    const getData = await db.loom.findFirst({
      where: {
        id: params.idloom,
      },
    });
    return NextResponse.json(getData);
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
  