import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {

const toRead = await db.blog.findMany(
  
  //   {
  // include: { user: true,  },}
);
return NextResponse.json(toRead);
}
 
 

export async function POST(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toCreate = await db.blog.create({
    data: {
        image: wow.image,
        title: wow.title,
       content: wow.content,

      
    },
  });
  return NextResponse.json(toCreate);
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toDelete = await db.blog.delete({
    where: {
      id: wow.id,
    },
  });
  return NextResponse.json(toDelete);
}
