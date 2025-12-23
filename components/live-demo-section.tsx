"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/section-title";
import config, { LivePreviewProject } from "@/config";

function PreviewCard({ project }: { project: LivePreviewProject }) {
  return (
    <div className="group relative flex-shrink-0 w-[320px] overflow-hidden rounded-2xl border bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
      {/* 顶部装饰线 */}
      <div className="absolute left-0 top-0 z-10 h-1 w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 group-hover:w-full" />

      {/* iframe 预览区域 */}
      <div className="relative h-[200px] w-full overflow-hidden bg-muted">
        <iframe
          src={project.url}
          title={project.name}
          className="pointer-events-none h-[400px] w-[640px] origin-top-left scale-50 border-0"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        />
        {/* 悬停遮罩 */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              访问
            </a>
          </Button>
        </div>
      </div>

      {/* 卡片内容 */}
      <div className="p-3">
        <h3 className="text-base font-semibold transition-colors group-hover:text-orange-500">
          {project.name}
        </h3>
      </div>
    </div>
  );
}

export function LiveDemoSection() {
  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4">
        <SectionTitle title="Live Demo" />

        {/* 横向滚动容器 */}
        <div className="relative">
          {/* 左侧渐变遮罩 */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-background to-transparent" />

          {/* 卡片容器 - 宽屏居中，窄屏可滚动 */}
          <div className="flex justify-center gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4">
            {config.livePreviewProjects.map((project) => (
              <PreviewCard key={project.url} project={project} />
            ))}
          </div>

          {/* 右侧渐变遮罩 */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}

