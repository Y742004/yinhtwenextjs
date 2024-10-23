import { db } from "@/lib/db";
import { get } from "http";
import { NextRequest, NextResponse } from "next/server";
export async function GET(res: NextRequest, { params }: any) {
    const getData = await db.youtube.findFirst({
      where: {
        id: params.idyoutube,
      },
    });
    return NextResponse.json(getData);
  }

  export async function DELETE(req: NextRequest, res: NextResponse) {
    const wow = await req.json();
    const toDelete = await db.youtube.delete({
      where: {
        id: wow.id,
      },
    });
    return NextResponse.json(toDelete);
  }
  