import { NextResponse, NextRequest } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import vine, { errors } from "@vinejs/vine";
import { CustomErrorReporter } from "@/validators/CustomErrorReporter";
import { postSchema } from "@/validators/postSchema";
import { imageValidator } from "@/validators/imageValidator";
import { join } from "path";
import { getRandomNumber } from "@/lib/utils";
import { writeFile } from "fs/promises";
import prisma from "@/DB/db.config";
export async function POST(request: NextRequest) {
  try {
    const session: CustomSession | null = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ status: 401, message: "Un-Authorized" });
    }

    const formData = await request.formData();
    const data = {
      content: formData.get("content"),
      image: "",
    };

    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(postSchema);
    const payload = await validator.validate(data);

    const image = formData.get("image") as Blob | null;

    if (image) {
      const isImageNotValid = imageValidator(
        image.type.split("/")[1],
        image.size
      );
      if (isImageNotValid) {
        return NextResponse.json({
          status: 400,
          errors: { content: isImageNotValid },
        });
      }

      try {
        const buffer = Buffer.from(await image!.arrayBuffer());
        const uploadDir = join(process.cwd(), "public", "/uploads");
        const uniqueName = Date.now() + "_" + getRandomNumber(1, 999999);
        const filename = uniqueName + "." + image.type.split("/")[1];
        await writeFile(`${uploadDir}/${filename}`, buffer);
        data.image = filename;
      } catch (error) {
        return NextResponse.json({
          status: 500,
          message: "Something went wrong.Please try again later.",
        });
      }
    }
    await prisma.post.create({
      data: {
        content: payload.content,
        user_id: Number(session.user?.id),
        image: data.image ?? null,
      },
    });

    return NextResponse.json({
      status: 200,
      message: "Post created successfully!",
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json(
        { status: 400, errors: error.messages },
        { status: 200 }
      );
    }
  }
}
