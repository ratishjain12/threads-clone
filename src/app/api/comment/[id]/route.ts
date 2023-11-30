import { NextResponse, NextRequest } from "next/server";
import { CustomSession, authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import prisma from "@/DB/db.config";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const session: CustomSession | null = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ status: 401, message: "Post Deleted" });
  }
  const findComment = await prisma.comment.findFirst({
    where: {
      id: Number(params.id),
      user_id: Number(session.user?.id),
    },
  });

  if (!findComment) {
    return NextResponse.json({ status: 400, message: "Bad Request" });
  }

  await prisma.comment.delete({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json({ status: 200, message: "Comment Deleted" });
}
