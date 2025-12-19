"use client";

import { SectionTitle } from "@/components/section-title";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  size: "xl" | "lg" | "md" | "sm" | "xs";
  color: string;
}

const skills: Skill[] = [
  // 主力技能 - 最大
  { name: "TypeScript", size: "xl", color: "from-blue-500 to-blue-600" },
  { name: "React", size: "xl", color: "from-cyan-400 to-blue-500" },
  { name: "Vue", size: "xl", color: "from-green-400 to-emerald-500" },
  
  // 熟练技能 - 大
  { name: "JavaScript", size: "lg", color: "from-yellow-400 to-amber-500" },
  { name: "Next.js", size: "lg", color: "from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100" },
  { name: "Vite", size: "lg", color: "from-purple-500 to-yellow-500" },
  
  // 熟悉技能 - 中
  { name: "Node.js", size: "md", color: "from-green-600 to-green-700" },
  { name: "HTML/CSS", size: "md", color: "from-orange-500 to-red-500" },
  { name: "Nuxt", size: "md", color: "from-teal-400 to-green-500" },
  { name: "Canvas", size: "md", color: "from-pink-500 to-rose-500" },
  
  // 了解技能 - 小
  { name: "Python", size: "sm", color: "from-blue-400 to-yellow-400" },
  { name: "Git", size: "sm", color: "from-orange-600 to-red-600" },
  { name: "Tailwind", size: "sm", color: "from-cyan-500 to-blue-500" },
  { name: "Three.js", size: "xs", color: "from-gray-500 to-gray-700" },
  { name: "Electron", size: "xs", color: "from-blue-300 to-blue-500" },
];

const sizeClasses = {
  xl: "text-4xl sm:text-5xl font-bold px-6 py-3",
  lg: "text-2xl sm:text-3xl font-bold px-5 py-2.5",
  md: "text-xl sm:text-2xl font-semibold px-4 py-2",
  sm: "text-base sm:text-lg font-medium px-3 py-1.5",
  xs: "text-sm font-medium px-2.5 py-1",
};

function SkillTag({ skill }: { skill: Skill }) {
  return (
    <span
      className={cn(
        "inline-block cursor-default rounded-full bg-gradient-to-r text-white transition-all duration-300",
        "hover:scale-110 hover:shadow-lg hover:shadow-current/20",
        "animate-fade-in-up",
        sizeClasses[skill.size],
        skill.color
      )}
    >
      {skill.name}
    </span>
  );
}

export function SkillsSection() {
  return (
    <section className="relative py-20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <SectionTitle title="我的技能" />
        
        {/* 词云布局 - 限制最大宽度让大屏更紧凑 */}
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <SkillTag skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
