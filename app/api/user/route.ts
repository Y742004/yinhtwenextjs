import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const toRead = await db.user.findMany();
  return NextResponse.json(toRead);
}

export async function POST(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toCreate = await db.user.create({
    data: { email: wow.email },
  });
  return NextResponse.json(toCreate);
}



export async function DELETE(req: NextRequest, res: NextResponse) {
    const wow = await req.json();
    const toDelete = await db.user.delete({
      where: {
        id: wow.id, 
      }
    })
 return NextResponse.json(toDelete);

   
}
