import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StreakingMan的主页</title>
        <meta name="description" content="StreakingMan的主页" />
        <meta name="author" content="StreakingMan Max" />
        <link rel="icon" href="/favicon.ico" />
        <link />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Streaking <a>Man!</a>
        </h1>

        <p className={styles.description}>
          正在经历社会毒打的前端工程师 ，技术栈：
          <code className={styles.code}>[vue,react,node,...other]</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://github.com/StreakingMan"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>GitHub &rarr;</h2>
            <p>热爱开源社区，期待有一天能有很多很多的star...</p>
          </a>

          <a
            href="https://blog.streakingman.com"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>博客 &rarr;</h2>
            <p>沉淀知识，随笔总结，记录各种炫酷和花里胡哨的东西。</p>
          </a>

          <a
            href="https://resume-editor.streakingman.com"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>vue3简历编辑器 &rarr;</h2>
            <p>轻松制作一份精美简历！</p>
          </a>

          <a className={styles.card}>
            <h2>敬请期待 &rarr;</h2>
            <p>正在搞一些花里胡哨的东西...</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
