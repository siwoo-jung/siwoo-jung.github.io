import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Head from "@docusaurus/Head";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div className={styles.profileBanner}>
        <Heading as="h1">Hi, my name is Siwoo Jung</Heading>
        <p>{siteConfig.tagline}</p>
        <div>
          <Link to="/docs/intro">Docusaurus Tutorial - 5min ⏱️</Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <Head>
        {/* Open Graph metadata for LinkedIn and GitHub */}
        <meta property="og:title" content={`${siteConfig.title}`} />
        <meta property="og:description" content={`${siteConfig.tagline}`} />
        <meta
          property="og:image"
          content="https://siwoo-jung.github.io/img/siwoo.png"
        />
        <meta property="og:url" content="https://siwoo-jung.github.io" />
        <meta property="og:type" content="website" />

        {/* Link preconnect for faster external resource loading */}
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://www.linkedin.com" />

        {/* Structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Person",
            name: "Siwoo Jung",
            url: "https://siwoo-jung.github.io",
            sameAs: [
              "https://github.com/siwoo-jung",
              "https://www.linkedin.com/in/siwoojung",
            ],
          })}
        </script>
      </Head>

      {/* Page Content */}
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
