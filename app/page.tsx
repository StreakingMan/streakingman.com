import { Hero } from "@/components/hero";
import { SkillsSection } from "@/components/skills-section";
import { LiveDemoSection } from "@/components/live-demo-section";
import { ProjectsSection } from "@/components/projects-section";
import { CatsSection } from "@/components/cats-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero 区域 */}
      <Hero />

      {/* 技能模块 */}
      <SkillsSection />

      {/* Live Demo */}
      <LiveDemoSection />

      {/* 开源项目 */}
      <ProjectsSection />

      {/* 猫咪模块 */}
      <CatsSection />

      {/* 页脚 */}
      <Footer />
    </div>
  );
}
