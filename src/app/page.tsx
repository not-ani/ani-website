"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { LinkPreview } from "@/components/link-preview";

export default function Portfolio() {
  return (
    <div className="h-screen bg-[#121212] text-white p-8 grid grid-cols-3 gap-4 font-sans">
      {/* Column 1 */}
      <div className="flex flex-col gap-4">
        {/* Hi! Section */}
        <motion.div
          className="bg-[#1C1C1C] rounded-[32px] flex-grow p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-4">Hi, I'm Aniketh —</h1>
          <div className="flex flex-col gap-5 pt-5">
            <p className="text-[#808080] text-lg">
              CTO @ amaxaimpact. I love learning, building things, and exploring
              new technologies
            </p>
            <p className="text-[#808080] text-lg">
              Passionate about design and enjoy solving problems. With years of
              experience in product design, I bring creativity and functionality
              together to create impactful user experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-[#1C1C1C] rounded-[32px] p-6 flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Stack I use</h2>
          <div className="grid grid-cols-4 gap-4">
            {[].map((_, index) => (
              <motion.div
                key={index}
                className="bg-[#2C2C2C] rounded-xl h-12 w-12"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-4">
        <motion.div
          className="bg-[#1C1C1C] rounded-[32px] p-6 flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
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
                title: "Cherry Creek OpenCourseWare ",
                image: "/ocw-screenshot.png",
                href: "https://creekocw.com",
                description:
                  "The opencourseware website for cherry creek high school",
              },
              {
                title: "Trakr",
                dates: "2024-2025",
                image: "/trakr-screenshot.webp",
                href: "https://trakr-main.vercel.app",
                description:
                  "A habit tracking application that let's you complete with your friends",
                tags: ["React", "Next.js", "TailwindCSS", "Typescript"],
              },
            ].map((item, index) => (
              <ProjectCard {...item} key={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Column 3 (New) */}
      <div className="flex flex-col gap-4">
        {/* Work Experience */}
        <motion.div
          className="bg-[#1C1C1C] rounded-[32px] p-6 flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-4">
            <div>
              <LinkPreview
                url=" https://www.amaxaimpact.org"
                imageSrc="/images/amaxa-thumbnail.png"
                isStatic
                className="font-bold"
              >
                <h5 className="font-bold bg-clip-text text-lg md:text-lg lg:text-lg text-violet-600">
                  ámaxa
                </h5>
              </LinkPreview>

              <p className="font-semibold">Chief Technology Officer</p>
              <p className="font-normal text-sm md:text-sm lg:text-sm mb-4">
                Lead the development of ámaxa's web platform, enhancing project
                management <br /> and facilitating more effective communication
                for 150+ clients across 45+ countries.
              </p>
              <p className="text-sm font-normal w-45">
                February, 2024 - Present · Part Time
              </p>
              <div className="flex space-x-1 items-start my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-3 w-4 mt-1 text-neutral-300"
                >
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    fill="currentColor"
                    stroke-width="0"
                  ></path>
                </svg>
                <p className="font-normal text-sm md:text-sm lg:text-sm">
                  Developed an online platform with product managment features
                </p>
              </div>
              <div className="flex space-x-1 items-start my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-3 w-4 mt-1 text-neutral-300"
                >
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    fill="currentColor"
                    stroke-width="0"
                  ></path>
                </svg>
                <p className="font-normal text-sm md:text-sm lg:text-sm">
                  Redid the amaxa landing site to be more user-friendly and
                  intuitive
                </p>
              </div>
              <div className="flex space-x-1 items-start my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-3 w-4 mt-1 text-neutral-300"
                >
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    fill="currentColor"
                    stroke-width="0"
                  ></path>
                </svg>
                <p className="font-normal text-sm md:text-sm lg:text-sm">
                  Build a features for progress tracking, internal
                  communication, quantifying impact, and more
                </p>
              </div>
            </div>
          </div>
          <motion.button
            className="mt-4 text-[#808080] flex items-center"
            whileHover={{ color: "#FFFFFF" }}
          >
            See more <ChevronRight className="w-4 h-4 ml-1" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
