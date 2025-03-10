import { Config } from "@/types/config";
import { MdOutlineDevices, MdAttachment } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { PiTrophy, PiBooks, PiMediumLogoBold } from "react-icons/pi";
import { GoalIcon } from "@primer/octicons-react";
import {
  LuGithub,
  LuPencil,
  LuLinkedin,
  LuRss,
  LuMail,
  LuMapPin,
} from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaReact, FaAws } from "react-icons/fa";
import { TbPhoneCalling } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlinePython } from "react-icons/ai";
import { RiJavaLine, RiJavascriptLine } from "react-icons/ri";
import { SiLatex, SiFastapi, SiKubernetes, SiPostman } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { VscTerminalLinux, VscAzure } from "react-icons/vsc";
import { DiRedis } from "react-icons/di";
import {
  TbBrandCpp,
  TbBrandTypescript,
  TbBrandGolang,
  TbBrandNextjs,
  TbBrandDjango,
  TbBrandDocker,
  TbBrandMysql,
  TbMarkdown,
  TbBrandAstro,
  TbBrandTerraform,
  TbPhotoSquareRounded,
} from "react-icons/tb";

const config: Config = {
  avatar: "/images/Avatar.jpg",
  title: "Roy Li | Software Engineer",
  description:
    "First-Class Honours Graduate in Computer Science from the University of Adelaide. Demonstrated hands-on experience with Frontend Development and UI/UX Design, along with extensive skills in Cloud Operations and Backend Development.",
  author: "Roy Li",
  keywords: [
    "Roy Li",
    "Software Engineering",
    "Next.js",
    "React",
    "Full Stack Development",
  ],
  status: "Software Engineer ⚡️",
  siteURL: "https://herai.com.au",
  openGraph: {
    url: "https://herai.com.au/",
    type: "website",
    siteName: "Roy Li | Software Engineer",
    title: "Roy Li | Software Engineer",
    description:
      "First-Class Honours Graduate in Computer Science from the University of Adelaide. Demonstrated hands-on experience with Frontend Development and UI/UX Design, along with extensive skills in Cloud Operations and Backend Development.",
    images: [
      {
        url: "https://github.com/roy-songzhe-li/WhoAmI/blob/main/Avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Roy Li Cover Image",
      },
    ],
  },
  navItems: [
    { path: "/", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/post", label: "Post" },
    { path: "/gallery", label: "Gallery" },
  ],
  contacts: [
    {
      icon: LuMapPin,
      title: "Location",
      content: "Adelaide, SA",
    },
    {
      icon: LuMail,
      title: "Email",
      link: "mailto:roy.songzhe.li@gmail.com",
      content: "roy.songzhe.li@gmail.com",
    },
    {
      icon: TbPhoneCalling,
      title: "Phone",
      link: "tel:+61423473500",
      content: "+61 (0) 423 473 500",
    },
    {
      icon: LuGithub,
      title: "GitHub",
      link: "https://github.com/roy-songzhe-li",
      content: "roy-songzhe-li",
    },
    {
      icon: LuLinkedin,
      title: "LinkedIn",
      link: "https://linkedin.com/in/roy-songzhe-li-6432391b3/",
      content: "Roy Li",
    },
  ],
  socialLinks: [
    { url: `https://github.com/roy-songzhe-li`, icon: LuGithub, name: "GitHub" },
    {
      url: `https://linkedin.com/in/roy-songzhe-li-6432391b3/`,
      icon: LuLinkedin,
      name: "LinkedIn",
    },
    { url: `/rss.xml`, icon: LuRss, name: "RSS Feed" },
    { url: `/cv.pdf`, icon: MdAttachment, name: "CV" },
  ],
  about: {
    firstName: "Roy",
    lastName: "Li",
    middleName: "Songzhe",
    preferredName: "Roy",
    additionalName: "Roy",
    pronouns: "He/Him",
    githubUsername: "roy-songzhe-li",
    introduction: `
I obtained my First-Class Honours degree in Computer Science from [the University of Adelaide](https://www.adelaide.edu.au/), driven by a *sincere passion* for **Software Engineering 💻.**

I have demonstrated hands-on experience with Frontend Development and UI/UX Design, along with extensive skills in Cloud Operations and Backend Development. I'm aiming for a role that fosters challenges and innovation. Based in Adelaide with valid visa and full working rights.

In my spare time, I focus on contributing to open-source projects and exploring new technologies.

**Self-motivated, Team player, Love coding 👨🏻‍💻**
    `,
    lifestyles: [
      {
        icon: LuGithub,
        title: "Open Source",
        text: "Actively contributing to open source projects on GitHub.",
      },
      {
        icon: LuPencil,
        title: "Development",
        text: "Passionate about creating responsive and intuitive user interfaces.",
      },
      {
        icon: GoalIcon,
        title: "Innovation",
        text: "Always looking for new challenges and innovative solutions.",
      },
    ],
    techStacks: {
      programmingLanguages: [
        { name: "JavaScript", icon: RiJavascriptLine },
        { name: "TypeScript", icon: TbBrandTypescript },
        { name: "Python", icon: AiOutlinePython },
        { name: "Java", icon: RiJavaLine },
      ],
      frameworks: [
        { name: "React.js", icon: FaReact },
        { name: "Next.js", icon: TbBrandNextjs },
        { name: "Vue.js", icon: FaReact },
        { name: "Node.js", icon: FaReact },
        { name: "Django", icon: TbBrandDjango },
        { name: "Docker", icon: TbBrandDocker },
        { name: "MySQL", icon: TbBrandMysql },
        { name: "AWS", icon: FaAws },
        { name: "Git", icon: LuGithub },
      ],
    },
  },
  resume: {
    educations: {
      icon: IoSchoolOutline,
      title: "Education",
      items: [
        {
          company: "The University of Adelaide",
          location: "Adelaide, SA",
          role: "Honours Degree of Bachelor of Computer Science",
          duration: "2019 - 2023",
          tasksMarkdown: `
- **GPA:** 7.0/WAM 88.5
- **Award:** First Class Honours
        `,
        },
        {
          company: "The University of Adelaide",
          location: "Adelaide, SA",
          role: "Bachelor of Computer Science (Cybersecurity Major)",
          duration: "2019 - 2022",
          tasksMarkdown: ``,
        },
      ],
    },
    awardLeaderships: {
      icon: PiTrophy,
      title: "Award & Leaderships",
      items: [],
    },
    teachingExperiences: {
      icon: PiBooks,
      title: "Teaching",
      items: [],
    },
    professionalExperiences: {
      icon: MdOutlineDevices,
      title: "Professional Experience",
      items: [
        {
          company: "ExpertEaseAI",
          location: "Adelaide, SA",
          role: "Full Stack Developer | Contractor",
          duration: "May 2024 - Present",
          tasksMarkdown: `
- Developing and maintaining a RAG-based conversational AI platform using Langchain and LLMs.
- Creating responsive front-end interfaces with Next.js, React.js, and Node.js, ensuring optimal UI/UX for cross-platform compatibility (CSS Flexbox).
- Independently applying UI/UX design principles to create intuitive and accessible user interfaces while adhering to modern design standards and best practices.
- Extending the Django back-end by implementing microservices using RESTful APIs.
- Supporting configuring Docker, CI/CD pipelines and AWS (EC2+S3) for automated deployment.
          `,
        },
        {
          company: "Lighthouse Holidays",
          location: "Remote",
          role: "Project Coordinator, Test Engineer and Developer | Freelance",
          duration: "Nov 2023 - Mar 2024",
          tasksMarkdown: `
- Developed and deployed an ERP system for a travel agency, featuring user interface, search functions, order management, and e-commerce integration using Nuxt.js, Vue.js, Django, MySQL and Azure.
- Assembled and led a four-member team, adopting agile methodologies (Git & Jira) for management.
- Conducted requirements analysis, facilitated communication with clients to ensure seamless delivery.
- Designed and executed test plans, performed unit testing and regression testing, configured essential Azure services and CI/CD pipelines, ensuring system reliability and efficiency.
          `,
        },
      ],
    },
  },
  giscusConfig: {
    id: "comments",
    repo: "roy-songzhe-li/herai.com.au",
    repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "",
    category: "General",
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CONFIG_CATEGORY_ID || "",
    mapping: "pathname",
    term: "Welcome to @giscus/react component!",
    reactionsEnabled: "1",
    emitMetadata: "1",
    inputPosition: "bottom",
    theme: "dark_tritanopia",
    lang: "en",
    loading: "lazy",
  },
  googleAnalyticId: process.env.NEXT_PUBLIC_GA_ID || "",
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || "",
};

export default config;
