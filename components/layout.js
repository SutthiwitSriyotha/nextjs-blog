import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = '[Sutthiwit Portfolio]';
export const siteTitle = 'Portfolio | Sutthiwit SE66';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Welcome to Sutthiwit Portfolio - showcasing projects, skills, and achievements"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <p className={utilStyles.headingMd}>
              I am a passionate and dedicated Software Engineer with skills in various areas of technology and teamwork. Here’s a bit more about me:
            </p>
            <ul className={utilStyles.headingSmli}>
              <li>
                <strong>Data Analysis & Management:</strong> I have experience in collecting, organizing, and analyzing data to derive actionable insights.
              </li>
              <li>
                <strong>Test Case Development:</strong> I've developed detailed test cases to ensure software functionality and quality.
              </li>
              <li>
                <strong>Team Collaboration:</strong> I’ve worked in Scrum teams, contributing to Agile projects by participating in sprints, stand-ups, and retrospectives.
              </li>
              <li>
                <strong>Technical Skills:</strong>
                <ul className={utilStyles.nestedList}>
                  <li>HTML, CSS, JavaScript for web development.</li>
                  <li>Python for scripting and problem-solving.</li>
                  <li>Git for version control and collaborative development.</li>
                </ul>
              </li>
            </ul>
            <p className={utilStyles.headingMd}>
              I enjoy solving complex problems, learning new technologies, and working collaboratively to create meaningful software solutions. Let’s build something amazing together!
            </p>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
