"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { LinkPreview } from "@/components/link-preview";
// Organized Array of Technology Slugs by Categories
const slugs = [
  // 1. Programming Languages
  "typescript",
  "javascript",
  "java",
  "go",
  "elixir",
  "swift",

  // 2. Front-End Development
  "react",
  "nextdotjs",
  "flutter",
  "html5",
  "css3",
  "expo",

  // 3. Back-End Development
  "nodedotjs",
  "express",
  "prisma",
  "drizzle",

  // 4. Mobile Development
  "android",
  "androidstudio",
  "xcode",

  // 5. Databases
  "postgresql",
  "mysql",

  // 6. DevOps & Deployment
  "docker",
  "amazonaws",
  "vercel",

  // 7. Version Control & Collaboration
  "git",
  "github",
  "gitlab",

  // 8. Design & Prototyping Tools
  "figma",

  // 9. Additional Tools
  "expo",      // Note: Expo appears in both Front-End and Mobile Development
  "drizzle",   // Note: Drizzle appears in both Back-End and Databases
  "xcode",     // Note: Xcode appears in both Mobile Development and Additional Tools
  "ios",
];

// Hashmap Mapping Slugs to Their Human-Readable Names
const techNames = {
  // 1. Programming Languages
  typescript: "TypeScript",
  javascript: "JavaScript",
  java: "Java",
  go: "Go",
  elixir: "Elixir",
  swift: "Swift",

  // 2. Front-End Development
  react: "React",
  nextdotjs: "Next.js",
  flutter: "Flutter",
  html5: "HTML5",
  css3: "CSS3",
  expo: "Expo",

  // 3. Back-End Development
  nodedotjs: "Node.js",
  express: "Express",
  prisma: "Prisma",
  drizzle: "Drizzle",

  // 4. Mobile Development
  android: "Android",
  androidstudio: "Android Studio",
  xcode: "Xcode",

  // 5. Databases
  postgresql: "PostgreSQL",
  mysql: "MySQL",

  // 6. DevOps & Deployment
  docker: "Docker",
  amazonaws: "AWS",
  vercel: "Vercel",

  // 7. Version Control & Collaboration
  git: "Git",
  github: "GitHub",
  gitlab: "GitLab",

  // 8. Design & Prototyping Tools
  figma: "Figma",
  ios: "iOS"

};
const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
      {/* Column 1 */}
      <div className="flex flex-col gap-4">
        {/* Hi! Section */}
        <motion.div
          className="bg-[#1C1C1C] rounded-2xl flex-grow p-6 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Hi, I'm Aniketh —
          </h1>
          <div className="flex flex-col gap-3 sm:gap-5 pt-2 sm:pt-5">
            <p className="text-[#808080] text-base sm:text-lg">
              <strong>CTO @ amaxa </strong> and <strong>student</strong>. I am passionate about technology, building things, and collaborating to innovate within teams.
              With a strong background in <strong>software engineering</strong> and <strong>leadership</strong>, I thrive on solving complex problems and optimizing
              processes to deliver impactful results.
            </p>
            <p className="text-[#808080] text-base sm:text-lg">
              I have extensive experience in developing and deploying cutting-edge applications, leveraging modern frameworks and
              cloud technologies. My expertise spans across full-stack development, system architecture, and cybersecurity.
              I am dedicated to fostering a collaborative environment where creativity and technical excellence intersect to achieve business goals.
            </p>
            <p className="text-[#808080] text-base sm:text-lg">
              Outside of my professional life, I enjoy mentoring aspiring developers, contributing to open-source projects, and
              staying up-to-date with the latest industry trends. I believe in continuous learning and am always eager to explore new technologies that can drive positive change.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-[#1C1C1C] rounded-2xl p-4 sm:p-6 flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Stack I Use</h2>
          <div className="h-fill overflow-y-auto">
            <div className="rounded overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 divide-x divide-y divide-white/50 border border-white/50 text-xs sm:text-sm">
                {slugs.map((slug, index) => (
                  <div key={slug} className="p-2 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2">
                    <img src={images[index]} alt={techNames[slug]} className="w-5 h-5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate text-center sm:text-left">{techNames[slug]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-4">
        <motion.div
          className="bg-[#1C1C1C] rounded-2xl p-4 sm:p-6 flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="space-y-4">
            {[
              {
                tags: [
                  "React",
                  "Next.js",
                  "TailwindCSS",
                  "Typescript",
                  "Postgres",
                ],
                dates: "2023-2025",
                title: "Cherry Creek OpenCourseWare",
                image: "/ocw-screenshot.png",
                href: "https://creekocw.com",
                description:
                  "The opencourseware website for Cherry Creek High School",
              },
              {
                title: "Trakr",
                dates: "2024-2025",
                image: "/trakr-screenshot.webp",
                href: "https://trakr-main.vercel.app",
                description:
                  "A habit tracking application that lets you compete with your friends",
                tags: ["React", "Next.js", "TailwindCSS", "Typescript"],
              },
            ].map((item, index) => (
              <ProjectCard {...item} key={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-4">
        {/* Work Experience */}
        <motion.div
          className="bg-[#1C1C1C] rounded-2xl p-4 sm:p-6 flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="space-y-4">
            <div>
              <LinkPreview
                url="https://www.amaxaimpact.org"
                imageSrc="/images/amaxa-thumbnail.png"
                isStatic
                className="font-bold"
              >
                <h5 className="font-bold bg-clip-text text-base sm:text-lg text-violet-600">
                  ámaxa
                </h5>
              </LinkPreview>

              <p className="font-semibold text-sm sm:text-base">
                Chief Technology Officer
              </p>
              <p className="font-normal text-xs sm:text-sm mb-4">
                Lead the development of ámaxa's web platform, enhancing project
                management and facilitating more effective communication for
                150+ clients across 45+ countries.
              </p>
              <p className="text-xs sm:text-sm mb-2">
                February, 2024 - Present · Part Time
              </p>
              <div className="flex space-x-1 items-start my-1 sm:my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mt-1 text-neutral-300"
                >
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005-.324l.005-.324a10 10 0 0 1 14.995-8.336zm-1.293 5.953a1 1 0 0 0 -1.32-.083l-.094.083l-3.293 3.292l-1.293-1.292l-.094-.083a1 1 0 0 0-1.403 1.403l.083.094l2 2l.094.083a1 1 0 0 0 1.226 0l.094-.083l4-4l.083-.094a1 1 0 0 0-.083-1.32z"
                    fill="currentColor"
                    strokeWidth="0"
                  ></path>
                </svg>
                <p className="font-normal text-xs sm:text-sm">
                  Developed an online platform with product management features
                </p>
              </div>
              <div className="flex space-x-1 items-start my-1 sm:my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mt-1 text-neutral-300"
                >
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005-.324l.005-.324a10 10 0 0 1 14.995-8.336zm-1.293 5.953a1 1 0 0 0 -1.32-.083l-.094.083l-3.293 3.292l-1.293-1.292l-.094-.083a1 1 0 0 0-1.403 1.403l.083.094l2 2l.094.083a1 1 0 0 0 1.226 0l.094-.083l4-4l.083-.094a1 1 0 0 0-.083-1.32z"
                    fill="currentColor"
                    strokeWidth="0"
                  ></path>
                </svg>
                <p className="font-normal text-xs sm:text-sm">
                  Redid the amaxa landing site to be more user-friendly and
                  intuitive
                </p>
              </div>
              <div className="flex space-x-1 items-start my-1 sm:my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mt-1 text-neutral-300"
                >
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005-.324l.005-.324a10 10 0 0 1 14.995-8.336zm-1.293 5.953a1 1 0 0 0 -1.32-.083l-.094.083l-3.293 3.292l-1.293-1.292l-.094-.083a1 1 0 0 0-1.403 1.403l.083.094l2 2l.094.083a1 1 0 0 0 1.226 0l.094-.083l4-4l.083-.094a1 1 0 0 0-.083-1.32z"
                    fill="currentColor"
                    strokeWidth="0"
                  ></path>
                </svg>
                <p className="font-normal text-xs sm:text-sm">
                  Build features for progress tracking, internal communication,
                  quantifying impact, and more
                </p>
              </div>
            </div>
          </div>
          <motion.button
            className="mt-2 sm:mt-4 text-[#808080] flex items-center"
            whileHover={{ color: "#FFFFFF" }}
          >
            See more <ChevronRight className="w-4 h-4 ml-1" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
