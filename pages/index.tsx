import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { sites } from "./config/sites";

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
          {sites.map(({ title, desc, url }, index) => (
            <a
              key={index}
              href={url}
              className={styles.card}
              target="_blank"
              rel="noreferrer nofollow"
            >
              <h2>{title} &rarr;</h2>
              <p>{desc}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          浙ICP备17007857号-2
        </a>
      </footer>
    </div>
  );
}
