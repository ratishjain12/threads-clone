import { ThemeToggleBtn } from "@/components/common/ThemeToggleBtn";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <Button>Click Me</Button>
      <ThemeToggleBtn />
    </div>
  );
}
