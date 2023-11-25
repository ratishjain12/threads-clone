import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import BaseComponent from "@/components/base/BaseComponent";
export const metadata: Metadata = {
  title: "Home",
  description: "Threads App to share your thoughts",
};

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BaseComponent>{children}</BaseComponent>
      <Toaster />
    </ThemeProvider>
  );
}
