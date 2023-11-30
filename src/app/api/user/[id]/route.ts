import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import prisma from "@/DB/db.config";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const session: CustomSession | null = await getServerSession(authOptions);
  if (!session) {
    NextResponse.json({ status: "401", message: "un-authorized" });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
    },
    select: {
      name: true,
      email: true,
      username: true,

      post: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              username: true,
            },
          },
        },
      },

      comment: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              username: true,
            },
          },
        },
      },
    },
  });

  return NextResponse.json({ status: 200, data: user });
}
