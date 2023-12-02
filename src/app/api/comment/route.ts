import { NextResponse, NextRequest } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { CustomErrorReporter } from "@/validators/CustomErrorReporter";
import vine, { errors } from "@vinejs/vine";
import { commentSchema } from "@/validators/commentSchema";
import prisma from "@/DB/db.config";

export async function POST(request: NextRequest) {
  try {
    const session: CustomSession | null = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ status: 401, message: "Un-Authorized" });
    }

    const data = await request.json();
    console.log(data);
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(commentSchema);
    const payload = await validator.validate(data);

    //increase post comment counter
    await prisma.post.update({
      where: {
        id: Number(payload.post_id),
      },
      data: {
        comment_count: {
          increment: 1,
        },
      },
    });

    //adding notification
    await prisma.notification.create({
      data: {
        user_id: Number(session?.user?.id),
        content: "User commented on your post",
        toUser_id: Number(payload.toUserId),
      },
    });
    // add comment in db
    await prisma.comment.create({
      data: {
        user_id: Number(session.user?.id),
        post_id: Number(payload.post_id),
        content: payload.content,
      },
    });

    return NextResponse.json({
      status: 200,
      message: "comment added successfully",
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json({ status: 400, errors: error.messages });
    }
  }
}
