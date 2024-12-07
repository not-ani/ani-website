import { Icons } from "@/components/icons";

export const DATA = {
  name: "Aniketh Chenjeri",
  initials: "AC",
  url: "https://www.anikethchenjeri.com",
  location: "Denver, CO",
  locationLink: "https://www.google.com/maps/place/denver",
  description: "Developer and Student",
  summary:
    "I am a passionate student developer who loves to build things that solve problems. I am currently a high school student",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Java",
  ],
  contact: {
    email: "anikethchenjeri@gmail.com",
    social: {
      GitHub: {
        url: "https://github.com/not-ani",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/aniketh-chenjeri/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/not-ani",
        icon: Icons.x,
      },
      Youtube: {
        url: "https://youtube.com/c/not-ani",
        icon: Icons.youtube,
      },
    },
  },

  work: [
    {
      company: "Amaxa",
      href: "https://amaxaimpact.org",
      badges: [],
      location: "Remote",
      title: "Chief Techology Officer",
      logoUrl: "/amaxa_photo.jpg",
      start: "Feb 2024",
      end: "Current",
      description: "",
    },
  ],
  education: [
    {
      href: "https://www.cherrycreekschools.org/cherrycreek",
      school: "Cherry Creek High School",
      degree: "High School Diploma",
      logoUrl: "/creek.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "",
      href: "",
      dates: "",
      active: true,
      description: "",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "FBLA National Leadership Conference",
      dates: "",
      location: "",
      description: "",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
