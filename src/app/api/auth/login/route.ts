import { NextRequest, NextResponse } from "next/server";
import { loginSchema } from "@/validators/authSchema";
import vine, { errors } from "@vinejs/vine";
import { compareSync, genSaltSync, hashSync } from "bcryptjs";
import prisma from "@/DB/db.config";
import Email from "next-auth/providers/email";
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const validator = vine.compile(loginSchema);
    const payload = await validator.validate(data);

    const isEmailExist = await prisma.user.findUnique({
      where: { email: payload.email },
    });

    if (!isEmailExist) {
      return NextResponse.json({
        status: 400,
        errors: {
          email: "Email does not exist.",
        },
      });
    }

    //check if password match
    const findUser = await prisma.user.findUnique({
      where: { email: payload.email },
    });
    if (findUser) {
      const checkPassword = compareSync(payload.password, findUser.password!);
      if (checkPassword) {
        return NextResponse.json({
          status: 200,
          message: "you logged in successfully!",
        });
      }
    }

    return NextResponse.json({ status: 400, message: "Invalid Credentials." });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json({ status: 400, message: error.messages });
    }
  }
}
