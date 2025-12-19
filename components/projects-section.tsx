"use client";

import { Star, ExternalLink, Github } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import config from "@/config";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof config.projects)[0];
  index: number;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-full overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
        {/* 悬停时的渐变背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* 顶部装饰线 */}
        <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 group-hover:w-full" />

        <div className="relative">
          {/* 标题行 */}
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-2">
              <Github className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold transition-colors group-hover:text-orange-500">
                {project.name}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              {project.stars && (
                <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-2 py-0.5 text-sm">
                  <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                  <span className="font-medium text-yellow-600 dark:text-yellow-400">
                    {project.stars}
                  </span>
                </div>
              )}
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
            </div>
          </div>

          {/* 描述 */}
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {project.description}
          </p>

          {/* 技术标签 */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, i) => (
              <Badge
                key={t}
                variant="secondary"
                className={cn(
                  "text-xs transition-all duration-300",
                  "group-hover:bg-orange-500/10 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                )}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export function ProjectsSection() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
<SectionTitle title="我的项目" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {config.projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

