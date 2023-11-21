import { ThemeToggleBtn } from "@/components/common/ThemeToggleBtn";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="container bg-green">
      <h1>Hello</h1>
      <Button>Click Me</Button>
      <ThemeToggleBtn />
      {session && JSON.stringify(session)}
    </div>
  );
}
