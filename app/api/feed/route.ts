import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const toRead = await db.feed.findMany();
  return NextResponse.json(toRead);
}

export async function POST(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toCreate = await db.feed.create({
    data: {   title: wow.title, description: wow.description, userId: wow.userId },
  });
  return NextResponse.json(toCreate);
}

export async function PUT(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toUpdate = await db.feed.update({
      where: {
          id: wow.id,
      },
      data: {
        title: wow.title,
        description: wow.description, 
        userId: wow.userId 
       }
  })
  return NextResponse.json(toUpdate);
}

export async function DELETE(req: NextRequest, res: NextResponse) {
    const wow = await req.json();
    const toDelete = await db.feed.delete({
      where: {
        id: wow.id,
      }
    })
 return NextResponse.json(toDelete);

   
}
