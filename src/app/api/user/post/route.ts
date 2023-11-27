import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import prisma from "@/DB/db.config";

export async function GET(request: NextRequest) {
  const session: CustomSession | null = await getServerSession(authOptions);
  if (!session) {
    NextResponse.json({ status: "401", message: "un-authorized" });
  }

  const posts = await prisma.post.findMany({
    where: {
      user_id: Number(session?.user?.id),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });

  return NextResponse.json({ status: "200", data: posts });
}