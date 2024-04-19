import NextAuthProvider from "@/components/providers/next-auth-providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import { Roboto_Mono } from "next/font/google";

const robotoFont = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "T3 To-Do App",
  description: "Simple to-do demo app using t3 stack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          robotoFont.variable,
        )}
      >
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
