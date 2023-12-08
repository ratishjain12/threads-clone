import { NextResponse, NextRequest } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import prisma from "@/DB/db.config";

export async function POST(request: NextRequest) {
  const session: CustomSession | null = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ status: 401, message: "Un-Authorized" });
  }

  const data: LikeType = await request.json();

  if (!data.post_id || !data.toUser_id) {
    return NextResponse.json({
      status: 400,
      message: "Bad request. Please pass post id",
    });
  }

  if (data.status === "1") {
    await prisma.notification.create({
      data: {
        user_id: Number(session?.user?.id),
        toUser_id: Number(data.toUser_id),
        content: "Liked your post",
      },
    });

    await prisma.post.update({
      where: {
        id: Number(data.post_id),
      },
      data: {
        likes_count: {
          increment: 1,
        },
      },
    });

    await prisma.likes.create({
      data: {
        user_id: Number(session?.user?.id),
        post_id: Number(data.post_id),
      },
    });
  } else if (data.status === "0") {
    await prisma.post.update({
      where: {
        id: Number(data.post_id),
      },
      data: {
        likes_count: {
          decrement: 1,
        },
      },
    });

    await prisma.likes.deleteMany({
      where: {
        user_id: Number(session?.user?.id),
        post_id: Number(data.post_id),
      },
    });
  }

  return NextResponse.json({
    status: 200,
    message:
      data.status === "1"
        ? "Post Liked Successfully!!"
        : "Post Disliked Successfully!!",
  });
}
