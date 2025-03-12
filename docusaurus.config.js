// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Siwoo's Tech Blog",
  tagline: "Study notes and tech stories by an aspiring software engineer",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://siwoo-jung.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "siwoo-jung", // Usually your GitHub org/user name.
  projectName: "siwoo-jung.github.io", // Usually your repo name.
  deploymentBranch: "deploy_branch",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      ko: {
        direction: "rtl",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          // routeBasePath: '/',
          showReadingTime: true,
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/undraw_docusaurus_mountain.svg",
      navbar: {
        title: "Siwoo's Tech Blog",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   type: 'localeDropdown',
          //   position: 'left',
          // },
          { to: "/blog", label: "Nav1", position: "left" },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "X",
                href: "https://x.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // ✅ Added Global Metadata for SEO and Social Sharing
      metadata: [
        {
          name: "keywords",
          content:
            "Tech Blog, AI, Cloud Computing, Software Development, Programming",
        },
        {
          name: "description",
          content:
            "Study notes and tech stories by an aspiring software engineer.",
        },
        { property: "og:title", content: "Siwoo's Tech Blog" },
        {
          property: "og:description",
          content:
            "A personal blog covering AI, software, and cloud technology.",
        },
        { property: "og:image", content: "/img/og-image.png" },
        { property: "og:url", content: "https://siwoo-jung.github.io" },
        { property: "og:type", content: "website" },
        {
          name: "linkedin:profile",
          content: "https://www.linkedin.com/in/siwoojung",
        },
        { name: "github:profile", content: "https://github.com/siwoo-jung" },
      ],
    }),
  // ✅ Added headTags for SEO Optimization and Performance
  headTags: [
    {
      tagName: "link",
      attributes: { rel: "preconnect", href: "https://siwoo-jung.github.io" },
    },
    {
      tagName: "script",
      attributes: { type: "application/ld+json" },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Siwoo's Tech Blog",
        url: "https://siwoo-jung.github.io",
        author: { "@type": "Person", name: "Siwoo Jung" },
      }),
    },
  ],
};

export default config;
