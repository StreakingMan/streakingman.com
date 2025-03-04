interface Config {
  title: {
    normal: string;
    highlight: string;
  }
  desc: string
  sites: Array<{
    title: string;
    desc: string;
    url: string;
  }>
}

const config: Config = {
  title: {
    normal: "Streaking",
    highlight: "Man!",
  },
  desc: '',
  sites: [
    {
      title: "GitHub",
      desc: "热爱开源社区，期待有一天能有很多很多的star...",
      url: "https://github.com/StreakingMan",
    },
    {
      title: "博客",
      desc: "沉淀知识，随笔总结，记录各种炫酷和花里胡哨的东西。",
      url: "https://blog.streakingman.com",
    },
    {
      title: "能解出来的羊了个羊Demo",
      desc: "坑爹游戏治好了我的低血压，自己用React撸了个能够通关的。",
      url: "https://github.com/StreakingMan/solvable-sheep-game",
    },
    {
      title: "Vue3简历编辑器",
      desc: "轻松制作一份精美简历！",
      url: "https://resume-editor.streakingman.com",
    },
    {
      title: "Streakingman Cli",
      desc: "封装了一些常用操作的命令行工具",
      url: "https://github.com/StreakingMan/streakingman-cli",
    },
    {
      title: "Todo List",
      desc: "一个简单的todo-list应用",
      url: "https://todo.streakingman.com",
    },
    {
      title: "React Simple Mind",
      desc: "轻量配置化思维导图组件",
      url: "https://github.com/StreakingMan/react-simple-mind",
    },
    {
      title: "敬请期待",
      desc: "正在搞一些花里胡哨的东西...",
      url: "",
    },
  ],
};

export default config;
