import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { roboto } from "@/app/font";
import Hello from "@/components/hello";
import NavBar from "@/components/nav-bar";
import { ProgressBar } from "@/components/progress-bar";
import SideBar from "@/components/side-bar";
import { WebVitals } from "@/components/web-vitals";
import config from "@/config";

import "@/app/globals.css";

const {
  title,
  description,
  author,
  keywords,
  googleAnalyticId,
  googleTagManagerId,
  openGraph,
  about,
  avatar,
  status,
} = config;

const { firstName, lastName, middleName, preferredName } = about;

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
    images: "https://github.com/roy-songzhe-li/WhoAmI/blob/main/Avatar.jpg",
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

function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.className}`}>
      <WebVitals gaId={googleAnalyticId} />
      <body>
        <ProgressBar className="fixed top-0 h-1 bg-yellow-500">
          <Hello />
          <main>
            <SideBar
              avatar={avatar}
              firstName={firstName}
              lastName={lastName}
              middleName={middleName}
              preferredName={preferredName}
              status={status}
            />
            <div className="main-content">
              <NavBar />
              {children}
            </div>
          </main>
        </ProgressBar>
      </body>
      <GoogleAnalytics gaId={googleAnalyticId} />
      <GoogleTagManager gtmId={googleTagManagerId} />
    </html>
  );
}

export default RootLayout;
