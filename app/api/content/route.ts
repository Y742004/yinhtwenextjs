// import { db } from "@/lib/db";
import { db } from "@/lib/db";
import { m } from "framer-motion";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const toRead = await db.content.findMany();
  return NextResponse.json(toRead);
}

export async function POST(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toCreate = await db.content.create({
    data: { description: wow.description },
  });
  return NextResponse.json(toCreate);
}

// export async function PUT(req, res) {
//   const wow = await req.json();
//   const toUpdate = await db.user.update({
//     where: {
//       id: wow.id,
//     },
//     data: {
//       email: wow.email,
//     },
//   });
//   return NextResponse.json(wow);
// }

export async function PUT(req: NextRequest, res: NextResponse) {
    const wow = await req.json();
    const toUpdate = await db.content.update({
        where: {
            id: wow.id,
        },
        data: {
            description: wow.description,
        }
    })
    return NextResponse.json(wow);
}

export async function DELETE(req: NextRequest, res: NextResponse) {
    const wow = await req.json();
    const toDelete = await db.content.delete({
      where: {
        id: wow.id,
      }
    })
 return NextResponse.json(toDelete);

   
}
