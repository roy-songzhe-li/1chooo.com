import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import PageHeader from "@/components/page-header";
import AboutHeader from "@/components/about/about-header";
import MarkdownRenderer from "@/components/markdown/markdown-renderer";
import { getBlogPosts } from "@/lib/db/v1/post";
import config from "@/config";

const DynamicLatestArticles = dynamic(
  () => import("@/components/about/latest-articles"),
  {
    loading: () => <p>Loading latest articles...</p>,
  },
);

const DynamicLifeStyles = dynamic(
  () => import("@/components/about/life-styles"),
  {
    loading: () => <p>Loading life styles...</p>,
  },
);

const DynamicCodingStats = dynamic(
  () => import("@/components/about/coding-stats"),
  {
    loading: () => <p>Loading coding stats...</p>,
  },
);

const { about, title, description, author, keywords, openGraph, siteURL } =
  config;
const {
  firstName,
  lastName,
  preferredName,
  introduction,
  lifestyles,
  techStacks,
  githubUsername,
} = about;

export const metadata: Metadata = {
  title: title,
  description: description,
  authors: [{ name: author }],
  creator: author,
  keywords: keywords,
  openGraph: {
    url: openGraph.url,
    type: "website",
    siteName: openGraph.siteName,
    title: openGraph.title,
    description: openGraph.description,
    images: openGraph.images,
  },
  manifest: "/manifest.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "Roy Li | Software Engineer",
    description:
      "First-Class Honours Graduate in Computer Science from the University of Adelaide. Demonstrated hands-on experience with Frontend Development and UI/UX Design, along with extensive skills in Cloud Operations and Backend Development.",
    images: "/images/Avatar.jpg",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};

const addJsonLd = () => {
  return {
    __html: `{
      "@context": "http://schema.org",
      "@type": "Person",
      "@id": "${siteURL}#person",
      "givenName": ${firstName},
      "familyName": ${lastName},
      "additionalName": ${preferredName},
      "gender": "male",
      "birthPlace": "Adelaide, SA",
      "nationality": "Australia",
      "alumniOf":[
        {
          "@type": "CollegeOrUniversity",
          "name": "The University of Adelaide",
          "sameAs": "https://www.adelaide.edu.au/"
        },
      ],
      "jobTitle": "Software Engineer",
      "skills": "Software Engineering, Web Development, Full Stack Development",
      "image": "/images/Avatar.jpg",
      "url": ${siteURL},
      "sameAs": [
        "https://linkedin.com/in/roy-songzhe-li-6432391b3/",
        "https://github.com/roy-songzhe-li"
      ]
    }
  `,
  };
};

async function About() {
  let allBlogs = await getBlogPosts();

  let selectedPosts = allBlogs.map((post: any) => ({
    ...post,
    metadata: {
      ...post.metadata,
      category: post.metadata.category || "Uncategorized",
    },
  }));

  let header = preferredName
    ? `About ${preferredName} 👨🏻‍💻`
    : `About ${firstName} ${lastName} 👨🏻‍💻`;

  return (
    <article>
      <Script
        id="application/ld+json"
        type="application/ld+json"
        dangerouslySetInnerHTML={addJsonLd()}
        key="roy-li-website-jsonld"
      />
      <PageHeader header={header} />
      <AboutHeader id="introduction" text="$ ls -al Roy 👨🏻‍💻 (He/Him)" />
      <MarkdownRenderer
        className="text-light-gray leading-relaxed"
        content={introduction}
      />
      <DynamicLatestArticles posts={selectedPosts} />
      <DynamicCodingStats
        techStacks={techStacks}
        githubUsername={githubUsername}
      />
      <DynamicLifeStyles lifestyles={lifestyles} />
    </article>
  );
}

export default About;
