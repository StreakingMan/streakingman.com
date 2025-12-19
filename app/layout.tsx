import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "StreakingMan的主页",
  description:
    "搬砖码农 / AI想法专家 / 3D打印炒面师 / 独立游戏文件夹选手 / 雕猫&哦多茄铲屎官 / 100x Engineer",
  authors: [{ name: "StreakingMan" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className="min-h-screen bg-background font-sans antialiased"
        style={{ fontFamily: "Smiley, sans-serif" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

