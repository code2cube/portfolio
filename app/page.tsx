"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { useState, useEffect } from "react";

interface fetchProject {
  title: string;
  cardID: string;
  repo: string;
}

interface Project {
  title: string;
  link: string;
  thumbnail: string;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/projects");
      const result = await response.json();

      const convertedProject: Project[] = result.projects.map(
        (i: fetchProject) => ({
          title: i.title,
          link: i.repo,
          thumbnail: i.cardID,
        })
      );

      setProjects(convertedProject);
    };

    fetchData();
  }, []);

  return (
    <div>
      <HeroParallax products={projects} />
    </div>
  );
}
