import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import prisma from "@/DB/db.config";

export async function GET(request: NextRequest) {
  const session: CustomSession | null = await getServerSession(authOptions);
  if (!session) {
    NextResponse.json({ status: "401", message: "un-authorized" });
  }

  const users = await prisma.user.findMany({
    where: {
      NOT: {
        id: Number(session?.user?.id),
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      username: true,
    },
  });

  return NextResponse.json({ status: "200", data: users });
}
