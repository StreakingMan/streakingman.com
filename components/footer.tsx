"use client";

import { Github, Heart } from "lucide-react";

export function Footer() {
  // 使用固定年份避免 hydration 不匹配
  const currentYear = 2025;

  return (
    <footer className="mt-auto border-t bg-muted/30">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} StreakingMan</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-3 w-3 fill-red-500 text-red-500" />{" "}
              in Hangzhou
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/StreakingMan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

