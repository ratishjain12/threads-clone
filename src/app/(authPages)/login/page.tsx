"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [authState, setAuthState] = useState<AuthStateType>({
    email: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthState({ ...authState, [e.target.name]: e.target.value });
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-full md:w-1/3 mx-2 bg-muted p-6 rounded-lg">
          <div className="flex justify-center">
            <Image src="/images/logo.svg" width={50} height={50} alt="Logo" />
          </div>
          <h1 className="text-2xl font-bold">Login</h1>
          <p>Welcome</p>
          <form onSubmit={submit}>
            <div className="mt-5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className="mt-5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className="mt-5">
              <Button className="w-full" type="submit">
                Login
              </Button>
            </div>
          </form>
          <div className="mt-5">
            <span>
              Don't have an account?
              <Link href="/register" className="text-orange-400 ml-2">
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
