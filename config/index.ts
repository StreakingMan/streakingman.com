import { Project } from "@/components/project-card";

export interface LivePreviewProject {
  name: string;
  url: string;
}

interface Config {
  title: {
    normal: string;
    highlight: string;
  };
  slogan: string;
  projects: Project[];
  livePreviewProjects: LivePreviewProject[];
  social: {
    github: string;
    blog: string;
  };
}

const config: Config = {
  title: {
    normal: "Streaking",
    highlight: "Man!",
  },
  slogan:
    "AI 时代 100x Engineer / 顶流应用想法专家 / 3D打印炒面师 / 独立游戏文件夹开发者 / 雕猫 & 哦多茄 铲屎官",
  projects: [
    {
      name: "solvable-sheep-game",
      description:
        "能够解出来的「羊了个羊」小游戏 demo，React 实现，支持自定义主题",
      url: "https://github.com/StreakingMan/solvable-sheep-game",
      stars: 403,
      tech: ["React", "TypeScript", "Vite"],
    },
    {
      name: "vue3-resume-editor",
      description: "Vue3 在线简历编辑器，轻松制作一份精美简历",
      url: "https://github.com/StreakingMan/vue3-resume-editor",
      stars: 46,
      tech: ["Vue3", "TypeScript"],
    },
    {
      name: "vitepress-blogmate",
      description:
        "集成 VitePress 强大功能的博客主题和编辑器工具集，支持标签、分类、图片管理",
      url: "https://github.com/StreakingMan/vitepress-blogmate",
      stars: 7,
      tech: ["Vue", "VitePress"],
    },
    {
      name: "streakingman.github.io",
      description: "个人技术博客，沉淀知识，随笔总结，记录各种炫酷的东西",
      url: "https://blog.streakingman.com",
      stars: 5,
      tech: ["Jekyll", "HTML"],
    },
    {
      name: "naraka-2d",
      description: "永劫无间横版格斗游戏，独立游戏开发尝试",
      url: "https://github.com/StreakingMan/naraka-2d",
      stars: 4,
      tech: ["TypeScript", "Canvas"],
    },
    {
      name: "homebooks",
      description: "书墙项目，个人藏书管理系统",
      url: "https://github.com/StreakingMan/homebooks",
      tech: ["Vue", "Nuxt"],
    },
    {
      name: "texas-holdem",
      description: "德州扑克交互式模拟教学演示",
      url: "https://github.com/StreakingMan/texas-holdem",
      tech: ["Vue", "Canvas"],
    },
  ],
  livePreviewProjects: [
    {
      name: "德州扑克教学",
      url: "https://texas.streakingman.com",
    },
    {
      name: "在线简历编辑器",
      url: "https://resume-editor.streakingman.com",
    },
    {
      name: "Todo 应用",
      url: "https://todo.streakingman.com",
    },
    {
      name: "个人博客",
      url: "https://blog.streakingman.com",
    },
  ],
  social: {
    github: "https://github.com/StreakingMan",
    blog: "https://blog.streakingman.com",
  },
};

export default config;
