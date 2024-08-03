"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

interface techStackIcons {
  name: string;
}

export default function About() {
  const icons: techStackIcons[] = [
    { name: "html5-plain" },
    { name: "css3-plain" },
    { name: "tailwindcss-original" },
    { name: "javascript-plain" },
    { name: "typescript-plain" },
    { name: "nodejs-plain" },
    { name: "yarn-plain" },
    { name: "react-original" },
    { name: "nextjs-plain" },
    { name: "firebase-plain" },
    { name: "github-plain" },
    { name: "git-plain" },
  ];

  return (
    <div>
      <div className="text-white flex flex-col min-h-screen text-center items-center justify-center p-20 gap-20">
        <p className="lg:text-9xl md:text-7xl sm:text-5xl text-4xl playfair-display-header">
          About Me
        </p>
        <p className="lg:text-4xl md:text-2xl sm:text-xl text-md">
          I am a software developer with experience working hard and completing
          tasks quickly and efficiently under high pressure. I have experience
          in several industries, from dentistry to software development,
          allowing me to adapt to any situation. I have a proven track record of
          being a dependable team member and meeting deadlines. I enjoy learning
          new things and am always ready to expand my knowledge.
        </p>
        <div className="grid grid-cols-6 lg:text-9xl md:text-6xl sm:text-5xl text-3xl gap-10">
          {icons.map((item) => (
            <i
              key={item.name}
              className={`devicon-${item.name} transition ease-in duration-200 transform hover:scale-110 z-50`}
            ></i>
          ))}
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
