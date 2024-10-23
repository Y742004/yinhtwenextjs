import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const toRead = await db.lesson.findMany();
  return NextResponse.json(toRead);
}

export async function POST(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toCreate = await db.lesson.create({
    data: { title: wow.title, description: wow.description, video: wow.video },
  });
  return NextResponse.json(toCreate);
}


export async function DELETE(req: NextRequest, res: NextResponse) {
    const wow = await req.json();
    const toDelete = await db.lesson.delete({
      where: {
        id: wow.id,
      }
    })
 return NextResponse.json(toDelete);

   
}
