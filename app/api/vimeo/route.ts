import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const toRead = await db.practice.findMany();
  return NextResponse.json(toRead);
}

export async function POST(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toCreate = await db.practice.create({
    data: {   videoForVimeo: wow.videoForVimeo },
  });
  return NextResponse.json(toCreate);
}

export async function PUT(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toUpdate = await db.practice.update({
      where: {
          id: wow.id,
      },
      data: {
          videoForVimeo: wow.videoForVimeo,
      }
  })
  return NextResponse.json(toUpdate);
}

export async function DELETE(req, res) {
    const wow = await req.json();
    const toDelete = await db.practice.delete({
      where: {
        id: wow.id,
      }
    })
 return NextResponse.json(toDelete);

   
}
