import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


export async function GET(req: NextRequest, res: NextResponse) {
  const toRead = await db.user.findMany();
  return NextResponse.json(toRead);
}

export async function POST(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const salt = await bcryptjs.genSalt(10);
  const hashpassword = await bcryptjs.hash(
    wow.password as string,
    salt
  );
  const toCreate = await db.user.create({
    data: { email: wow.email as string, password: hashpassword },
  });
  return NextResponse.json(toCreate);
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const wow = await req.json();
  const toDelete = await db.user.delete({
    where: {
      id: wow.id,
    },
  });
  return NextResponse.json(toDelete);
}
