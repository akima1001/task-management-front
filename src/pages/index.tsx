import { Flex } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="space-between"
      minH="100vh"
      p={6}
    >
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            By
            <img
              alt="Vercel Logo"
              className={styles.vercelLogo}
              height={24}
              src="/vercel.svg"
              width={100}
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <img alt="Next.js Logo" className={styles.logo} height={37} src="/next.svg" width={180} />
        <div className={styles.thirteen}>
          <img alt="13" height={31} src="/thirteen.svg" width={40} />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          className={styles.card}
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and&nbsp;API.
          </p>
        </a>

        <a
          className={styles.card}
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className={inter.className}>
            Learn <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          className={styles.card}
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          className={styles.card}
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.
          </p>
        </a>
      </div>
    </Flex>
  )
}
