import NextAuthProvider from "@/components/providers/next-auth-providers";
import { ThemeProvider } from "@/components/providers/theme-provider";
import TopNav from "@/components/top-nav";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          robotoFont.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextAuthProvider>
            <TopNav />
            {children}
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
