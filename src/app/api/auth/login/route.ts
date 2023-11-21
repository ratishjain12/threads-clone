import { NextRequest, NextResponse } from "next/server";
import { loginSchema } from "@/validators/authSchema";
import vine, { errors } from "@vinejs/vine";
import { compareSync } from "bcryptjs";
import prisma from "@/DB/db.config";
import { CustomErrorReporter } from "@/validators/CustomErrorReporter";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(loginSchema);
    const payload = await validator.validate(body);

    //  * Check is there any email or not
    const isUserExist = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    });

    if (isUserExist) {
      // * Check is password correct or not
      const isPasswordSame = compareSync(
        payload.password,
        isUserExist.password!
      );

      if (!isPasswordSame) {
        return NextResponse.json({
          status: 400,
          errors: { password: "Incorrect password" },
        });
      }

      if (isPasswordSame) {
        return NextResponse.json({
          status: 200,
          message: "you logged in successfully!",
        });
      }
      return NextResponse.json({
        status: 400,
        errors: {
          email: "Invalid credentials.",
        },
      });
    }

    return NextResponse.json({
      status: 400,
      errors: {
        email: "No account found with this email",
      },
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json({ status: 400, errors: error.messages });
    }
  }
}
