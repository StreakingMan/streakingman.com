"use client";

import { Github, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import config from "@/config";

const TITLE = "StreakingMan!";

export function Hero() {
  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
      {/* 主题切换按钮 */}
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      {/* 标题动画 - Man! 整个单词橙色 (索引 9-12) */}
      <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
        {TITLE.split("").map((char, i) => (
          <span
            key={i}
            className={`inline-block ${i >= 9 ? "text-orange-500" : ""}`}
            style={{
              animation: "jump 3s infinite",
              animationDelay: `${i * 0.1}s`,
            }}
          >
            {char}
          </span>
        ))}
      </h1>

      {/* Slogan */}
      <p className="mb-8 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl">
        {config.slogan}
      </p>

      {/* 社交链接 */}
      <div className="flex gap-4">
        <Button asChild variant="default" size="lg">
          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a
            href={config.social.blog}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            博客
          </a>
        </Button>
      </div>
    </section>
  );
}
